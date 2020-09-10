# Bitcoin Reactjs tool
## Features
- Create buttons to accept bitcoins via QR codes.
- Customize QR codes with a fixed amount to show when scan the client.
- Compatibility with any wallet that uses the [Bitcoin URI protocol](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki).
## Live Demo
[Go to this site for a quick demo with your wallet.](https://ismaelterreno.github.io/bitcoin-react/)

## How to use the component
Install the package via NPM with the following command:

```shell
npm i @ibunker/bitcoin-react
```
Just import the following:

```js
import { BitcoinQR } from '@ibunker/bitcoin-react';
```

And the base styles :

```js
import '@ibunker/bitcoin-react/dist/index.css';
```

Later you can use the component like this:

Example: Send donations to this project
```js
<BitcoinQR
    bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
    message="Donate bitcoin to support this lib"
    title="Donate bitcoin"
/>
```
Example: Send 0.1 BTC donation to this project

```js
<BitcoinQR
    amount={0.1}
    bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
    message="Donate bitcoin to support this lib"
    title="Donate bitcoin"
/>
```

Property | Description | type
------------ | ------------- | -------------
showHeartDonation | Show a Heart animation under the QR code. | Boolean
title | Will show a title at the top of the QR code. | String
message | Will add a message to the QR. | String
bitcoinAddress | bitcoin address to send the payment. Can be any BTC format address. | String


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
and [create-react-library](https://www.npmjs.com/package/create-react-library). I do recommend those libraries for some magic ;).
