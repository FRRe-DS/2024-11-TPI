import React, { useEffect, useState } from 'react';
import { GenerarQr } from '../../../services/QrService.ts';
import ReactQR from 'react-qr-code';
import { getUser } from "../../../services/AuthService.ts";
import { getEsculturas } from "../../../services/SculptureService.ts";

interface VotacionQRCodeProps {
    esculturaId: string;
}

const VotacionQRCode: React.FC<VotacionQRCodeProps> = ({ }) => {
    const [qrCode, setQrCode] = useState<any>('');  // Estado para almacenar el código QR
    const [esculturaId, setEsculturaId] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string>(''); // Para manejar el error si no hay escultura

    useEffect(() => {
        const fetchQr = async () => {
            try {
                const user = await getUser();
                console.log('User', user.id);

                // Obtener las esculturas para el usuario
                const esculturas = await getEsculturas(user.id);
                console.log('Esculturas:', esculturas);

                if (esculturas.length === 0) {
                    setError('No tiene una escultura');
                } else {
                    setEsculturaId(esculturas[0].id); // Establecer el ID de la escultura
                    const qrData = await GenerarQr(esculturas[0].id);
                    console.log(qrData);
                    setQrCode(qrData); // Establecer el código QR
                }
            } catch (err) {
                console.log('Error al generar el QR. Inténtalo nuevamente.');
                setError('Error al obtener la escultura o generar el QR.');
            }
        };

        fetchQr();
    }, []);  // Dependencia vacía: solo se ejecuta una vez cuando se monta el componente

    // Si hay un error o no hay escultura, mostrar mensaje de error
    if (error) {
        return <p>{error}</p>;
    }

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
