// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SoulBoundToken is Ownable, ERC721URIStorage {
    //using Counters for Counters.Counter;

    uint256 private _tokenIdCounter;

    constructor() ERC721("SoulBoundToken", "SBT") Ownable(msg.sender) {}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter++;
        _safeMint(to, tokenId);
    }

    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Only the owner of the token can burn it.");
        _burn(tokenId);
    }

    function _beforeTokenTransfer(
       address from,
        address to,
        uint256
    )   internal pure override(ERC721){
        require(
            from == address(0) || to == address(0),
            "This is a Soulbound token. It cannot be transferred. It can only be burned by the token owner."
        );
        
    }

    function _burn(uint256 tokenId) internal override(ERC721) {
        super._burn(tokenId);
    }
}

// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";
// import "@openzeppelin/contracts/security/Pausable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

// contract SBT is ERC1155, AccessControl, Pausable, ERC1155Burnable {
//     bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
//     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
//     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
//     // Contract name
//     string public name;
//     // Contract symbol
//     string public symbol;

//     constructor() ERC1155("") {
//         _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
//         _grantRole(URI_SETTER_ROLE, msg.sender);
//         _grantRole(PAUSER_ROLE, msg.sender);
//         _grantRole(MINTER_ROLE, msg.sender);
//     }

//     function setName(string memory newname) public onlyRole(URI_SETTER_ROLE) {
//         name = newname;
//     }

//     function setSymbol(string memory newsymbol) public onlyRole(URI_SETTER_ROLE) {
//         symbol = newsymbol;
//     }

//     function setURI(string memory newuri) public onlyRole(URI_SETTER_ROLE) {
//         _setURI(newuri);
//     }

//     function pause() public onlyRole(PAUSER_ROLE) {
//         _pause();
//     }

//     function unpause() public onlyRole(PAUSER_ROLE) {
//         _unpause();
//     }

//     function mint(address account, uint256 id, uint256 amount, bytes memory data)
//         public
//         onlyRole(MINTER_ROLE)
//     {
//         _mint(account, id, amount, data);
//     }

//     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
//         public
//         onlyRole(MINTER_ROLE)
//     {
//         _mintBatch(to, ids, amounts, data);
//     }

//     function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
//         internal
//         whenNotPaused
//         override
//     {
//         require(
//                 from == address(0) || to == address(0),
//                 "This token is SBT, so this can not transfer."
//             );
//         super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
//     }

//     // The following functions are overrides required by Solidity.

//     function supportsInterface(bytes4 interfaceId)
//         public
//         view
//         override(ERC1155, AccessControl)
//         returns (bool)
//     {
//         return super.supportsInterface(interfaceId);
//     }

//     //override for SBT
//     function setApprovalForAll(address, bool) public virtual override {
//         revert("This token is SBT, so this can not approve.");
//     }

//     //airDrop for receivers
//     function airDrop(address[] memory recievers, uint256 id) 
//         public
//         onlyRole(MINTER_ROLE)  
//     {
//         for (uint i = 0; i < recievers.length; i++) {
//             mint(recievers[i], id, 1, "0x");
//         }
//     }
//}

// pragma solidity ^0.8.13;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// contract SBT is Ownable, ERC721URIStorage {
//     using Counters for Counters.Counter;
//     Counters.Counter private _tokenIds;

//     constructor(string memory name, string memory symbol)
//         ERC721(name, symbol)
//     {}

//     function currentTokenId() public view returns (uint256) {
//         return _tokenIds.current();
//     }

//     function mintNFT(address recipient, string memory tokenURI) public {
//         _tokenIds.increment();

//         uint256 newItemId = _tokenIds.current();
//         _mint(recipient, newItemId);
//         _setTokenURI(newItemId, tokenURI);
//     }

//     function burn(uint256 tokenId) external {
//         require(
//             ownerOf(tokenId) == msg.sender,
//             "Only the owner of the token can burn it."
//         );
//         _burn(tokenId);
//     }

//     function _beforeTokenTransfer(
//         address from,
//         address to,
//         uint256
//     ) internal pure override {
//         require(
//             from == address(0) || to == address(0),
//             "This is a Soulbound token. It cannot be transferred. It can only be burned by the token owner."
//         );
//     }

//     function _burn(uint256 tokenId) internal override(ERC721URIStorage) {
//         super._burn(tokenId);
//     }
// }