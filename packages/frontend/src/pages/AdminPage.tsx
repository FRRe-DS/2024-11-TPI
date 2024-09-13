import { useState, useEffect } from 'react';
import { getEventos, createEvento, updateEvento, deleteEvento } from '../services/EventService';
import { Event } from '../types/Event'; // Importa el tipo de evento

const AdminPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]); // Usa el tipo de evento
    const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({ title: '', description: '', date: '' });

    // Obtener todos los eventos al cargar la página
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const eventsData = await getEventos();
            setEvents(eventsData);
        } catch (error) {
            console.error('Error al obtener eventos:', error);
        }
    };

    const handleCreateEvent = async () => {
        try {
            await createEvento(newEvent);
            fetchEvents(); // Actualizar la lista de eventos
            setNewEvent({ title: '', description: '', date: '' }); // Limpiar el formulario
        } catch (error) {
            console.error('Error al crear evento:', error);
        }
    };

    const handleUpdateEvent = async (eventId: string, updatedData: Partial<Event>) => {
        try {
            await updateEvento(eventId, updatedData);
            fetchEvents(); // Actualizar la lista de eventos
        } catch (error) {
            console.error('Error al actualizar evento:', error);
        }
    };

    const handleDeleteEvent = async (eventId: string) => {
        try {
            await deleteEvento(eventId);
            fetchEvents(); // Actualizar la lista de eventos
        } catch (error) {
            console.error('Error al eliminar evento:', error);
        }
    };

    return (
        <div>
            <h1>Panel de Administración</h1>

            <h2>Crear nuevo evento</h2>
            <input
                type="text"
                placeholder="Título"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
            <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <button onClick={handleCreateEvent}>Crear evento</button>

            <h2>Lista de eventos</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <button onClick={() => handleUpdateEvent(event.id, { title: 'Nuevo Título' })}>
                            Editar
                        </button>
                        <button onClick={() => handleDeleteEvent(event.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
