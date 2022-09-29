// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {Appstorage} from "../libraries/Appstorage.sol";

contract Bank{
    Appstorage internal s;

    function register() external {
        require(s.users[msg.sender].user == address(0), "registered before");
        s.users[msg.sender].user = msg.sender;
        s.users[msg.sender].balances = 0;
        s.users[msg.sender].registered = true;
    }

    function balanceofUser() external view returns(uint){
        return s.users[msg.sender].balances;
    }

    function name() external pure returns(string memory){
        return "TO BE USED TO TEST REMOVING OF FUNCTIONS";
    }
}