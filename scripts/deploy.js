const { Contract, ContractFactory, utils, BigNumber } = require("ethers");
require("dotenv").config;

const { ethers } = require("hardhat");

async function main() {
  const ownerPrivateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  console.log(ownerPrivateKey, provider);
  const owner = new ethers.Wallet(ownerPrivateKey, provider);
  //Deploy WETH contract
  const NFT = await ethers.getContractFactory("AssetRegistration");
  const NFTArtifact = await NFT.deploy("Test", "TST");
  await NFTArtifact.waitForDeployment();
  console.log("NFT:", NFTArtifact.target);

  const MFNFT = await ethers.getContractFactory("AssetFractionalization");
  const MFNFTArtifact = await MFNFT.deploy();
  await MFNFTArtifact.waitForDeployment();
  console.log("MFNFT:", MFNFTArtifact.target);
  //Verify all Contracts
  //Register Asset

  const regTx = await NFTArtifact.connect(provider).registerAsset("Asset1");
  await regTx.wait();
  await NFTArtifact.connect(provider).transferFrom(
    provider.address,
    MFNFTArtifact.address,
    "1"
  );
  //fractionalize the ownership of the asset with total supply of 10000
  const frTx = await MFNFTArtifact.connect(provider).fractionalizeAsset(
    NFTArtifact.address,
    "1",
    "10000"
  );
  await frTx.wait();

  //Can buy the ownership fo the asset
  //buying 100 shares of asset
  const sellTx = await MFNFTArtifact.connect(provider).sellAsset(
    provider.address,
    "1",
    "100"
  );
  //In order to fractionalize the owner ship of the asset(TokenID is transferred to Asset Fractionalizaiton)
  await hre.run("verify:verify", {
    address: NFTArtifact.target,
    constructorArguments: ["Test", "TST"],
  });

  await hre.run("verify:verify", {
    address: MFNFTArtifact.target,
    constructorArguments: [],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
