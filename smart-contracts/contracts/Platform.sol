// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Errors.sol";
import "./IAuthorVerificationBadge.sol";

contract Platform is Ownable {
    // function verifyAccount (user's will get an SBT after verifying, they need to link their twitter to be able to verify)
    // function monetizePost

    // function requestPost (we charge a % for every post that has been validated, because they earn money)
    // function tipCreator (should have option to do crosschain tips) - will go straight to creator's wallet, we charge a % for every tip
    
    // function tipPost (would go to our treasury, then author can withdraw) - we charge a % for every tip
    // would not implement now cause it's not a main feature, plus it can introduce vulnerabilities

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
    mapping(uint256 => EligiblePost) postIdToPost;
    // mapping(address => mapping(EligiblePost => bool)) public isPostValid;

    struct VerifiedAuthor {
        uint256 sbtId;
        address authorAddress;
        uint256 tippedAmount;
        bool exists;
        //uint256 platformBalance;
    }

    VerifiedAuthor[] verifiedAuthors;

    struct EligiblePost {
        uint256 id;
        address author;
        uint256 tippedAmount;
        uint256 totalUpvotes;
        bool exists;
    }

    EligiblePost[] public eligiblePosts;

    //--------------------------------------------------------------------
    // EVENTS

    event AuthorVerified(uint256 sbtId, address authorAddress);

    event MonitizedPostCreated(uint256 id, address creator);

    function verifyAccount() external {
        if (addressToVerifiedAuthors[msg.sender].exists) {
            revert Errors.AlreadyVerified(msg.sender);
        }
        //isVerified[msg.sender] = true;
        uint256 sbtId = verificationBadge.safeMint(msg.sender);
        VerifiedAuthor memory _verifiedAuthor = VerifiedAuthor(
            sbtId,
            msg.sender,
            0,
            true
        );
        addressToVerifiedAuthors[msg.sender] = _verifiedAuthor;
        verifiedAuthors.push(_verifiedAuthor);

        emit AuthorVerified(sbtId, msg.sender);
    }

    function setNFTs(address _verificationBadge) public onlyOwner {
        verificationBadge = IAuthorVerificationBadge(_verificationBadge);
    }

    function monetizePost(uint256 _postId, address _author) external {
        if (msg.sender != _author) {
            revert Errors.UnAuthorizedCaller(msg.sender);
        }

        if (postIdToPost[_postId].exists) {
            revert Errors.AlreadyEligiblePost(_postId);
        }

        postIdToPost[_postId] = EligiblePost(_postId, _author, 0, 0, true);
        eligiblePosts.push(postIdToPost[_postId]);

        emit MonitizedPostCreated(_postId, _author);
    }
}
