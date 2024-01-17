import { EVMNetwork } from './pages/Background/types/network';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  enablePasswordEncryption: false,
  showTransactionConfirmationScreen: true,
  factory_address: '0x9b8E12E6e200d9642F7E20D70Fa18a99874f1ff9',
  stateVersion: '0.1',
  network: {
    chainID: '5',
    family: 'EVM',
    name: 'Goerli',
    provider: 'https://api.stackup.sh/v1/node/e3f9e8309615aa5001f0781c401babfa6ff5622c58d366df5584e893827b0ab1',
    entryPointAddress: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    bundler: 'https://api.stackup.sh/v1/node/e3f9e8309615aa5001f0781c401babfa6ff5622c58d366df5584e893827b0ab1',
    baseAsset: {
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
      image:
        'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/6ed5f/eth-diamond-black.webp',
    },
  } satisfies EVMNetwork,
};
