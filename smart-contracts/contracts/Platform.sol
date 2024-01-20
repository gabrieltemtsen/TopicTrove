// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./lib/Errors.sol";
import "./IAuthorVerificationBadge.sol";

contract Platform is Ownable {
    // function verifyAccount (user's will get an SBT after verifying, they need to link their twitter to be able to verify)
    // function monetizePost

    // function requestPost (we charge a % for every post that has been validated, because they earn money)
    // function tipCreator (should have option to do crosschain tips) - will go straight to creator's wallet, we charge a % for every tip

    // function upvotePost (only verified users with SBTs can upvote)
    // function fufillPostPayment //chainlink automation call
    // function refundUsers //chainlink automation call
    // only user's with sbts can earn on our platform, before a user can earn he needs to be a verified author

    // function tipPost (would go to our treasury, then author can withdraw) - we charge a % for every tip
    // would not implement now cause it's not a main feature, plus it can introduce vulnerabilities

    //--------------------------------------------------------------------
    // VARIABLES

    //address public admin;

    IAuthorVerificationBadge public verificationBadge;

    uint256 public verifiedAuthorsCount;

    mapping(address => VerifiedAuthor) public addressToVerifiedAuthors;
    mapping(uint256 => EligiblePost) public postIdToPost;
    //mapping(uint256 => mapping(address =>  EligiblePost[])) public postIdToAuthorToPosts;

    struct VerifiedAuthor {
        uint256 sbtId;
        address authorAddress;
        uint256 tippedAmount;
        bool exists;
        uint256[] eligiblePostsId;
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

    event MonetizedPostCreated(uint256 id, address creator);

    function verifyAccount() external {
        if (addressToVerifiedAuthors[msg.sender].exists) {
            revert Errors.AlreadyVerified(msg.sender);
        }
        //isVerified[msg.sender] = true;
        uint256 sbtId = verificationBadge.safeMint(msg.sender);
        uint256[] memory postIds = new uint256[](0);
        VerifiedAuthor memory _verifiedAuthor = VerifiedAuthor(
            sbtId,
            msg.sender,
            0,
            true,
            postIds
        );
        addressToVerifiedAuthors[msg.sender] = _verifiedAuthor;
        verifiedAuthors.push(_verifiedAuthor);

        emit AuthorVerified(sbtId, msg.sender);
    }

    function setNFTs(address _verificationBadge) public onlyOwner {
        verificationBadge = IAuthorVerificationBadge(_verificationBadge);
    }

    function monetizePost(uint256 _postId, address _author) external {
        EligiblePost memory post = postIdToPost[_postId];
        VerifiedAuthor storage verifiedAuthor = addressToVerifiedAuthors[
            msg.sender
        ];
        if (post.exists) {
            revert Errors.AlreadyEligiblePost(_postId);
        }

        if (!verifiedAuthor.exists) {
            revert Errors.InValidMember(msg.sender);
        }
        if (msg.sender != _author) {
            revert Errors.UnAuthorizedCaller(msg.sender);
        }

        postIdToPost[_postId] = EligiblePost(_postId, _author, 0, 0, true);
        eligiblePosts.push(postIdToPost[_postId]);
        verifiedAuthor.eligiblePostsId.push(_postId);

        emit MonetizedPostCreated(_postId, _author);
    }

    function tipPostCreator(uint256 _postId) public payable {
        EligiblePost memory _post = postIdToPost[_postId];
        VerifiedAuthor memory author = addressToVerifiedAuthors[_post.author];
        if (msg.sender == _post.author) {
            revert("You can't tip yourself");
        }
        require(msg.value > 0, "Tip amount must be greater than 0");
        payable(_post.author).transfer(msg.value);
        _post.tippedAmount += msg.value;
        author.tippedAmount += msg.value;
    }
}
