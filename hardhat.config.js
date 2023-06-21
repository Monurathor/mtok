require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    hardhat: {},
    alchemy: {
      url: process.env.ALCHEMY_RPC_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

