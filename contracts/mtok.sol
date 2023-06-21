// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract mtok is ERC20, Ownable {
    constructor() ERC20("MTok", "MT") { }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transferTok(address to, uint256 amount) public {
        approve(msg.sender, amount);
        transferFrom(msg.sender, to, amount);
    }

    function burn(uint256 amount) public {
        approve(msg.sender, amount);
        _burn(msg.sender, amount);
    }
}