import React from 'react';
import { useParams } from 'react-router-dom';
import VotacionQRCode from './VotacionQRCode.tsx'; // Asegúrate de ajustar esta ruta si es necesario

// Componente envoltorio que extrae `eventoId` de la URL y lo pasa a `VotacionQRCode`
const VotacionQRCodeWrapper: React.FC = () => {
    const { eventoId } = useParams<{ eventoId: string }>(); // Usa `useParams` para obtener el `eventoId`

    return <VotacionQRCode eventoId={eventoId as string} />; // Pasa `eventoId` como prop a `VotacionQRCode`
};

export default VotacionQRCodeWrapper;
