import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventoById } from '../../../../../services/EventService.ts';

const EventosDetalles: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>();
    const [evento, setEvento] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const data = await getEventoById(id);
                if (data) {
                    setEvento(data);
                } else {
                    setError('Evento no encontrado');
                }
            } catch (error: any) {
                setError('No se pudo obtener el evento. Intenta nuevamente.');
                console.error('Error al obtener el evento:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchEvento();
        }
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Cargando detalles del evento...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!evento) {
        return <p className="text-center text-gray-500">Evento no encontrado</p>;
    }

    return (
        <div className="flex flex-col min-h-screen p-6 bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={evento.imagen} alt={evento.nombre} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-800">{evento.nombre}</h1>
                    <p className="text-xl mt-4 text-gray-600">{evento.descripcion}</p>
                    <p className="text-lg mt-2 text-gray-600">Temática: {evento.tematica}</p>
                    <p className="text-lg mt-2 text-gray-600">Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
                    <p className="text-lg mt-2 text-gray-600">Ubicación: {evento.ubicacion}</p>
                </div>
            </div>
        </div>
    );
};

export default EventosDetalles;