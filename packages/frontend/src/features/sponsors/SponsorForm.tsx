import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSponsor } from '../../services/SponsorService';  // Cambia a tu servicio adecuado

const SponsorForm = () => {
    const [id, setId] = useState(''); // Estado para el ID
    const [name, setName] = useState(''); // Estado para el nombre
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevoSponsor = { id, name }; // Incluye el id en el objeto
        try {
            console.log('Enviando datos:', nuevoSponsor);
            const response = await createSponsor(nuevoSponsor);  // Llama a tu servicio para crear el sponsor
            console.log('Respuesta del servidor:', response);

            if (response === 'Sponsor creado con éxito') {
                alert('Sponsor creado con éxito');
                setId(''); // Limpiar el campo de id
                setName(''); // Limpiar el campo de nombre
                navigate('/'); // Redirige al usuario a la página principal después de crear el sponsor
            } else {
                setError('No se pudo crear el sponsor. Inténtalo de nuevo.');
            }
        } catch (error: any) {
            console.error('Error al crear sponsor:', error);
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
                placeholder="ID del sponsor"
                value={id}
                onChange={(e) => setId(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Nombre del sponsor"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Crear Sponsor
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default SponsorForm;

