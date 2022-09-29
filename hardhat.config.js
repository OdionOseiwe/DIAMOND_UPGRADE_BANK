
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
// import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });
require('@nomiclabs/hardhat-etherscan');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})



const GOERLI_API_KEY = process.env.GOERLI_API_KEY;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

const ETHERSCAN = process.env.ETHERSCAN;

module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    goerli: {
      url: GOERLI_API_KEY,
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN
    }
  }
};