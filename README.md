# Cross-Chain Bridge Templates

## Create pegged token on Binance Smart Chain for existing Ethereum token

You have to create the token on Binance Smart Chain. It's recommended to use the same account that was used for your ERC20 token and the same nonce - this will result in the same token address on both chains.

### 1. TGE on Binance Smart Chain

We recommend to create the pegged token on Binance Smart Chain with the same account that was used for the ERC20 token.
Using the same nonce as for TGE on Ethereum you will generate the same token contract address on Binance Smart Chain.

### 2A. Grant mint permissions

The bridge needs mint permissions for the token on Binance Smart Chain. You can grant these permission using a web Ui 
like https://bscscan.com or using hardhat. We provided a script to make it as easy as possible.

Bridge address on Binance Smart Chain: `0xAe1A48AA57CF800998989Ec085Bb14605b3D711F`

### 2B. Deploy ProxyMinter

The Bridge can use a ProxyMinter deployed by your project to avoid granting mint permissions to the Cross-Chain-Bridge.
You can find an example file in `./contracts/ProxyMinter.sol`.


### 3. Whitelisting

Please ping a team member afterwards if you are in contact already. 
Otherwise send an email to crosschainbridge@tixl.org containing a link to your token and the ProxyMinter if you decided to go with 2B.
We will add your token as soon as possible.