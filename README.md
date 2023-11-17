# hiro-token-contract

This project is the source of Hiro token distribution. 

Includes initial distribution and time lock.

```shell
npx hardhat init
npx hardhat node
npm install --save-dev @openzeppelin/hardhat-upgrades @nomicfoundation/hardhat-ethers ethers
npx hardhat compile
npx hardhat test
npx hardhat run --network localhost scripts/deploy.js // deploy
```
