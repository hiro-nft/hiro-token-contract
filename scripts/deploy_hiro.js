// scripts/deploy.js
const { ethers,upgrades } = require("hardhat");
require('dotenv').config();

const parserAddr = process.env.DEF_PAUSER_ADDR;


async function main () {
  // We get the contract to deploy
  const Hiro = await ethers.getContractFactory('HiroToken');
  console.log('Deploying Hiro... :', Hiro);
  instance = await upgrades.deployProxy(Hiro,["HIRO","HRT",1000000000,parserAddr]);
  await instance.deployed();
  console.log('Hiro deployed to:', instance.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
