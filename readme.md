# Bonus block

## Get started
### Requirements

- go 1.19
- make
- curl


### Building

To build it in `~/go/bin/bonus-blockd`
```bash
make build
```

## Joining the testchain

1. Inti the node
```bash
bonus-blockd init [node name] --chain-id=blocktopia-01
```

2. Copy genesis file
```bash
rm ~/.bonusblock/config/genesis.json
curl https://bonusblock-testnet.alter.network/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
```
Or copy it from the github repository

3. Add seed node in `~/.bonusblock/config/config.toml` -> `e5e04918240cfe63e20059a8abcbe62f7eb05036@bonusblock-testnet-p2p.alter.network:26656`

4. start the node
```bash
bonus-blockd start
```
The node should sychronize blocks with the rest of the chain, if this step works make the chain into a daemon.

5. Add user to local node

 * Existing user:
```bash
bonus-blockd keys add [user] --recover
```
you will be asked for your mnemonic

 * New user:
```bash
bonus-blockd keys add [user]
```
You will be given the mnemonic of the new user

6. Add tokens to your account from the faucet - https://faucet.bonusblock.io/

7. Upgrade your node to a validator
```bash
bonus-blockd tx staking create-validator --amount=1000000000ubonus --fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) --moniker="node3" --chain-id=blocktopia-01 --commission-rate="0.10" --commission-max-rate="0.20" --commission-max-change-rate="0.01" --min-self-delegation="1" --gas="auto" --gas-adjustment=1.15 --from=validator
```
