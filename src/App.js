import React, { useEffect, useState } from 'react';
import './App.css';
import QRCode from 'qrcode';

const BitcoinQR = ({
    title,
    bitcoinAddress,
    amount,
    message,
    time,
    exp,
    showHeartDonation
}) => {
    const [qrImg, setQrImg] = useState(null);
    useEffect( () => {
        QRCode.toDataURL(
            `bitcoin:${bitcoinAddress}?amount=${amount}&message=${encodeURIComponent(message)}&time=${time}&exp=${exp}`,
            { errorCorrectionLevel: 'H' }
        )
            .then(url => {
                setQrImg(url);
            })
            .catch(err => {
                console.error(err);
            })
    },[]);
    return (
       <div>
           <h5>
               {title}
           </h5>
           <img src={qrImg} alt="QR" />
           {
               showHeartDonation && <div className="heart-container"><div className="heart" /></div>
           }
       </div>
    );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <BitcoinQR
            title="Donate Bitcoin"
            bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
            amount={0.1}
            message="test 001"
            time={1598656614}
            exp={86400}
            showHeartDonation
          />
      </header>
    </div>
  );
}

export default App;
