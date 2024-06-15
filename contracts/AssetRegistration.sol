// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFT.sol";

contract AssetRegistration is NFT {
    // Struct to represent an asset
    struct Asset {
        string name;
        address owner;
    }

    // Mapping from token ID to Asset
    mapping(uint256 => Asset) public assets;

    constructor(
        string memory _name,
        string memory _symbol
    ) NFT(_name, _symbol) {}

    // Register a new asset
    function registerAsset(string memory _name) external {
        uint256 tokenId = totalSupply() + 1;
        _mint(msg.sender, tokenId);
        assets[tokenId] = Asset(_name, msg.sender);
    }

    // Get asset details by token ID
    function getAsset(
        uint256 tokenId
    ) external view returns (string memory, address) {
        require(_exists(tokenId), "Asset does not exist");
        Asset memory asset = assets[tokenId];
        return (asset.name, asset.owner);
    }
}
