import React, { useState, useEffect } from 'react';
import { getEsculturas } from '../../../services/SculptureService.ts';

const SculptureList: React.FC = () => {
    const [esculturas, setEsculturas] = useState<any[]>([]);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                const data = await getEsculturas();
                setEsculturas(data);
            } catch (error) {
                console.error('Error al obtener las esculturas:', error);
            }
        };
        fetchEsculturas();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Lista de Esculturas</h2>
            {esculturas.map((escultura, id) => (
                <div key={id} className="bg-gray-100 p-4 mb-2 rounded">
                    <h3 className="font-bold">{escultura.nombre}</h3>
                    <p>{escultura.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default SculptureList;
