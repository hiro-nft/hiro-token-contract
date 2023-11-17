const { ethers } = require("hardhat");
require('dotenv').config();

const contractAddress = process.env.DEF_HIROTOEKN_ADDR;

async function sendDistribute() {
  
  let totalAmountToSend = 0;
  const [sender] = await ethers.getSigners();

  const contract = await ethers.getContractAt('HiroToken',contractAddress, sender);

  const recipients = [
	["0xfbeF8bD2FD9B4E59867C07cf7b170A32395AaCBC","6000000"],
	["0x6478F4730e1bcCa269EAdf8a8Aaa9A495F462828","6000000"],
	["0xE392e9e47CAB2D91457b64301Da48aB8Df38cac9","5000000"],
	["0xFD6De3a6A9232178cB7Eb0FdAc1CAde15a4F3CEE","5000000"],
	["0x4AF532120348dC2FE420E8746D234B55EC0FdcFD","5000000"],
	["0xc0b448AC81BEd8aA2a8b28b0676ab7a4a298B91B","5000000"],
	["0x6303B83060bD00f46c5303BEe251919C9ABEC090","3000000"],
	["0xa17e7f6B420Dc60014C1849f52891f90d0408eC8","3000000"],
	["0x071fA1F6293AA3E1695D9Bb315120AE3eE345d8D","3000000"],
	["0x2AB3C6df5199d5cfC8B8068a2B85c94ef3a253CB","3000000"],
	["0x14273aF34CC5F819d5187152D38Bc2ff34159b0a","3000000"],
	["0x5640d85fB8428df64cAecedA0ce0082bbd2aB6b6","3000000"],
	["0xca0FC78be9A3586f3CE86064b9b99d72f102f794","3000000"],
	["0xd479EcF11533e49B2c4e40260e121bEDD4876da9","3000000"],
	["0xedb650276455A69e6FB887BA65f0baa6D9A61631","3000000"],
	["0x199A818A27Ec81388C4798E1C792997BC345a8c0","3000000"]
  ];
  
  const txs = [];

  
  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i][0];
	const amountToSend = ethers.utils.parseUnits(recipients[i][1], 18);
	totalAmountToSend += Number(recipients[i][1])
	console.log(`Sending ${amountToSend} Hiro to ${recipient}`)
	const tx = await contract.transfer(recipient, amountToSend);
	txs.push(tx);
  }  

  await Promise.all(txs.map(tx => tx.wait()));

  console.log(`Total amount to send: ${totalAmountToSend}`);
  
  const recipients2 = [  
	["0x12dABe5612f3dd4B5DE5292Fa644D22E9D0A5605", "20000000","E-01"],
	["0x770015C4116359e2977873Ddf869632dE10d8211", "20000000","E-02"],
	["0x3f657F55AbDeebdC2d0bf822B283c3583d71c7d9", "20000000","E-03"],
	["0xfD16C70a63bc875fe1C7EE1cDADaf73c763916a2", "20000000","E-04"],
	["0x9A1723811D1Cc59B4aEFe7386334571eFA48e5c5", "20000000","E-05"],
	["0x2cd29C56F0342B8cD45D766d0eBbC8D4625a6D55", "20000000","E-06"],
	["0xC23595eA0882c1D240E678e0df09b3A3A1A262BF", "20000000","E-07"],
	["0xbf2335655FD314d2D749188577702d701d1eE942", "20000000","E-08"],
	["0x5313D50cA6124d6E76d11875aFCCA17266D4302A", "20000000","E-09"],
	["0xeE35E01Ad4d5E25729d1eB9c237A5897fcdBE298", "20000000","E-10"],
	["0xd392358CdA1994D942c2131F33d9Af14CCe18CCb", "20000000","E-11"],
	["0x1058bBf7c70f77CDA3A4ac36a9e4A66433E6e60C", "20000000","E-12"],
	["0x66d6807FD4bCe953658b9cDf900a7A0aAC9F8632", "20000000","E-13"],
	["0xe510298C4b5b6a6F547538333b105558b028FF61", "20000000","E-14"],
	["0xcDa4b4EcB13209f18f797d5b5225A1CA3323c683", "20000000","E-15"],
	["0x9ce7d32F93eB42cF5EEF283219Ad5772975BFA3B", "20000000","E-16"],
	["0x3e9AaC561b18d8c623C5e32DCE2A326D031Fc0E7", "20000000","E-17"],
	["0xB1583Bb68788b125370dE27fB6D1563078Bba0dF", "20000000","E-18"],
	["0xfCA85e47f24899D9EA56341F37e9681ebd64d6A8", "20000000","E-19"],
	["0xE728A495b57FF5Be760e84852F5e87ad3D10669E", "20000000","E-20"],
	["0x9A14f501B8F37739C567bDC58D077dc3ac9f331a", "20000000","E-21"],
	["0x16763868115b178aA5B4A4A2fE6c242a55AdA7b9", "20000000","E-22"],
	["0x2c7E5236e86440f75ee89a14C129BE826ab449F6", "20000000","E-23"],
	["0xc1d579cb541557c6A34D7FaF65a7f5A170162131", "20000000","E-24"],
	["0xc076b08984c0Ecd35743ED5534B2b9e756E5712b", "20000000","E-25"],
	["0xBD853A41373617D95C02747735eE065a7aA0405e", "20000000","E-26"],
	["0x50C601FEf3bFcA21975eF42930c16eFa655eA575", "20000000","E-27"],
	["0xC6A2D1F0d9EB65fF9BEf668414E4a4459Fe665F8", "20000000","E-28"],
	["0xf9615210142fa4eff0DaF27B9a3f44d0729c0e22", "20000000","E-29"],
	["0xD3fA88878b221503ed70B3C82b78e261C139d7d0", "20000000","E-30"],
	["0x97CAb947111e8e61Af2783C0649746EEaD1FB663", "20000000","E-31"],
	["0xB63f480Ec0D6D8eDf7E1Ee71691c694F425Ee752", "20000000","E-32"],
	["0xC63893f1DE6e93C17cD2084bdE51102B7d586f2A", "20000000","E-33"],
	["0x7B90942F66905040374a10dC9b469175C54cf965", "20000000","E-34"],
	["0xbb541aBBa4dfF1B65aEB094A9369006338b1e822", "20000000","E-35"],
	["0x6435240BE03c0F429602844747BE10104cAfaB68","100000000",   "D"],
	["0x99E558992cd1C48475b0148fB7B5e38558ac4417","100000000",   "C"],
	["0xc3BF50324396ed994Bf0831a26a29944Cac537f4", "30000000",   "B"],
	["0xc2dAa2cbC40eF1bB7379853550F57C50743977c1",  "8000000",   "A"]
  ];
  
  const txs2 = [];
  
  for (let i = 0; i < recipients2.length; i++) {
    const recipient = recipients2[i][0];
	const amountToSend = ethers.utils.parseUnits(recipients2[i][1], 18);
	const toSendName = recipients2[i][2]
	totalAmountToSend += Number(recipients2[i][1])
	console.log(`Sending ${amountToSend} Hiro to ${recipient} name ${toSendName}`)
    const tx = await contract.transfer(recipient, amountToSend);
	txs2.push(tx);
  }  
  await Promise.all(txs2.map(tx => tx.wait()));
  
  console.log("hiro Token has been successfully transferred!");	
  console.log(`Total amount to send: ${totalAmountToSend}`);
}

sendDistribute();

