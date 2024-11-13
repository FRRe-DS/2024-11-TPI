import React, { useState, useEffect } from 'react';
import { getEscultores } from '../../../services/SculptorService.ts';

const SculptorList: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await getEscultores();
                setEscultores(data);
            } catch (error) {
                console.error('Error al obtener los escultores:', error);
            }
        };
        fetchEscultores();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Lista de Escultores</h2>
            {escultores.map((escultor, id) => (
                <div key={id} className="bg-gray-100 p-4 mb-2 rounded">
                    <h3 className="font-bold">{escultor.nombre}</h3>
                    <p>{escultor.biografia}</p>
                </div>
            ))}
        </div>
    );
};

export default SculptorList;
