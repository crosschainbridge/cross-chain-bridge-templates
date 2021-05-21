# Cross-Chain Bridge Templates

## Create pegged token on Binance Smart Chain for existing Ethereum token

### TGE on Binance Smart Chain

We recommend to create the pegged token on Binance Smart Chain with the same account that was used for the ERC20 token.
Using the same nonce as for TGE on Ethereum you will generate the same token contract address on Binance Smart Chain.

### Grant mint permissions

The bridge needs mint permissions for the token on Binance Smart Chain. You can grant these permission using a web Ui 
like https://bscscan.com or using hardhat. We provided a script to make it as easy as possible.