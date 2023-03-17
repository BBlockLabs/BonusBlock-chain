---
sidebar_position: 3
---

# Prepare the Account and Keys

Create a key to hold your account. Once you run this command, you may be prompted with a password dialogue, where you need to set up a password for your keyring. This password encrypts the private key of your node.

```bash
bonus-blockd keys add [account-name]
```

For example:

```bash
bonus-blockd keys add my-node
```

You see an output similar to the following:

```text
- name: my-node
  type: local
  address: bonus1kwpvzwtdd8qs27n7tpfr9awtfa7w5xgr974f2q
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A7dKw8Bs4IKyYANqRBRmuZZovpwJOAbLmOssp+is7h+j"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

picnic able angle merit arctic route resemble purity bone become match firm enjoy stem dry cake add elite filter point try wet earn blind
```
Here you can see your account details and the mnemonic phrase that is very crucial to recover the account.yarn