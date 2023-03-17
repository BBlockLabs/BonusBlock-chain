---
sidebar_position: 4
---

# Running a Validator Node

The first step is to run a node. See the [Node Installation](../running-a-node/prerequisites) and [Joining a Network](../running-a-node/join-a-network) guides for instructions on how to get your node up and running.<br/>
After your node is running and synced, you can create a validator by staking tokens.

## Run a validator

Firstly, make sure you have properly [installed and configured your node](../running-a-node/node-installation).

After having followed the [instructions to join a network](../running-a-node/join-a-network) and your running node is synced, you can create a validator by staking tokens. Please make sure to create a validator only once the node is fully synced, so that you avoid being slashed.

Now, use the following command to create your validator:

```bash
bonus-blockd tx staking create-validator \
  --from=[validator account] \
  --amount=1000000000ubonus \
  --fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) \
  --chain-id=[chain-id] \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1" \
  --gas="auto" \
  --gas-adjustment=1.15 \
```

For example in the case of blocktopia-01 testnet, you can run:
```bash
bonus-blockd tx staking create-validator \
--from=my-validator \
--amount=1000000000ubonus \
--fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) \
--chain-id=blocktopia-01 \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--gas="auto" \
--gas-adjustment=1.15 \
```