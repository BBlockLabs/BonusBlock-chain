---
sidebar_position: 5
---

# Join a Network
Now you would need your node to join the BonusBlock 

## Retrieve the Genesis file
The first step is to download the Genesis file, by fetching it from an available node:
```bash
# Remove existing genesis.json if exists
rm ~/.bonusblock/config/genesis.json

curl https://bonusblock-testnet.alter.network/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
```

## Start bonus-blockd
Start the bonus-blockd and join the network

```bash
bonus-blockd start --p2p.seeds Address1@Host_Name_OR_IP1:PORT1, ...AddressN@Host_Name_OR_IPN:PORTN
```
Below is the command to join the BonusBlock testnet:

```bash
bonus-blockd start --p2p.seeds e5e04918240cfe63e20059a8abcbe62f7eb05036@bonusblock-testnet-p2p.alter.network:26656
```

You can sync from a specific block by adding the flag: --halt-height [blockheight]
