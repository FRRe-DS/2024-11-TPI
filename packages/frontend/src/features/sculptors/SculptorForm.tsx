import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEscultor } from '../../services/SculptorService';  // Cambia a tu servicio adecuado

const SculptorForm = () => {
    const [nombre, setNombre] = useState('');
    const [biografia, setBiografia] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [fechaFallecimiento, setFechaFallecimiento] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevoEscultor = { nombre, biografia, fechaNacimiento, fechaFallecimiento };
        try {
            console.log('Enviando datos:', nuevoEscultor);
            const response = await createEscultor(nuevoEscultor);  // Llama a tu servicio para crear el escultor
            console.log('Respuesta del servidor:', response);

            if (response === 'Escultor creado con éxito') {
                alert('Escultor creado con éxito');
                setNombre('');
                setBiografia('');
                setFechaNacimiento('');
                setFechaFallecimiento('');
                navigate('/'); // Redirige al usuario a la página principal después de crear el escultor
            } else {
                setError('No se pudo crear el escultor. Inténtalo de nuevo.');
            }
        } catch (error: any) {
            console.error('Error al crear escultor:', error);
            if (error.response) {
                console.error('Respuesta del servidor:', error.response);
                setError(`Error: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                console.error('Error en la solicitud:', error.request);
                setError('Hubo un error con la solicitud al servidor.');
            } else {
                console.error('Error desconocido:', error.message);
                setError('Hubo un error desconocido al procesar el formulario.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <input
                type="text"
                placeholder="Nombre del escultor"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                placeholder="Biografía"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                placeholder="Fecha de nacimiento"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                placeholder="Fecha de fallecimiento"
                value={fechaFallecimiento}
                onChange={(e) => setFechaFallecimiento(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Crear Escultor
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default SculptorForm;
