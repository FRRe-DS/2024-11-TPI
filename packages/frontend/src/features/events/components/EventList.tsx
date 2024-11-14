import React, { useState, useEffect } from 'react';
import EventCard from '../../../components/ui/EventCard.tsx'; // Importa el componente EventCard
import { getEventos } from '../../../services/EventService.ts';

const EventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]); // Estado para almacenar los eventos

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos(); // Llama al servicio para obtener la lista de eventos
                setEventos(data); // Si los eventos se cargan correctamente, los guardamos en el estado
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
                // Aquí podrías mostrar un mensaje de error o eventos por defecto
            }
        };

        fetchEventos(); // Llama a la función para cargar los eventos cuando se monta el componente
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

export default EventList;
