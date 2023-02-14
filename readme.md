# Bonus block

## Get started
### Requirements

- go 1.19
- make


### Building

To build it in `~/go/bin/bonus-blockd`
```bash
make build
```

### Running
To run execute the `bonus-blockd` in the build directory

### Running docker image

Build the image

* `ARG MONIKER=node001` - Name of the node
* `ARG CHAIN_ID=bonusblock` - Chain id
* `ARG FEE=ubonus` -Token denom
* `ARG STARTING_AMOUNT=100000000000000` - Starting amount of tokens (with `FEE` denom)
* `ARG STARTING_STAKE=10000000000` - Starting stake of the validator
* `ARG SEED` - seed node url xx.xx.xx.xx format

!! Remember to copy the nmonic of the validator account after build

```bash
docker build ./
```

You can mount `/root/.bonus-block` folder to add custom config ./config

```bash
docker run [image]
```

## Joining the testchain

### without docker

1. Inti the node

```bash
bonus-blockd init [node name] --chain-id=blocktopia-01
```

2. Copy genesis file

```bash
rm ~/.bonusblock/config/genesis.json
curl http://office.altermail.lv:26657/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
```

3. Add seed node in `~/.bonusblock/config/config.toml` -> `e5e04918240cfe63e20059a8abcbe62f7eb05036@office.altermail.lv:26656`

4. start the node

```bash
bonus-blockd start
```
The node should sychronize blocks with the rest of the chain, if this step works make the chain into a daemon.

5. Add user to local node

```bash
bonus-blockd keys add [user] --recover
```
you will be asked for your mnemonic

6. Upgrade your node to a validator

```bash
bonus-blockd tx staking create-validator --amount=1000000000ubonus --fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) --moniker="node3" --chain-id=blocktopia-01 --commission-rate="0.10" --commission-max-rate="0.20" --commission-max-change-rate="0.01" --min-self-delegation="1" --gas="auto" --gas-adjustment=1.15 --from=validator
```

### with docker

1. build/start the image with env: `SEEDS=office.altermail.lv` and `MONIKER=[node name]`

2. Open bash in running container and add user to local node

```bash
bonus-blockd keys add [user] --recover --keyring-backend=test
```
you will be asked for your mnemonic

3. Open bash in running container and upgrade your node to a validator

```bash
bonus-blockd tx staking create-validator --amount=1000000000ubonus --fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) --moniker="node3" --chain-id=blocktopia-01 --commission-rate="0.10" --commission-max-rate="0.20" --commission-max-change-rate="0.01" --min-self-delegation="1" --gas="auto" --gas-adjustment=1.15 --from=validator
```
