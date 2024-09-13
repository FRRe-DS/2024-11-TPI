import React, { useState } from 'react';
import { createEvento } from '../services/EventService';

interface CreateActivityProps {
    onEventCreated: () => void;
}

const CreateActivity: React.FC<CreateActivityProps> = ({ onEventCreated }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [theme, setTheme] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newEvent = { title, date, place, description, theme };
        try {
            await createEvento(newEvent);
            alert('Evento creado con éxito');
            setTitle('');
            setDate('');
            setPlace('');
            setDescription('');
            setTheme('');
            onEventCreated(); // Trigger event list refresh
        } catch (error) {
            console.error('Error al crear el evento:', error);
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Evento</h2>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" required />
                <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Lugar" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
                <input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="Temática" required />
                <button type="submit">Crear Evento</button>
            </form>
        </div>
    );
};

export default CreateActivity;
