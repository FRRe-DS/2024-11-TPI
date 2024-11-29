import React, { useState, useEffect } from 'react';
import { createEscultura } from '../../../../../services/SculptureService.ts'; // Ajusta la ruta según tu estructura
import { getEventos } from '../../../../../services/EventService.ts'; // Servicio para obtener eventos

const SculptureForm = () => {
    const [nombre, setNombre] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tematica, setTematica] = useState('');
    const [eventoID, setEventoID] = useState('');
    const [imagen, setImagen] = useState(''); // Campo para la URL de la imagen
    const [eventos, setEventos] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const eventosData = await getEventos();
                setEventos(eventosData);
            } catch (error: any) {
                console.error('Error al obtener eventos:', error);
                setError('No se pudieron cargar los eventos.');
            }
        };
        fetchEventos();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevaEscultura = { nombre, fechaCreacion, descripcion, tematica, eventoID, imagen };
        try {
            console.log('Enviando datos:', nuevaEscultura);
            const response = await createEscultura(nuevaEscultura);
            console.log('Respuesta del servidor:', response);

            alert('Escultura creada con éxito');
            setNombre('');
            setFechaCreacion('');
            setDescripcion('');
            setTematica('');
            setEventoID('');
            setImagen('');
        } catch (error: any) {
            console.error('Error al crear escultura:', error);
            setError('No se pudo crear la escultura. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <input
                type="text"
                placeholder="Nombre de la escultura"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                value={fechaCreacion}
                onChange={(e) => setFechaCreacion(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Temática"
                value={tematica}
                onChange={(e) => setTematica(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <select
                value={eventoID}
                onChange={(e) => setEventoID(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            >
                <option value="">Seleccionar Evento</option>
                {eventos.map((evento) => (
                    <option key={evento.id} value={evento.id}>
                        {evento.nombre}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="URL de la imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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