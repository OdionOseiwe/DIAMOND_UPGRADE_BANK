// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

    struct userdails{
        address user;
        uint balances;
        bool registered;
    }

struct Appstorage{
    mapping(address => userdails) users;
    address owner;

}


library slot{
    function appStorage() internal pure returns(Appstorage storage s) {    
        assembly { s.slot := 0 }
    }
}
