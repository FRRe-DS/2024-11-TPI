import React, { useState } from 'react';
import { createEscultura } from '../../../services/SculptureService.ts';  // Cambia a tu servicio adecuado

const SculptureForm = () => {
    const [nombre, setNombre] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tematica, setTematica] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevaEscultura = { nombre, fechaCreacion, descripcion, tematica };
        try {
            console.log('Enviando datos:', nuevaEscultura);
            const response = await createEscultura(nuevaEscultura);  // Llama a tu servicio para crear la escultura
            console.log('Respuesta del servidor:', response);

            if (response === 'Escultura creada con éxito') {
                alert('Escultura creada con éxito');
                setNombre('');
                setFechaCreacion('');
                setDescripcion('');
                setTematica('');
            } else {
                setError('No se pudo crear la escultura. Inténtalo de nuevo.');
            }
        } catch (error: any) {
            console.error('Error al crear escultura:', error);
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
                placeholder="Nombre de la escultura"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                value={fechaCreacion}
                onChange={(e) => setFechaCreacion(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Temática"
                value={tematica}
                onChange={(e) => setTematica(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Crear Escultura
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default SculptureForm;
