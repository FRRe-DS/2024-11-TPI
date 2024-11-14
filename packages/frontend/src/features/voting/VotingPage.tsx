import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EventCard from "../../components/ui/EventCard.tsx"; // Para hacer solicitudes HTTP
 // Asegúrate de importar la tarjeta de evento

const VotacionPage: React.FC = () => {
    const { eventoId } = useParams<{ eventoId: string }>(); // Obtener eventoId desde la URL
    const [evento, setEvento] = useState<any>(null); // Almacenar la información del evento
    const [isExpired, setIsExpired] = useState(false); // Validación de fecha

    // Función para verificar si la fecha está dentro del rango
    const verificarFechaDeVotacion = (fechaInicio: string, fechaFin: string): boolean => {
        const ahora = new Date();
        const inicio = new Date(fechaInicio);
        const fin = new Date(fechaFin);

        return ahora >= inicio && ahora <= fin;
    };

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                // Llamada al backend para obtener los detalles del evento
                const response = await axios.get(`/api/eventos/${eventoId}`);
                const eventoData = response.data;

                // Verificar las fechas de votación
                const fechaInicio = eventoData.fechaInicio;
                const fechaFin = eventoData.fechaFin;

                if (!verificarFechaDeVotacion(fechaInicio, fechaFin)) {
                    setIsExpired(true); // Si las fechas no son válidas, mostrar mensaje
                } else {
                    setEvento(eventoData); // Si las fechas son válidas, guardar los datos
                }
            } catch (error) {
                console.error('Error al obtener el evento:', error);
            }
        };

        fetchEvento();
    }, [eventoId]);

    if (isExpired) {
        return <div>La votación ha expirado.</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Mostrar la tarjeta del evento */}
            {evento ? (
                <EventCard
                    key={evento.id}
                    nombre={evento.nombre}
                    descripcion={evento.descripcion}
                    imagen={evento.imagen}
                    fecha={evento.fecha}
                    tematica={evento.tematica}
                    id={evento.id}
                />
            ) : (
                <p>Cargando evento...</p>
            )}
        </div>
    );
};

export default VotacionPage;