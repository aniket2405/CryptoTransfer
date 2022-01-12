// https://eth-ropsten.alchemyapi.io/v2/w9mAqaVsTsP0LqR5YbKFNs11WzCtQLXa

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/w9mAqaVsTsP0LqR5YbKFNs11WzCtQLXa',
      accounts: [
        '0fc238e5d770c320572a67739694569f4bb2e03603a39f0f6879a8aa7b292abd',
      ],
    },
  },
}
