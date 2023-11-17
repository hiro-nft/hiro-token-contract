const { ethers } = require("hardhat");
require('dotenv').config();

const contractAddress = process.env.DEF_HIROTOEKN_ADDR;

async function setLock() {
  const [sender,secSender] = await ethers.getSigners();

  const contract = await ethers.getContractAt('HiroToken',contractAddress, secSender);

  const recipients = [
	"0xfbeF8bD2FD9B4E59867C07cf7b170A32395AaCBC",
	"0x6478F4730e1bcCa269EAdf8a8Aaa9A495F462828",
	"0xE392e9e47CAB2D91457b64301Da48aB8Df38cac9",
	"0xFD6De3a6A9232178cB7Eb0FdAc1CAde15a4F3CEE",
	"0x4AF532120348dC2FE420E8746D234B55EC0FdcFD",
	"0xc0b448AC81BEd8aA2a8b28b0676ab7a4a298B91B",
	"0x6303B83060bD00f46c5303BEe251919C9ABEC090",
	"0xa17e7f6B420Dc60014C1849f52891f90d0408eC8",
	"0x071fA1F6293AA3E1695D9Bb315120AE3eE345d8D",
	"0x2AB3C6df5199d5cfC8B8068a2B85c94ef3a253CB",
	"0x14273aF34CC5F819d5187152D38Bc2ff34159b0a",
	"0x5640d85fB8428df64cAecedA0ce0082bbd2aB6b6",
	"0xca0FC78be9A3586f3CE86064b9b99d72f102f794",
	"0xd479EcF11533e49B2c4e40260e121bEDD4876da9",
	"0xedb650276455A69e6FB887BA65f0baa6D9A61631",
	"0x199A818A27Ec81388C4798E1C792997BC345a8c0"
  ];
  
  const txs = [];
  
  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i];
    const unlockTime = 1706670000;	// 2024-01-31 12:00:00 GMT+09:00

    console.log(`This address ${recipient} is locked until ${unlockTime}`)
    const tx = await contract.lock(recipient, unlockTime);
	txs.push(tx);
  }  

  await Promise.all(txs.map(tx => tx.wait()));

  console.log("lock susscess");
}

setLock();
