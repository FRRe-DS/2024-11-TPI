import React, { useState, useEffect } from 'react';
import SculptureCardAdmin from './ui/SculptureCardAdmin.tsx';
import { getEsculturas, updateEscultura } from '../../../../../services/SculptureService.ts';

const SculptureListAdmin: React.FC = () => {
    const [esculturas, setEsculturas] = useState<any[]>([]);

    useEffect(() => {
        const fetchSculptures = async () => {
            try {
                const data = await getEsculturas();
                setEsculturas(data);
            } catch (error) {
                console.error('Error al cargar las esculturas:', error);
            }
        };

        fetchSculptures();
    }, []);

    const handleSaveSculpture = async (updatedSculpture: any) => {
        try {
            await updateEscultura(updatedSculpture.id, updatedSculpture);
            setEsculturas((prevSculptures) =>
                prevSculptures.map((sculpture) =>
                    sculpture.id === updatedSculpture.id ? updatedSculpture : sculpture
                )
            );
        } catch (error) {
            console.error('Error al actualizar la escultura:', error);
        }
    };

    return (
        <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-center mb-8">Lista de Esculturas</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {esculturas.length > 0 ? (
                    esculturas.map((escultura: any) => (
                        <SculptureCardAdmin
                            key={escultura.id}
                            id={escultura.id}
                            nombre={escultura.nombre}
                            descripcion={escultura.descripcion}
                            fechaCreacion={escultura.fechaCreacion}
                            tematica={escultura.tematica}
                            imagen={escultura.imagen}
                            onSave={handleSaveSculpture}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No hay esculturas disponibles
                    </p>
                )}
            </div>
        </div>
    );
};

export default SculptureListAdmin;
