---
sidebar_position: 1
---

 # About BonusBlock

-----------------------
When it comes to blockchain networks and dApps, we can find many. The level of sophistication of how they work and how they incentivize users is different. BonusBlock is a simple, yet unique blockchain network that rewards users for on-chain activity across Web3 and provides an incentive to build healthier relationships, loyalty, and community engagement with project stakeholders.

## The mission

Primarily the mission is to assist in Web3 adoption by supporting networks and decentralized application users with rewards determined by their on-chain activity.

Rewards play an important role in incentivizing user engagement with blockchain-based products and can help to increase overall adoption and usage of the network. By providing users with incentives for their activity, blockchain-based products can create a more engaging and rewarding user experience, and improve relationships and loyalty towards users, which can help to drive growth and success for the network and decentralized applications. Such an approach will engage projects to reward users who are most active on a daily basis, as well as compete with other projects for their users' trust.


## Architectural Overview


BonusBlock is a Cosmos SDK blockchain powered by [Tendermint](https://tendermint.com/). The network uses modified Cosmos modules to manage inflation and rewards system, including:
- Minting - Responsible for minting tokens and managing inflation.
- CosmWasm - A runtime for WebAssembly Smart Contracts.
- Staking - Manages the voting power of validators.
- Governance - Supports the one-vote-per-token voting and governance system for token holders.
- IBC - Inter-Blockchain Communication protocol that enables asset transfers across Cosmos blockchains.

In addition to using the predefined Cosmos modules, BonusBlock uses four custom modules for additional features of the network:
- Machine Learning interface - tracks and summarises data from blockchain oracles for each wallet activity, classifying the actions per action, per product, and per network.
- Wallet Activity Tracking - This module enables to identify swiftly the wallet interaction
- Reward system - deploying on-chain data about distributed rewards based on activity, generating smart contract per user with all relevant data
- Native token multiplier - an algorithm that determines the increased reward distribution based on how many tokens the user is staking. The larger the amount of tokens staked, the higher the multiplier of rewards

BonusBlock creates a Cosmos SDK-based chain with support for WASM smart contract execution that rewards users for doing their daily on-chain activity. The combination of both predefined Cosmos modules and custom BonusBlock modules allows the network to deliver the following features:
- Reward system for users' activity
- Smart interface with Machine Learning implementation to follow on-chain activity for each user
- Manage smart contract data as a user
- Multiplier system for larger reward distribution based on staking

The network is using blockchain oracles to retrieve on-chain data activity for all wallets on Web3. The key to the oracle's functionality is its ability to provide reliable and accurate data to the blockchain. To achieve this, oracles use a variety of methods to verify the data they collect, including cryptographic proofs, consensus algorithms, and reputation systems.


## Smart Contracts

The BonusBlock blockchain supports Smart Contract deployment. Any CosmWasm smart contract flavor that is supported by Cosmos SDK can be deployed and run on the BonusBlock. CosmWasm also allows multi-chain contracts to be built, so you can migrate existing contracts to the BonusBlock chain due to its high interoperability and independence from the host.


## The economy of the network

BonusBlock focuses to resolve Web3 adoption with rewarding users based on their activity on-chain. The inflation coming from staking covers minimal distribution mechanisms of the network and incentives users to stake more. Meaning, users staking $BONUS will unlock a better multiplier for their rewards calculation algorithm provided by one of the modules on BonusBlock network. This is similar to how users are being rewarded by securing the network security and consensus.

BonusBlocks intends to implement three mechanisms for Web3 networks and projects to utilize:

1. 	BonusBlock reward distribution based on inflation rewards
2. 	Share of gas fees generated
3. 	External reward pool (optional to networks and projects)

BonusBlocks supports every user on Web3 to register their profile and add their wallet to receive on a weekly basis rewards based on their on-chain activity. Users will be able to register and connect their new wallets. If users want to track more than five wallets, they will need to make sure to meet criteria to unlock another 5 wallet connections. This approach mitigates malicious parties.

### **Reward Distribution based on inflation rewards**

The registered user reward is compensated by the inflationary state of the network. The inflation is set to be between 10 – 24%. Calculation mechanism based on various types of on-chain activity that are grouped by:
Network interactions (governance and interaction with staking)
Decentralised application interactions:

* NFT – mint, sell, burn, auction (regular NFT transfers are excluded)
* DeFi – swapping, liquidity providing, bonding, Loan products - borrower actions, creditor actions
* Gaming – interaction with the platform, in-game purchases with wallet
* Metaverse – interacton with the platform
* Social platform interactions and on-chain activity
* Other (un-categorised values that will be defined within time of setups)

### **Shared gas fees**

Generated gas fees are part of the rewards distributed to the users, meaning, BonusBlock activity on-chain will be rewarded to the users generating transactions. Part of the fees will be distributed to the BonusBlock treasury for operational costs coverage.

### **Reward pool**

Any listed blockchain network or decentralized application that is supported by BonusBlock network will be able to add an extra reward pool for their users. Projects can create a smart contract pool that is connected with BonusBlock users activity, where distribution is handled by on-chain activity data. Extra incentivisation can attract more users to the network and decentralised application use. New projects with airdrops can use this pool to incentivise more on-chain activity instead of one-time ask.

#### **A study case:**
SushiSwap and Uniswap are supported by BonusBlock. If UniSwap provides extra rewards to the pool on BonusBlock, this will trigger SushiSwap to seek more of their daily activities on Uniswap, since it offers larger rewards for the activity. There is a possibility for a project to have a global notification option sent to the users to inform them about a new pool setup.

#### **Study case:**
A DEX is launching a new feature on the platform, for instance, lending. The platform is interested in the current users of the platform try out the feature, as well as interacting. The DEX will be able to create a reward pool that is specific to the new feature on-chain activity on BonusBlock, increasing faster product-market-fit for the feature, attracts more users from different other platforms, and generates on-chain activity.

## Governance state

Governance is the process by which BonusBlock network participants and token holders can influence the future direction of the protocol through proposals and on-chain voting.
In addition to fees, accruing value, rewards, access to premium services and staking, BonusBlock’s native token $BONUS is used for governance. This governance model helps maintain and support BonusBlock’s decentralized community while ensuring fair and transparent participation. All holders of the native token can propose changes to the BonusBlock’s network and vote on active proposals. Proposals that reach a consensus threshold are adopted, whether a specific feature or even changing the governance system itself.
