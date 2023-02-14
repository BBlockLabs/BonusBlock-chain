#!/bin/sh

MONIKER=${MONIKER:-node001}
CHAIN_ID=${CHAIN_ID:-bonusblock}
SEEDS=${SEEDS}
FEE=${FEE:-ubonus}
STARTING_AMOUNT=${STARTING_AMOUNT:-2000000000000000}
STARTING_STAKE=${STARTING_STAKE:-1000000000}
CLEAR=${CLEAR}
START_WITHOUT_SEEDS=${START_WITHOUT_SEEDS}
DIR="/root/.bonusblock/config/"

echo aa
echo $START_WITHOUT_SEEDS;
echo bb
echo $MONIKER;

# Coma separate the seed list
SEED_LIST=`echo $SEEDS | sed 's/,/\n/g'`

# if dir does NOT exist or clear IS set
if [ ! -d "$DIR" ] || [ ! -z "$CLEAR" ]; then
    if [ ! -z "$CLEAR" ] && echo "clear variable set"; then
        echo "Clearing old chain configuration"
        rm ~/.bonusblock -R
    fi

    echo "Init chain"
    bonus-blockd init --chain-id "$CHAIN_ID" "$MONIKER"

    sed -i -r '/\[rpc\]/,/laddr ?= ?.*/ s/^laddr ?= ?.*/laddr = \"tcp:\/\/0\.0\.0\.0:26657\"/' ~/.bonusblock/config/config.toml

    if ! bonus-blockd keys list | grep validator && echo "validator not found"; then
        echo "add validator account - copy mnemonic"
        bonus-blockd keys add validator --keyring-backend test
    fi

    # start without seeders
    if [ ! -z "$START_WITHOUT_SEEDS" ]; then
        echo "Staring new chain"

        sed -i -r 's/stake/'"$FEE"'/g'  ~/.bonusblock/config/genesis.json

        echo "Adding genesis account"
        bonus-blockd add-genesis-account validator $STARTING_AMOUNT$FEE --keyring-backend test

        echo "Adding staring staking"
        bonus-blockd gentx validator $STARTING_STAKE$FEE --chain-id "$CHAIN_ID" --keyring-backend test

        bonus-blockd collect-gentxs
    else
        echo "Staring chain from genesis seeders $SEEDS"

        echo "Remove generated genesis"
        rm ~/.bonusblock/config/genesis.json

        echo "Waiting for genesis to be downloadable"
        until [ ! -z "$GENESIS_URL" ]
        do
            for SEED_URL in $SEED_LIST
            do
                echo "trying http://$SEED_URL:26657.."

                if curl -s -f -o /dev/null "http://$SEED_URL:26657/genesis?"; then
                    GENESIS_URL=${SEED_URL}
                    break
                fi
            done

            if [ -z "$GENESIS_URL" ]; then
                echo "Waiting for any SEEDER to be online"
                sleep 1
            fi
        done

        echo "Downloading genesis file from http://$GENESIS_URL:26657/genesis?"
        curl http://$GENESIS_URL:26657/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
    fi

    echo "Validating genesis file"
    bonus-blockd validate-genesis;
fi

SEEDERS=""

echo "Collecting seed list"
until [ ! -z "$SEEDERS" ] || [ ! -z "$START_WITHOUT_SEEDS" ]
do
    for SEED_URL in $SEED_LIST
    do
        echo "trying http://$SEED_URL:26657.."

        SEED_ID=$(bonus-blockd status --node http://$SEED_URL:26657 | jq .NodeInfo.id -r)

        if [ ! -z "$SEED_ID" ]; then
            if [ ! -z "$SEEDERS" ]; then
                SEEDERS="$SEEDERS,$SEED_ID@${SEED_URL//./\\.}:26656"
            else
                SEEDERS="$SEED_ID@${SEED_URL//./\\.}:26656"
            fi
        fi
    done

    if [ -z "$SEEDERS" ]; then
        echo "Waiting for any SEEDER to be online"
        sleep 1
    fi
done

if [ ! -z "$SEEDERS" ]; then
    echo "Adding $SEEDERS to seeders"
    sed -i -r 's/^seeds ?= ?.*/seeds = \"'$SEEDERS'\"/' ~/.bonusblock/config/config.toml
fi
