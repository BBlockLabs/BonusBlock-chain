---
sidebar_position: 5
---

# Troubleshooting Common Issues With Validator Nodes

Here we walk through several common issues that you might encounter when you are running a validator node.

## "bonus-blockd: command not found" error

If you receive an  `bonus-blockd: command not found` Error message, you should:

#### Make sure your **GOPATH** is properly set
Ensure the Go environment variables are <a href="https://golang.org/doc/gopath_code#GOPATH" target="_blank">set properly</a> on your system.

A way to set up the **GOPATH** is by running the following commands:

```bash
export GOPATH=$HOME/go

export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

## Cleaning up

If you already tried setting up a node and need a cleanup, it may be good to remove any previous genesis file and configuration that you have used:


```bash
rm -rf .bonusblock/
rm -rf BonusBlock-chain/
rm go/bin/bonus-blockd

```

<strong>This command will remove all data and configs you already set.</strong>


## Unjail the Validator

Wait for your full node to reach the latest block, and run:

```bash
bonus-blockd tx slashing unjail <ValidatorAddress> --chain-id=<ChainId> --from=<Name>
```

where

- `<ValidatorAddress>` is the address of your validator account.
- `<Name>` is the name or address of the validator account. To find this information, run `bonus-blockd keys list`.

  **Warning**:
  If you don't wait for **bonus-blockd** to sync before running **unjail**, an error message will inform you that your validator is still jailed.

You can check your validator again to see if your voting power is back:

```bash
bonus-blockd status
```

If your voting power is less than it was previously is probably due to the fact you were slashed for downtime.

## Too many files open and bonusblockd crashes

The default number of files Linux can open per process is **1024**. **bonus-blockd** may open more than this amount, causing the process to crash. To fix this problem:

Increase the number of open files by running:


```bash
ulimit -n 4096
```

And restart the process by running:


```bash
bonus-blockd start
```


## Additional Considerations:

### **Connection errors**:
- Check your network settings: Make sure that your node's network settings are properly configured to communicate with other nodes on the network. Check your firewall settings and ensure that they are not blocking incoming or outgoing connections.
- Restart your node: Try restarting your node to see if that resolves the connection issue. Sometimes a simple restart can help fix communication problems.

### **Memory errors**:
- Make sure that your node's memory settings are properly configured for your node's resources and capabilities.

### **Disk space errors**:
- Make sure that your node's disk space settings are properly configured for your node's resources and capabilities.
- If your node is running out of disk space, consider pruning old blocks or transactions to free up space
