pragma solidity > 0.7.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ProxyMinter
{
    IERC20 public TokenAddress;
    address public Bridge;

    constructor (address token, address bridge)
    {
        Bridge = bridge;
        TokenAddress = IERC20(token);
    }

    function burnFrom(address fromAddress, uint256 amount) public
    {
        require(msg.sender == Bridge);
        TokenAddress.transferFrom(fromAddress, address(this), amount);
    }

    function mint(address receiverAddress, uint256 amount) public
    {
        require(msg.sender == Bridge);
        TokenAddress.transfer(receiverAddress, amount);
    }
}