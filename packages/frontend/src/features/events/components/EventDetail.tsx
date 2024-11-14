// EventDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventoById } from '../../../services/EventService.ts'; // Servicio para obtener un evento por ID

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtenemos el ID de la URL
    const [evento, setEvento] = useState<any>(null); // Estado para almacenar el evento
    const [error, setError] = useState<string | null>(null); // Estado para almacenar errores

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const data = await getEventoById(id); // Llamada al servicio para obtener el evento
                setEvento(data);
            } catch (error: any) {
                setError('No se pudo obtener el evento. Intenta nuevamente.');
                console.error('Error al obtener el evento:', error);
            }
        };

        if (id) {
            fetchEvento(); // Solo buscamos el evento si hay un ID
        }
    }, [id]);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!evento) {
        return <p>Cargando detalles del evento...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">{evento.nombre}</h1>
            <p className="text-xl mt-4">{evento.descripcion}</p>
            <p className="text-lg mt-2 text-gray-600">Temática: {evento.tematica}</p>
            <img src={evento.imagen} alt={evento.nombre} className="mt-6 w-full h-auto" />
        </div>
    );
};

export default EventDetail;
