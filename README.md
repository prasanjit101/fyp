# Decentralised medical record keeping app

A decentralized application (dapp) that leverages Solidity smart contracts and IPFS to facilitate the registration of doctors and patients, while enabling the storage of medical records in a decentralized manner.

## Installation

First ensure you are in the project's root directory

- Install npm modules

```sh
# install 
$ npm install
$ cd client
$ npm install
$ cd ..
$ npm install
```

- compile and deploy smart contracts

Connect blockchain network

```sh
$ truffle compile
$ truffle migrate
```

- start the development server

```sh
$ npm run start
```

## To change the deployment network

- Open `truffle-config.js` and make changes accordingly

## To connect to Ganache network

- Open Ganache and ensure the `truffle-config.js` file is configured to connect to the same port.
- Go to settings > workspace > Truffle Projects and click on add project
- Select the `truffle-config.js` file present inside the truffle directory and save it. Restart the ganache 
- Now run 
  ```sh
  $ truffle compile
  $ truffle migrate 
  ```
- Open client folder in terminal and run `npm run start`
- Open the page in browser
- Connect to the network in Metamask and import the accounts from Ganache.
- Now you can make transactions and interact with the smart contracts.
