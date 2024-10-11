import React, { useState } from 'react';

interface EventFormProps {
    onCreate: (newEvent: any) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [theme, setTheme] = useState('');

    const handleCreateEvent = (event: React.FormEvent) => {
        event.preventDefault();
        const newEvent = { title, date, place, description, theme };
        onCreate(newEvent); // Se envía el evento creado al componente padre
        // Limpia el formulario
        setTitle('');
        setDate('');
        setPlace('');
        setDescription('');
        setTheme('');
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
        </div>
    );
};

export default EventForm;
