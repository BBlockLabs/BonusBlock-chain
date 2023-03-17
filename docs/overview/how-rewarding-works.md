---
sidebar_position: 3
---

# How Rewarding works

------------------

Rewards is one the core sections of BonusBlock Network. The rewards system is designed to reward users for their on-chain activity across Web3 for using networks, dApps and CEXs.


The rewards system has three types of rewards: Shared Gas Fees, Inflationary Rewards and External Reward Pools. This guide will explore each of these reward types in more detail of calculation methods and how users will be able to claim them.

### **Shared Gas Fees**

Each computation or operation on a blockchain comes with a cost that is referred to as "gas". When a user wants to transact with a smart contract, the user needs to pay this gas fee as a transaction fee.
In most blockchain networks, these fees go to the validator who is responsible for adding the transaction to the blockchain. On BonusBlock, this fee is split between the validator and the dapp developer as a reward.

### **Inflationary Rewards**

Following the Cosmos mint module, new coins are added to the BonusBlock network to reward stakers and other participants. Like the gas fee rebates, these rewards are also split between users and validators.
The number of coins that can be rewarded will change over time as it is connected to the ratio of coins that are being staked on the network. As this amount changes, so does the reward split between validators and developers.

### **Minimum Consensus Fee**
To protect the transaction fees rewarded to developers and prevent spam attacks on the network, there is a minimum consensus fee connected to each new block. This is the minimum amount that a user must pay in gas fees for a transaction.

## Calculating Inflationary Rewards
The inflation rate on the BonusBlock follows the mint module in the Cosmos Hub. In this module, token supply can be increased between 10% to 24% annually. The increase depends on the ratio of the tokens that are being staked.

### **Inflationary Rewards Split**
At the genesis block, 30% of the inflation rewards will go to users and 75% will go to validators. So if the network sees total inflation of 10% then 3% will go to users and 7% will be given to validators. This split is a configurable parameter so it can change over time through a governance vote by the BonusBlock community.

## Calculating Gas
The transaction fee rewards are calculated by the amount of gas that a smart contract uses directly or by other contracts calling it. The more gas a contract uses, the bigger the reward.
Each block uses gas to complete the transactions included in the block. Rewards for a contract are calculated only on the execution of that specific contract and not all the contracts that are included in the block.


### **Introducing methodology for internal pool management**

Developing an algorithm for reward distribution that takes the following factors into account requires a complex set of rules and calculations. Here is a the approach that takes each of the five factors into account:

1. **Determine the end goal:** The first step is to determine the desired buying pressure versus selling pressure. This will be used to guide the overall reward distribution strategy.

2. **Calculate the reward multiplier:** For each user, calculate a reward multiplier based on the number of tokens they have staked. The higher the number of tokens staked, the higher the reward multiplier, taken by on-chain activity against all participating users.

3. **Evaluate on-chain activity:** Calculate the level of on-chain activity for each user and use this to adjust the reward distribution. Users with higher on-chain activity will receive a higher proportion of the available rewards.

4. **Allocate rewards from the pool:** Allocate rewards from the limited pool of rewards based on the reward multipliers and on-chain activity levels calculated for each user. The exact distribution will depend on the overall end goal, as determined in step 1.

5. **Categorize activities:** Categorize the type of activity each user is engaging in based on the product type or category. This information can be used to adjust the reward distribution further, for example by giving higher rewards for users engaging in activities related to products or categories with lower overall activity levels.

6. **Consider external reward pool:** If there is an external reward pool, adjust the reward distribution accordingly to include these rewards in the calculation.

##### **Setting formula example:**

* **P** = desired buying pressure/selling pressure ratio
* **N** = total number of users
* **T_i** = number of tokens staked by user i
* **A_i** = on-chain activity level of user i
* **R_i** = reward multiplier for user i (based on number of tokens staked)
* **C_i** = category variable of product type for user i (e.g. 1 for high-demand products, 0 for low-demand products)
* **RP** = total rewards available in the reward pool
* **EP** = total rewards available in any external reward pool

The reward for **_user i_** can be calculated as follows:

```
Reward_i = (RP / Σ(R_j * A_j) * R_i * A_i * C_i) + (EP / N)
```


**This formula takes into account the following factors:**

1. **Desired buying pressure/selling pressure ratio:** This is not explicitly included in the formula, but it is used to guide the overall reward distribution strategy.

2. **Reward multiplier based on tokens staked:** The reward multiplier **R_i** is calculated based on the number of tokens staked by **_user i_**.

3. **On-chain activity:** The on-chain activity level **A_i** is used to adjust the reward distribution, with users who have higher on-chain activity levels receiving a higher proportion of the available rewards.

4. **Limited pool of rewards:** The total rewards available in the reward pool RP are divided among users based on their reward multipliers, on-chain activity levels, and the category variable of the product type they are engaging with.

5. **Categorization of activities:** The category variable **C_i** is used to adjust the reward distribution based on the type of activity each user is engaging in.

6. **External reward pool:** If there is an external reward pool, the total rewards available in that pool **EP** are divided equally among all users.


##### An example of how the reward for a single user (**i**) can be calculated using the formula I provided earlier:

Let's assume that for this **_user i_**, the following values apply:

* **T_i = 150 tokens**
* **A_i = 20 activities per day**
* **C_i = 1 (high-demand product category)**


To calculate the reward for **_user i_**, we first need to calculate their reward multiplier **_R_i_**. This can be done using the following formula:

```
R_i = T_i / Σ(T_j)
```
Where **Σ(T_j)** is the sum of all tokens staked by all users. In this case, we assume that the total number of tokens staked across all users is 10,000,000, so:

`R_i = 150 / 10,000,000 = 0.000015`

Next, we need to adjust the reward for **_user i_** based on their on-chain activity level **A_i** and the category variable **C_i**. We can do this using the following formula:

```
Adjusted Reward_i = (RP / Σ(R_j * A_j) * R_i * A_i * C_i) + (EP / N)
```

**Where:**
* **RP** is the total rewards available in the reward pool (20000 tokens)

* `Σ(R_j * A_j)` is the sum of the reward multipliers **R_j** multiplied by the on-chain activity levels **A_j** for all users **j**

* **EP** is the total rewards available in any external reward pool (50000 tokens)

* **N** is the total number of users (100000)

In this case, let's assume that `Σ(R_j * A_j)` for all **_users j_** is 1,000, and that the desired buying pressure/selling pressure ratio (**P**) is 60/40.

Using these values, the adjusted reward for _**user i**_ can be calculated as follows:

`Adjusted Reward_i = (20000 / 1,000 * 0.000015 * 20 * 1) + (50000 / 100000) = 0.006 + 0.5 = 0.506`

So the adjusted reward for **_user i_** would be 0.506 tokens.


## Regulating internal limited reward pool by Buying/Selling pressure market condition

### **Regulating B/S**

1. Calculate the ratio of buying pressure to selling pressure, **B/S**. This can be done by dividing the current buy volume by the current sell volume.

2. Calculate the difference between the desired ratio, **P**, and the actual ratio, **B/S**. If the actual ratio is greater than the desired ratio, the result will be negative.

3. Set a coefficient, **k**, to adjust the amount of rewards available in the reward pool. The coefficient should be a positive number between 0 and 1, and can be set based on the desired level of sensitivity to changes in market conditions.

4. Calculate the new reward pool size, **RP_new**, as follows:
<br/>
```
RP_new = RP * (1 + k * difference)
```

**Where:**
* **RP** is the current reward pool size

* **difference** is the difference between the desired and actual buying/selling pressure ratios (as calculated in step 2)

* **k** is the coefficient used to adjust the reward pool size

If the difference is **negative** (i.e. the actual ratio is higher than the desired ratio), then the formula should be adjusted as follows:
```
RP_new = RP / (1 + k * abs(difference))
```
Where **abs(difference)** is the absolute value of the difference between the desired and actual buying/selling pressure ratios.


Overall, this formula provides a way to adjust the reward pool size based on the desired buying pressure/selling pressure ratio. By increasing or decreasing the reward pool size in response to changes in market conditions, we can help to stabilize the market and incentivize users to hold and stake tokens rather than sell them, which can lead to long-term growth and stability.

1. **Initialize the reward pool:** Set the initial amount of rewards available in the reward pool, RP, to a predetermined value.

2. **Monitor market conditions:** Continuously monitor relevant market indicators such as trading volume, order book depth, and other relevant market data to assess the current market conditions. This data is obtained from external APIs.

3. **Calculate the buying and selling pressure:** Based on the market data, calculate the buying and selling pressure. This can be done by analyzing the current order book and trading volume to estimate the current demand and supply of the token.

4. **Determine the desired buying/selling pressure ratio:** Set a desired buying pressure/selling pressure ratio, P, that corresponds to the desired market conditions. This can be set based on factors such as market demand, investor sentiment, and other relevant factors.

5. **Adjust the reward pool:** Based on the calculated buying and selling pressure and the desired P ratio, adjust the amount of rewards available in the reward pool, RP. If the calculated buying pressure is higher than the desired ratio, increase the amount of rewards available in the pool. If the calculated selling pressure is higher than the desired ratio, decrease the amount of rewards available in the pool.

### **Formula that accounts for the buying and selling pressure and adjusts the reward pool size accordingly**

1. Calculate the ratio of buying pressure to selling pressure, **B/S**. This can be done by dividing the current buy volume by the current sell volume.

2. Calculate the difference between the desired ratio, **P**, and the actual ratio, **B/S**. If the actual ratio is greater than the desired ratio, the result will be negative.

3. Set a coefficient, **k**, to adjust the amount of rewards available in the reward pool. The coefficient should be a positive number between 0 and 1, and can be set based on the desired level of sensitivity to changes in market conditions.

4. Calculate the new reward pool size, **RP_new**, as follows:
* a. If the actual ratio is less than the desired ratio (i.e. the selling pressure is high), set `RP_new = RP * (1 - k * difference)`.

* b. If the actual ratio is greater than the desired ratio (i.e. the buying pressure is high), set `RP_new = RP * (1 + k * difference)`.

**Where:**
* **RP** is the current reward pool size
* **difference** is the difference between the desired and actual buying/selling pressure ratios (as calculated in step 2)
* **k** is the coefficient used to adjust the reward pool size


**An example assuming the following values:**

* **RP** = 100,000 tokens (current reward pool size)
* **B** = 20,000 tokens (current buy volume)
* **S** = 10,000 tokens (current sell volume)
* **P** = 60/40 (desired buying pressure/selling pressure ratio)
* **k** = 0.1 (coefficient used to adjust the reward pool size)

Using these values, we can first calculate the ratio of buying pressure to selling pressure, **B/S**: <br/>
`B/S = B / S = 20,000 / 10,000 = 2`

Next, we can calculate the difference between the desired and actual ratios: <br/>
`difference = P - B/S = 0.6 - 2 = -1.4`

Since the difference is negative, we can adjust the formula as follows: <br/>
`RP_new = RP / (1 + k * abs(difference))`

Plugging in the values we get: <br/>
`RP_new = 100,000 / (1 + 0.1 * abs(-1.4)) = 96,923 tokens`

So the new reward pool size would be **96,923 tokens**.
