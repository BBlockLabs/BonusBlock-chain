---
sidebar_position: 1
---

# Prerequisites

This guide explains what are the requirements to install and run an BonusBlock validator node.


## Hardware requirements

The following hardware requirements are expected:
- Linux distribution
- x86_64 processor
- 16 GB RAM
- 500 GB of storage\*

Storage size requirement will increase as new block are generated.

## Installing Prerequisites

```bash
# updates and upgrades the list of local packages
sudo apt-get update && sudo apt upgrade -y

# installs build-essential package, make, curl, jq and git
sudo apt-get install build-essential curl make jq git -y

```

## Installing Go
Go Version 1.19 is required to run an BonusBlock node. Please find a <strong><a href="https://golang.org/doc/install" target="_blank">guide here</a></strong>
on how to install Go.

Ensure the Go environment variables are <a href="https://golang.org/doc/gopath_code#GOPATH" target="_blank">set properly</a>
on your system.

As an example, you may need to install Go by running:

```bash
sudo apt install golang-go -y
```

and set up go environment variables
```bash
nano ~/.bashrc
```
add following two lines to that file
```text
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

and apply those changes for current session by running:

```bash
source ~/.bashrc
```