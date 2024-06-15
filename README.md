# Multi-Fractional Non-Fungible Token

Solidity Implementation of Multi-Fractional Non-Fungible Token.

## Problem Trying to solve

Before, ERC20 Token contract should be deployed everytime when fractionalizing a specific NFT.

To solve this problem, this standard proposes a token standard to cover multiple fractionalized nft in a contract without having to deploy each time.

## How to use

```
contracts/
        helper/
        interface/
        math/
        MFNFT.sol
        NFT.sol
        ERC20Token.sol
```

### Contracts

`MFNFT.sol` : Multi-Fractional Non-Fungible Token Contract

`NFT.sol` : Non-Fungible Token Contract

`ERC20Token.sol` : Sample ERC-20 Token Contract

`helper/Verifier.sol` : Contract that verifies the ownership of NFT before fractionalization

`math/SafeMath.sol` : Openzeppelin SafeMath Library

`interface/IERC20.sol` : ERC-20 Token Interface

`interface/IERC721.sol` : ERC-721 Token Interface

`interface/IMFNFT` : MFNFT Token Interface

`AssetRegistration.sol` : Contract to register assets

`AssetFractionalization.sol` : Contract to fractionalize the ownership of the asset(NFT token) and to buy fractional ownership of the asset.

### Install & Test

Installation

```
npm install
```

Test

```
npx hardhat test
```

Coverage

```
npx hardhat coverage
```

### Deployment

1. Replace .env.example with .env and replace

   - RPC_URL=
   - PRIVATE_KEY=
   - ETHERSCAN_API=

2. To deploy and mint security token and fractionalize , sell shares of asset run

```sh
npx hardhat run scripts/deploy.js --netowrk NETWORK
```

Replace NETWORK valide network of your choice (ex: sepolia or base-sepolia)

### Deployment Address on sepolia

- **AssetRegistration** : [0xe68d853D7881F48d24793ea6761b8A7a6D07fE29](https://sepolia.etherscan.io/address/0xe68d853D7881F48d24793ea6761b8A7a6D07fE29)
- **AssetFractionalization** : [0x5874d6730c0656feA9324dEd6EEa5f7c4501a765](https://sepolia.etherscan.io/address/0x5874d6730c0656feA9324dEd6EEa5f7c4501a765)
- **RegisterAsset** : [RegisterAsset](https://sepolia.etherscan.io/tx/0x5c64c7def008e007acf62036dcbd5b9a5141c1d350f05658977d0611efc49005)
- **FractionalizeAsset** : [fractionalizeAsset](https://sepolia.etherscan.io/tx/0x8d074726f7f11074839c6925bd57c9e5e49377bf8c15d6a16f995b5ea7357cf3)
- **sellAsset** : [sellAsset](https://sepolia.etherscan.io/tx/0xa9a10f07138f569b36af98845de3a42b2b462cf062de59e6c04dd5a1a515538e)
