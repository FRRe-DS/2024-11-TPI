import React, { useState } from 'react';

interface SculptureCardProps {
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    tematica: string;
    id: string;
    imagen?: string; // La imagen es opcional
}

const SculptureCard: React.FC<SculptureCardProps> = ({ nombre, descripcion, tematica, fechaCreacion, id, imagen }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="shadow-lg bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Imagen */}
            {imagen && (
                <div className="w-full h-40 overflow-hidden">
                    <img
                        src={imagen}
                        alt={nombre}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Contenido */}
            <div className="p-4">
                {/* Título */}
                <h2 className="text-lg font-bold text-gray-800 truncate mb-2">{nombre}</h2>

                {/* Información adicional */}
                <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Fecha de creación:</span> {new Date(fechaCreacion).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Temática:</span> {tematica}
                </p>

                {/* Descripción */}
                <p className="text-sm text-gray-700 mb-2">
                    {showFullDescription ? descripcion : `${descripcion.substring(0, 100)}...`}
                    {descripcion.length > 100 && (
                        <button
                            onClick={() => setShowFullDescription(!showFullDescription)}
                            className="text-blue-500 text-sm underline ml-1"
                        >
                            {showFullDescription ? 'Ver menos' : 'Ver más'}
                        </button>
                    )}
                </p>

                {/* Footer */}
                <div className="text-right">
                    <span className="text-xs text-gray-500 italic">ID: {id}</span>
                </div>
            </div>
        </div>
    );
};

export default SculptureCard;
