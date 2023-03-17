---
sidebar_position: 2
---

# Node Installation
This guide explains how to install and run an BonusBlock full node.

## Build bonus-blockd from Source

### Clone the repository

```bash
git clone https://github.com/BBlockLabs/BonusBlock-chain
cd BonusBlock-chain
```

###### Build bonus-blockd
build and install the `bonus-blockd` daemon:
```bash
make build
```
Confirm that the installation has been completed by running the following command:
```bash
bonus-blockd
```

# Initialize the Node
Initialize the genesis.json file that is required to establish a network. You will also need to choose a moniker for your node, which is the name that will appear on the blockexplorer once you will start validating.

```bash
bonus-blockd init [moniker] --chain-id=[chainid]
```

For example, for the BonusBlock test network:
```bash
bonus-blockd init my-cool-moniker --chain-id=blocktopia-01
```