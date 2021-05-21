const keccak256 = require('keccak256');
require('@nomiclabs/hardhat-web3');

task('addRoleToToken', 'Adds the given role to the given token')
    .addParam('tokenAddress', 'Smart contract address of the token to be updated')
    .addParam('role', 'Name of the role to assign')
    .addParam('receiverAccount', 'The account to receive the role')
    .setAction(async ({ receiverAccount, tokenAddress, role }) => {
        const [account] = await hre.ethers.getSigners();
        const roleHex = `0x${keccak256(role).toString('hex')}`;
        const token = await hre.ethers.getContractAt('MintableToken', tokenAddress, account);
        const grant = await token.grantRole(roleHex, receiverAccount);
        await grant.wait();
        console.info('Role assigned ✅');
    });