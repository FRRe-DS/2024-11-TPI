import React, { useState, useEffect } from 'react';
import EventCardAdmin from './ui/EventCardAdmin.tsx';
import { getEventos, updateEvento } from '../../../../../services/EventService.ts';

const EventListAdmin: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos(); // Llama al servicio para obtener los eventos
                setEventos(data);
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    const handleSaveEvent = async (updatedEvent: any) => {
        try {
            await updateEvento(updatedEvent.id, updatedEvent); // Actualiza el evento en el servidor
            setEventos((prevEvents) =>
                prevEvents.map((evento) =>
                    evento.id === updatedEvent.id ? updatedEvent : evento
                )
            ); // Actualiza el evento en el estado
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
        }
    };

    return (
        <div className="grid grid-rows-2 grid-flow-col gap-10 px-20 justify-center">
            {eventos.length > 0 ? (
                eventos.map((evento: any) => (
                    <EventCardAdmin
                        key={evento.id}
                        id={evento.id}
                        nombre={evento.nombre}
                        descripcion={evento.descripcion}
                        imagen={evento.imagen}
                        fechaInc={evento.fechaInc}  // Asegúrate de pasar las fechas correctamente
                        fechaFin={evento.fechaFin}        // Asegúrate de pasar las fechas correctamente
                        tematica={evento.tematica}
                        lugar={evento.lugar}
                        onSave={handleSaveEvent}
                    />
                ))
            ) : (
                <p>No hay eventos disponibles</p>
            )}
        </div>
    );
};

export default EventListAdmin;
