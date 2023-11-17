/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
const GOERLI_URL = process.env.GOERLI_URL
const LOCALHOST_PRIVATEKEY = process.env.LOCALHOST_PRIVATEKEY
const GOERLI_PRIVATEKEY = process.env.GOERLI_PRIVATEKEY
const DANGNN_URL = process.env.DANGNN_URL
const DANGNN_PRIVATEKEY = process.env.DANGNN_PRIVATEKEY
const TEST_DANGNN_PRIVATEKEY = process.env.TEST_DANGNN_PRIVATEKEY
const DEF_PAUSER_ADDR = process.env.DEF_PAUSER_ADDR

const TEST_DANGNN_PAUSER_PRIVATEKEY = process.env.TEST_DANGNN_PAUSER_PRIVATEKEY
const DANGNN_PAUSER_PRIVATEKEY = process.env.DANGNN_PAUSER_PRIVATEKEY

const { upgradePlugin } = require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  plugins: [
    upgradePlugin,
  ],
  networks: {
    test_dangnn: {
      url: "http://127.0.0.1:443",
      chainId: 59003,
      accounts: [TEST_DANGNN_PRIVATEKEY,TEST_DANGNN_PAUSER_PRIVATEKEY],
    },
    dangnn: {
      url: DANGNN_URL,
      chainId: 51315,
      accounts: [DANGNN_PRIVATEKEY,DANGNN_PAUSER_PRIVATEKEY],
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [GOERLI_PRIVATEKEY],
    },
  }, 
};
