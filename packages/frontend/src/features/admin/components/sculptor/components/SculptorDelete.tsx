import React, { useEffect, useState } from 'react';
import { getEscultores, deleteEscultor } from '../../../../../services/escultorService.ts';

const SculptorDelete: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchEscultores = async () => {
            const data = await getEscultores();
            setEscultores(data);
        };
        fetchEscultores();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteEscultor(id);
            setEscultores((prev) => prev.filter((escultor) => escultor.id !== id));
            alert('Escultor eliminado correctamente');
        } catch {
            alert('Error al eliminar escultor');
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Eliminar Escultores</h2>
            {escultores.map((escultor) => (
                <div key={escultor.id} className="flex justify-between items-center mb-2">
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