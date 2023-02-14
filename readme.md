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
sudo docker build ./
```

You can mount `/root/.bonus-block` folder to add custom config ./config

```bash
sudo docker run [image]
```
