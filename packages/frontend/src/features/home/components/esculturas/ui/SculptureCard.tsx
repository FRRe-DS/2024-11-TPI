import React, { useState } from 'react';

interface SculptureCardProps {
    nombre: string;
    descripcion?: string;
    fechaCreacion?: string;
    imagenFinal?: string;  // Usamos solo una imagen final
    escultor?: string; // Agregamos el nombre del escultor
}

const SculptureCard: React.FC<SculptureCardProps> = ({ nombre, descripcion, fechaCreacion, imagenFinal, escultor }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    console.log(descripcion)
    return (
        <div className="shadow-lg bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Imagen Final */}
            {imagenFinal && (
                <div className="w-full h-60 overflow-hidden">
                    <img
                        src={imagenFinal}
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
                {fechaCreacion && (
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Fecha de creación:</span> {new Date(fechaCreacion).toLocaleDateString()}
                    </p>
                )}
                {escultor && (
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Escultor:</span> {escultor}
                    </p>
                )}

                {/* Descripción */}
                {descripcion && (
                    <p className="text-sm text-gray-700 mb-2">
                        {showFullDescription ? descripcion : descripcion.substring(0, 100) + '...'}
                        {descripcion.length > 100 && (
                            <button
                                onClick={() => setShowFullDescription(!showFullDescription)}
                                className="text-blue-500 text-sm underline ml-1"
                            >
                                {showFullDescription ? 'Ver menos' : 'Ver más'}
                            </button>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SculptureCard;