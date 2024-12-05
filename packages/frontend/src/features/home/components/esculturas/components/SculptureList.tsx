import React, { useState, useEffect } from 'react';
import {getEsculturas, getEsculturasByEvent} from '../../../../../services/SculptureService.ts';
import SculptureCard from '../ui/SculptureCard.tsx';

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
                console.log(eventoId)
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
    const handleClick = (id: string) => {
        // Redirige a la página de detalles de la escultura usando window.location.href
        window.location.href = `/escultura/${id}`;
    };

    if (loading) {
        return <p className="text-center text-gray-500">Cargando esculturas...</p>;
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-500">
            {esculturas && esculturas.length > 0 ? (
                esculturas.map((escultura: any) => (
                    <div key={escultura.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center bg-gradient-to-tr from-blue-100 via-indigo-500 to-purple-300" onClick={() => handleClick(escultura.id)}>
                        <SculptureCard
                            nombre={escultura.nombre}
                            descripcion={escultura.descripcion}
                            fechaCreacion={escultura.fechaCreacion}
                            escultor={escultura.escultor.usuario?.nombre}
                            imagenFinal={escultura.imagenFinal} // Agregado para mostrar la imagen
                        />
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No hay esculturas disponibles</p>
            )}
        </div>
    );
};

export default SculptureList;