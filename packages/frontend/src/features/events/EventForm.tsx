import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvento } from '../../services/EventService';

const EventForm = () => {
    const [nombre, setTitle] = useState('');
    const [fecha, setDate] = useState('');
    const [lugar, setPlace] = useState('');
    const [descripcion, setDescription] = useState('');
    const [tematica, setTheme] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newEvent = {nombre, fecha, lugar, descripcion, tematica };
        try {
            console.log('Enviando datos:', newEvent);
            const response = await createEvento(newEvent);
            console.log('Respuesta del servidor:', response);

            if (response === 'Evento creado con éxito') {
                alert('Evento creado con éxito');
                setTitle('');
                setDate('');
                setPlace('');
                setDescription('');
                setTheme('');
                navigate('/'); // Redirige al usuario a la página principal después de crear el evento
            } else {
                setError('No se pudo crear el evento. Inténtalo de nuevo.');
            }
        } catch (error: any) {
            console.error('Error al crear evento:', error);
            // Esto ayudará a obtener más detalles sobre el error
            if (error.response) {
                // Si el error tiene respuesta (por ejemplo, error 400 o 500)
                console.error('Respuesta del servidor:', error.response);
                setError(`Error: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                // Si no hubo respuesta, pero se hizo la solicitud
                console.error('Error en la solicitud:', error.request);
                setError('Hubo un error con la solicitud al servidor.');
            } else {
                // Cualquier otro tipo de error
                console.error('Error desconocido:', error.message);
                setError('Hubo un error desconocido al procesar el formulario.');
            }
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <input
                type="text"
                placeholder="Título"
                value={nombre}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                value={fecha}
                onChange={(e) => setDate(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Lugar"
                value={lugar}
                onChange={(e) => setPlace(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Temática"
                value={tematica}
                onChange={(e) => setTheme(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Crear Evento
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default EventForm;
