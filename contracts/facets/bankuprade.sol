// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {Appstorage} from "../libraries/Appstorage.sol";

contract Bankupgrade{
    Appstorage internal s;

    function desposite() external  payable{
        require(s.users[msg.sender].registered == true, "registered before");
        require(msg.value >= 1, "can't deposite zero ethers");
        s.users[msg.sender].balances = msg.value;
    }
}