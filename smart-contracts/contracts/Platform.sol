// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Errors.sol";
import "./IAuthorVerificationBadge.sol";

contract Platform is Ownable {

    // function verifyAccount (user's will get an SBT after verifying, they need to link their twitter to be able to verify)
    
    // function monetizePost
    // function requestPost (we charge a % for every post that has been validated, because they earn money)
    // function tipCreator (should have option to do crosschain tips) - will go straight to creator's wallet, we charge a % for every tip
    // function tipPost (would go to our treasury) - we charge a % for every tip
    // function upvotePost (only verified users with SBTs can upvote)
    
    // function fufillPostPayment //chainlink automation call
    // function refundUsers //chainlink automation call
    // only user's with sbts can earn on our platform, before a user can earn he needs to be a verified author

    //--------------------------------------------------------------------
    // VARIABLES

    //address public admin;

    IAuthorVerificationBadge public verificationBadge;

    uint256 public verifiedAuthorsCount;

    mapping(address => VerifiedAuthor) addressToVerifiedAuthors;
    mapping(address => bool) isVerified;

    struct VerifiedAuthor {
        uint256 sbtId;
        address authorAddress;
        uint256 tippedAmount;
        //uint256 platformBalance;
    }

    VerifiedAuthor[] verifiedAuthors;

    struct EligiblePost {
        uint256 id;
        address author;
        uint256 tippedAmount;
        uint256 totalUpvotes;
    }

    EligiblePost[] public eligiblePosts;
    
    //--------------------------------------------------------------------
    // EVENTS

    event AuthorVerified(uint256 sbtId, address authorAddress);

    event MonitizedPostCreated(
        uint256 id,
        address creator,
    );

    function verifyAccount() external {
        if(isVerified[msg.sender]) {
            revert Errors.AlreadyVerified();
        }
        isVerified[msg.sender] = true;
        uint256 sbtId = verificationBadge.safeMint(msg.sender);
        VerifiedAuthor memory _verifiedAuthor = VerifiedAuthor(sbtId, msg.sender, 0);
        addressToVerifiedAuthors[msg.sender] = _verifiedAuthor;
        verifiedAuthors.push(_verifiedAuthor);

        emit AuthorVerified(sbtId, msg.sender);
     }

     function setNFTs(address _verificationBadge) public onlyOwner{
        verificationBadge = IAuthorVerificationBadge(_verificationBadge);
     }

     function monetizePost(uint256 _postId, address _author) external {
        if(msg.sender != author) {
            revert Errors.UnAuthorizedCaller;
        }

     }
}
