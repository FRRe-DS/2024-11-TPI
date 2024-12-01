import React, { useState, useEffect } from 'react';
import { createEscultura } from '../../../../../services/SculptureService.ts';
import { getEventos } from '../../../../../services/EventService.ts';
import { fetchEscultoresConNombre } from '../../../../../services/escultorService.ts'; // Servicio para obtener escultores

interface Evento {
    id: string;
    nombre: string;
}

interface Escultor {
    'usuario.nombre': string;
}

const usuarioId = 123; // Reemplaza esto con la lógica de autenticación o contexto.

const SculptureForm: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [fechaCreacion, setFechaCreacion] = useState<string>('');
    //const [descripcion, setDescripcion] = useState<string>('');
    const [plano, setPlano] = useState<string>('');
    const [imagenFinal, setImagenFinal] = useState<string>('');
    const [eventoID, setEventoID] = useState<string>('');
    const [escultorID, setEscultorID] = useState<string>('');
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [escultores, setEscultores] = useState<Escultor[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventosData = await getEventos();
                const escultoresData = await fetchEscultoresConNombre();
                setEventos(eventosData);
                setEscultores(escultoresData);
            } catch (error) {
                console.error('Error al cargar datos:', error);
                setError('No se pudieron cargar los datos. Intenta nuevamente.');
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!nombre || !fechaCreacion || !eventoID || !escultorID || !plano || !imagenFinal) {
            setError('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const nuevaEscultura = {
            nombre,
            descripcion:'Escultura cool',
            plano,
            imagenes: null,
            imagenFinal,
            fechaCreacion,
            usuarioId,
            eventoId: eventoID,
            escultorId: escultorID,
        };

        try {
            console.log('Enviando datos:', nuevaEscultura);
            const response = await createEscultura(nuevaEscultura);
            console.log('Respuesta del servidor:', response);

            alert('Escultura creada con éxito');
            setNombre('');
            setFechaCreacion('');
            //setDescripcion('');
            setPlano('');
            setImagenFinal('');
            setEventoID('');
            setEscultorID('');
            setError('');
        } catch (error) {
            console.error('Error al crear escultura:', error);
            setError('No se pudo crear la escultura. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            {/* Campos de entrada */}
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
            <input
                type="text"
                placeholder="URL del plano"
                value={plano}
                onChange={(e) => setPlano(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="URL de la imagen final"
                value={imagenFinal}
                onChange={(e) => setImagenFinal(e.target.value)}
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
            <select
                value={escultorID}
                onChange={(e) => setEscultorID(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            >
                <option value="">Seleccionar Escultor</option>
                {escultores.map((escultor) => (
                    <option key={escultor.id} value={escultor.id}>
                        {'Nombre desconocido' || escultor['usuario.nombre']}
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

//<textarea
//                 placeholder="Descripción"
//                 value={descripcion}
//                 onChange={(e) => setDescripcion(e.target.value)}
//                 className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//             />