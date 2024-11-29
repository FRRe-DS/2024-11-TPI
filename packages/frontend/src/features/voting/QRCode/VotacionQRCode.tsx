import React from 'react';
import ReactQR from 'react-qr-code';

interface VotacionQRCodeProps {
    eventoId: string;
}

const VotacionQRCode: React.FC<VotacionQRCodeProps> = ({ eventoId }) => {
    const baseURL = `${window.location.origin}/votacion/${eventoId}`; // URL que el QR debe dirigir
    return (
        <div>
            <ReactQR value={baseURL} size={256} />
            <p>Escanea el código QR para votar en este evento</p>
        </div>
    );
};

export default VotacionQRCode;
