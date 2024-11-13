import React, { useEffect, useState } from 'react';
import { getEscultores, deleteEscultor } from '../../../services/SculptorService.ts';

const SculptorDelete: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    const fetchEscultores = async () => {
        const data = await getEscultores();
        setEscultores(data);
    };

    useEffect(() => {
        fetchEscultores();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteEscultor(id);
            alert('Escultor eliminado con éxito');
            fetchEscultores(); // Recargar la lista de escultores después de eliminar uno
        } catch (error) {
            console.error('Error al eliminar el escultor:', error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Eliminar Escultores</h2>
            {escultores.map((escultor) => (
                <div key={escultor.id} className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
                    <span>{escultor.nombre}</span>
                    <button
                        onClick={() => handleDelete(escultor.id)}
                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700"
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SculptorDelete;