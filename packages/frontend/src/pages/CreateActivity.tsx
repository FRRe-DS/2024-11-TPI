// src/pages/CreateActivity.tsx
import React, { useState } from 'react';
import { createEvento } from '../services/EventService';

const CreateActivity: React.FC = () => {
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
        } catch (error) {
            console.error('Error al crear el evento:', error);
        }
    };

    return (
        <div>
            <h1>Crear Nuevo Evento</h1>
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
