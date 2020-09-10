# Bitcoin Reactjs tool
## Features
- Create buttons to accept bitcoins via QR codes.
- Customize QR codes with a fixed amount to show when scan the client.
## Live Demo
[Go to this site for a quick demo with your wallet.](https://ismaelterreno.github.io/bitcoin-react/)

## How to use the component
Just import the following:

```js
import { BitcoinQR } from '@ibunker/bitcoin-react';
```

And the base styles :

```js
import '@ibunker/bitcoin-react/dist/index.css';
```

Later you can use the component like this:
Use Case for donation:
```js
<BitcoinQR
     amount={0.1}
     bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
     message="Donate bitcoin to support this lib"
     showHeartDonation
     title="Donate bitcoin"
    />
```
Use Case for eCommerce:

```js
<BitcoinQR
     amount={0.1}
     bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
     message="Specialized Tarmac Pro Mens Road Bike"
     title="Pro Road Bike"
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
