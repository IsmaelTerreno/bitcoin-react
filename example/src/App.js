import React from 'react'

import { BitcoinQR } from '@ibunker/bitcoin-react'
import '@ibunker/bitcoin-react/dist/index.css'

const App = () => {
  return <BitcoinQR
    title="Donate Bitcoin Banner"
    bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
    amount={0.1}
    message="test 001"
    time={1598656614}
    exp={86400}
    showHeartDonation
  />;
}

export default App
