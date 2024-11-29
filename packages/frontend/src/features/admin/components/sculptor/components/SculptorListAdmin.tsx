import React, { useEffect, useState } from 'react';
import SculptorCardAdmin from './ui/SculptorCardAdmin';
import { getEscultores } from '../../../../../services/escultorService.ts';

const SculptorListAdmin: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await getEscultores();
                setEscultores(data);
            } catch (err) {
                console.error('Error al cargar los escultores:', err);
                setError('Error al cargar los escultores');
            } finally {
                setLoading(false);
            }
        };

        fetchEscultores();
    }, []);

    if (loading) return <p className="text-center text-lg">Cargando escultores...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Lista de Escultores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {escultores.length > 0 ? (
                    escultores.map((escultor) => (
                        <SculptorCardAdmin key={escultor.userId} {...escultor} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No hay escultores disponibles</p>
                )}
            </div>
        </div>
    );
};

export default SculptorListAdmin;
