import React, {useEffect, useState} from "react";
import QRCode from "qrcode";

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
    });
    return (
        <div>
            <h5>{title}</h5>
            <img src={qrImg} alt="QR" />
            {
                showHeartDonation &&
                <div className="heart-container"><div className="heart" /></div>
            }
        </div>
    );
}

export default BitcoinQR;