import React, { useState, useEffect } from 'react';
import { createEscultura } from '../../../services/SculptureService.ts';  // Cambia a tu servicio adecuado
import { getEventos } from '../../../services/EventService.ts'; // Asegúrate de tener un servicio para obtener los eventos

const SculptureForm = () => {
    const [nombre, setNombre] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tematica, setTematica] = useState('');
    const [eventoID, setEventoID] = useState<string>('');  // Nuevo estado para almacenar el eventoID
    const [eventos, setEventos] = useState<any[]>([]);  // Estado para almacenar la lista de eventos
    const [error, setError] = useState('');

    // Obtener los eventos al cargar el componente
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const eventosData = await getEventos(); // Llama a tu servicio para obtener los eventos
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

        const nuevaEscultura = { nombre, fechaCreacion, descripcion, tematica, eventoID };  // Incluir eventoID
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
                setEventoID('');  // Limpiar eventoID
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
