import React, { useEffect, useState } from 'react';
import { GenerarQr } from '../../../services/QrService.ts';
import ReactQR from 'react-qr-code';
import {getUser} from "../../../services/AuthService.ts";
import {getEsculturas} from "../../../services/SculptureService.ts";

interface VotacionQRCodeProps {
    esculturaId: string;
}

const VotacionQRCode: React.FC<VotacionQRCodeProps> = ({ }) => {
    const [qrCode, setQrCode] = useState<any>('');  // Estado para almacenar el código QR

    // useEffect con dependencia vacía [] para que solo se ejecute una vez
    useEffect(() => {
        const fetchQr = async () => {
            try {
                const user = await getUser();
                console.log('User', user.id)
                const escultura = await getEsculturas(user.id)
                console.log('Esto',escultura);
                const qrData = await GenerarQr(escultura.id);
                console.log(qrData);  // Muestra el objeto completo
                setQrCode(qrData);
            } catch (err) {
                console.log('Error al generar el QR. Inténtalo nuevamente.');
            }
        };
        fetchQr();
    }, []);  // Dependencia vacía: solo se ejecuta una vez cuando se monta el componente

    // Si el qrCode aún no ha sido generado, muestra un mensaje de carga
    if (!qrCode) {
        return <p>Cargando QR...</p>;
    }

    // URL dinámica con esculturaId y qrCode
    const baseURL = `${window.location.origin}/votacion-escultura/${qrCode}/${esculturaId}`;

    return (
        <div>
            <ReactQR value={baseURL} size={256} />
            <p>Escanea el código QR para votar en este evento</p>
        </div>
    );
};

export default VotacionQRCode;
