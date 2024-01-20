// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

library Errors {
    
    error AlreadyVerified(address author);

    error UnAuthorizedCaller(address caller);
}