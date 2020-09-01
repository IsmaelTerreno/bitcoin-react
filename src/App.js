import React from 'react';
import './App.css';
import BitcoinQR from "./component/BitcoinQR";



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BitcoinQR
            title=""
            bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
            amount={0.1}
            message="test 001"
            time={1598656614}
            exp={86400}
          />
      </header>
    </div>
  );
}

export default App;
