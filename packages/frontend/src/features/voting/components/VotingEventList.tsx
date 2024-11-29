import React, { useState, useEffect } from 'react';
import EventCard from '../../events/components/ui/EventCard.tsx';
import { getEventos } from '../../../services/EventService.ts';

const VotingEventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {eventos.length > 0 ? (
                eventos.map((evento: any) => (
                    <EventCard
                        key={evento.id}
                        nombre={evento.nombre}
                        descripcion={evento.descripcion}
                        imagen={evento.imagen}
                        fecha={evento.fecha}
                        tematica={evento.tematica}
                        id={evento.id}
                    />
                ))
            ) : (
                <p>No hay eventos disponibles</p>
            )}
        </div>
    );
};

export default VotingEventList;