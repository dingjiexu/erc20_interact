const PrivateKeyProvider = require("@truffle/hdwallet-provider");
module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*", // Match any network id
            gas: 5000000
        },
        sepolia: {
            provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://sepolia.infura.io/v3/" + process.env.API_KEY),
            network_id: 11155111,
            networkCheckTimeout: 20000
        }
    }
};
