import React from 'react'

import { BitcoinQR } from '@ibunker/bitcoin-react'
import '@ibunker/bitcoin-react/dist/index.css'

const App = () => {
  return <BitcoinQR
    title="Donate Bitcoin"
    bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
    amount={0}
    message="Donate to Bitcoin React"
    time={1599696746}
    showHeartDonation
  />;
}

export default App
