import React, { useState, useEffect } from 'react';
import { createEscultura } from '../../../../../services/SculptureService';
import { getEventos } from '../../../../../services/EventService';
import { fetchEscultoresConNombre } from '../../../../../services/escultorService';

interface Evento {
    id: string;
    nombre: string;
}

interface Escultor {
    id: string;
    'usuario.nombre': string;
}

const SculptureForm: React.FC = () => {
    // Estado para manejar el formulario
    const [nombre, setNombre] = useState<string>('');
    const [eventoID, setEventoID] = useState<string>('');
    const [escultorID, setEscultorID] = useState<string>('');
    const [eventos, setEventos] = useState<Evento[]>([]); // Lista de eventos
    const [escultores, setEscultores] = useState<Escultor[]>([]); // Lista de escultores
    const [error, setError] = useState<string>(''); // Para manejar errores

    // Obtener eventos y escultores al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventosData = await getEventos();
                const escultoresData = await fetchEscultoresConNombre();
                setEventos(eventosData); // Asignar los eventos al estado
                setEscultores(escultoresData); // Asignar los escultores al estado
            } catch (error) {
                console.error('Error al cargar datos:', error);
                setError('No se pudieron cargar los datos. Intenta nuevamente.');
            }
        };

        fetchData(); // Llamar a la función para obtener los datos
    }, []);

    // Manejo del envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevenir la recarga de la página

        // Validación de campos obligatorios
        if (!nombre || !eventoID || !escultorID) {
            setError('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const nuevaEscultura = {
            nombre,
            eventoId: eventoID,
            escultorId: escultorID,
        };

        try {
            // Enviar los datos al backend para crear la escultura
            const response = await createEscultura(nuevaEscultura);

            if (response?.status === 201) {
                alert('Escultura creada con éxito');
                // Limpiar el formulario
                setNombre('');
                setEventoID('');
                setEscultorID('');
                setError('');
            } else {
                setError('Hubo un error al crear la escultura.');
            }
        } catch (error) {
            console.error('Error al crear escultura:', error);
            setError('No se pudo crear la escultura. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Evento</label>
                <select
                    value={eventoID}
                    onChange={(e) => setEventoID(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                    {eventos.map((evento) => (
                        <option key={evento.id} value={evento.id}>
                            {evento.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium">Escultor</label>
                <select
                    value={escultorID}
                    onChange={(e) => setEscultorID(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                    {escultores.map((escultor) => (
                        <option key={escultor.id} value={escultor.id}>
                            {escultor['usuario.nombre']}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                    Crear Escultura
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Mostrar mensaje de error */}
        </form>
    );
};

export default SculptureForm;