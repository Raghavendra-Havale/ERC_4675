// SPDX-License-Identifier: ISC
pragma solidity ^0.8.0;

import "./MFNFT.sol";

contract AssetFractionalization is MFNFT {
    function fractionalizeAsset(
        address parentNFTContractAddress,
        uint256 parentNFTTokenId,
        uint256 _totalSupply
    ) public onlyAdmin {
        setParentNFT(parentNFTContractAddress, parentNFTTokenId, _totalSupply);
    }

    function sellAsset(
        address _to,
        uint256 tokenId,
        uint256 _value
    ) public onlyAdmin {
        transfer(_to, tokenId, _value);
    }
}
