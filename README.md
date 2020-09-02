# Bitcoin Reactjs tool
- Create buttons to accept bitcoins via QR codes.
- Customize QR codes with a fixed amount to show when scan the client.

To use this component in your reactjs project just import the following:

```js
import { BitcoinQR } from '@ibunker/bitcoin-react';
```

And the base styles :

```js
import '@ibunker/bitcoin-react/dist/index.css';
```

Later you can use the component like this:

```js
<BitcoinQR
     amount={0.1}
     bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
     exp={86400}
     message="test 001"
     showHeartDonation
     time={1598656614}
     title="Donate bitcoin"
    />
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
and [create-react-library](https://www.npmjs.com/package/create-react-library). I do recommend those libraries for some magic ;).
