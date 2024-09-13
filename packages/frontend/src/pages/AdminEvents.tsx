import React, { useState, useEffect } from 'react';
import { getEventos, createEvento, deleteEvento } from '../services/EventService';

const AdminEvents: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const fetchEventos = async () => {
            const data = await getEventos();
            setEventos(data);
        };
        fetchEventos();
    }, []);

    const handleCreateEvent = async (event: React.FormEvent) => {
        event.preventDefault();
        const newEvent = { title, date, place, description, theme };
        try {
            await createEvento(newEvent);
            const updatedEventos = await getEventos();
            setEventos(updatedEventos); // Refresca la lista de eventos
            setTitle(''); setDate(''); setPlace(''); setDescription(''); setTheme(''); // Limpia el formulario
            alert('Evento creado con éxito');
        } catch (error) {
            console.error('Error al crear el evento:', error);
        }
    };

    const handleDeleteEvent = async (id: string) => {
        await deleteEvento(id);
        const updatedEventos = await getEventos();
        setEventos(updatedEventos); // Refresca la lista de eventos
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Gestión de Eventos</h1>

            {/* Formulario de creación de evento */}
            <form onSubmit={handleCreateEvent} className="space-y-4 mb-8">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <input
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="Lugar"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <input
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="Temática"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Crear Evento
                </button>
            </form>

            {/* Lista de eventos */}
            <ul className="space-y-4">
                {eventos.map((evento) => (
                    <li key={evento.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                        <span>{evento.name}</span>
                        <button
                            onClick={() => handleDeleteEvent(evento.id)}
                            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminEvents;
