import React, { useState, useEffect } from 'react';
import {getEsculturasbyEvent} from '../../../services/SculptureService.ts';
import SculptureCard from "../../../components/ui/SculptureCard.tsx";

const SculptureList: React.FC = () => {
    const [esculturas, setEsculturas] = useState<any[]>([]);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                let id= 1;
                const data = await getEsculturasbyEvent(id);
                setEsculturas(data);
            } catch (error) {
                console.error('Error al obtener las esculturas:', error);
            }
        };
        fetchEsculturas();
    }, []);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {esculturas.length > 0 ? (
                esculturas.map((escultura: any) => (
                    <SculptureCard
                        key={escultura.id}
                        nombre={escultura.nombre}
                        descripcion={escultura.descripcion}
                        fechaCreacion={escultura.fechaCreacion}
                        tematica={escultura.tematica}
                        id={escultura.id}
                    />
                ))
            ) : (
                <p>No hay esculturas en este evento</p>
            )}
        </div>
    );
};

export default SculptureList;
