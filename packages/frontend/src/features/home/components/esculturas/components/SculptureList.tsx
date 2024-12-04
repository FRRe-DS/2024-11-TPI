import React, { useState, useEffect } from 'react';
import { getEsculturas, getEsculturasByEvent } from '../../../../../services/SculptureService.ts';
import SculptureCard from '../ui/Escultura.Card.tsx';

interface SculptureListProps {
    eventoId?: any;
}

const SculptureList: React.FC<SculptureListProps> = ({ eventoId }) => {
    const [esculturas, setEsculturas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                setLoading(true);
                const data = eventoId ? await getEsculturasByEvent(eventoId) : await getEsculturas();
                setEsculturas(data.esculturas);
            } catch (error) {
                console.error('Error al obtener las esculturas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEsculturas();
    }, [eventoId]);

    if (loading) {
        return <p className="text-center text-gray-500">Cargando esculturas...</p>;
    }

    return (
        <div className="overflow-y-auto h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {esculturas && esculturas.length > 0 ? (
                    esculturas.map((escultura: any) => (
                        <div key={escultura.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            <SculptureCard
                                nombre={escultura.nombre}
                                autor={escultura.autor}
                                puntuacion={escultura.puntuacion}
                                nombreEvento={escultura.nombreEvento}
                                imagenFinal={escultura.imagenFinal}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No hay esculturas disponibles</p>
                )}
            </div>
        </div>
    );
};

export default SculptureList;