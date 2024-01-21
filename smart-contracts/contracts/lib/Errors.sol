// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

library Errors {
    
    error AlreadyVerified(address author);

    error UnAuthorizedCaller(address caller);

    error AlreadyEligiblePost(uint256 postId);

    error InEligiblePost(uint256 postId);

    error InvalidMember(address caller);

    error InvalidSbtHolder(address caller);

    error AlreadyUpvotedError();

    error PostAlreadyRequested();

    error InvalidRequestedPost();
}