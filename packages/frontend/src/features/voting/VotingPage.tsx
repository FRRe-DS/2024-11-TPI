import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Función que valida si la fecha está dentro del rango
const verificarFechaDeVotacion = (fechaInicio: string, fechaFin: string): boolean => {
    const ahora = new Date();
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    return ahora >= inicio && ahora <= fin;
};

const VotingPage: React.FC = () => {
    const { eventoId } = useParams<{ eventoId: string }>();
    const [evento, setEvento] = useState<any>(null);
    const [isExpired, setIsExpired] = useState(false);
    const [voto, setVoto] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await axios.get(`/api/eventos/${eventoId}`);
                const eventoData = response.data;

                const fechaInicio = eventoData.fechaInicio;
                const fechaFin = eventoData.fechaFin;

                if (!verificarFechaDeVotacion(fechaInicio, fechaFin)) {
                    setIsExpired(true);
                } else {
                    setEvento(eventoData);
                }
            } catch (error) {
                console.error('Error al obtener el evento:', error);
            }
        };

        fetchEvento();
    }, [eventoId]);

    const handleVotacion = async () => {
        if (!voto) {
            setMensaje('Por favor, elige tu voto.');
            return;
        }

        try {
            const response = await axios.post(`/api/votacion/${eventoId}`, { voto });
            setMensaje(response.data);
        } catch (error) {
            setMensaje('Hubo un error al registrar el voto');
        }
    };

    if (isExpired) {
        return <div>La votación ha expirado.</div>;
    }

    return (
        <div>
            <h1>Votación para el Evento: {evento?.nombre}</h1>
            <p>{evento?.descripcion}</p>
            <div>
                <button onClick={() => setVoto('Si')}>Votar Sí</button>
                <button onClick={() => setVoto('No')}>Votar No</button>
            </div>
            <button onClick={handleVotacion}>Enviar Voto</button>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default VotingPage;
