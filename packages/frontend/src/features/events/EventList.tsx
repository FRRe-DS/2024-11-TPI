import React, { useState, useEffect } from 'react';
import EventCard from '../../components/ui/EventCard.tsx';
import { getEventos } from '../../services/EventService.ts';


const EventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]); // Estado para los eventos

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data); // Si los eventos se cargan, los guardamos en el estado
            } catch (error) {
                // Evento genérico en caso de error
                setEventos([
                    {
                        title: "Evento Genérico",
                        date: "Fecha no disponible",
                        description: "Descripción no disponible",
                    },
                ]);
            }
        };

        fetchEventos(); // Llamamos a la función para cargar los eventos
    }, []);

    return (
        <div>
            {eventos.length > 0 ? (
                eventos.map((evento, id) => (
                    <EventCard
                        key={id}
                        nombre={evento.nombre}
                        fecha={evento.fecha}
                        descripcion={evento.descripcion}
                    />
                ))
            ) : (
                <EventCard
                    nombre="Evento Genérico"
                    fecha="Fecha no disponible"
                    descripcion="Descripción no disponible"
                />
            )}
        </div>
    );
};

export default EventList;

