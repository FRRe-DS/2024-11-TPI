import React, { useState } from 'react';

interface SculptorCardHomeProps {
    nombre: string;
    biografia?: string;
    puntuacionTotal: number;
    imagen: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
}

const SculptorCardHome: React.FC<SculptorCardHomeProps> = ({
    nombre,
    biografia = '',
    puntuacionTotal,
    imagen,
}) => {
    const [showFullBio, setShowFullBio] = useState(false);

    return (
        <div className="w-96 h-112 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 mb-6 mx-auto sm:mx-4">
            <div className="relative h-56">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                    {nombre}
                </h2>
            </div>
            <div className="p-5 h-56 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600 font-medium">
                        Puntuación: <span className="font-bold text-lg">{puntuacionTotal}</span>
                    </p>
                </div>
                {biografia && (
                    <p className="text-sm text-gray-500">
                        {showFullBio ? biografia : `${biografia.substring(0, 100)}...`}
                        {biografia.length > 100 && (
                            <button
                                onClick={() => setShowFullBio(!showFullBio)}
                                className="text-blue-500 ml-2 focus:outline-none"
                            >
                                {showFullBio ? 'Ver menos' : 'Ver más'}
                            </button>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SculptorCardHome;