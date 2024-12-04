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
    instagram,
    facebook,
    youtube,
    linkedin,
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
                <div className="flex justify-center space-x-6 mt-5">
                    {instagram && (
                        <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition"
                            aria-label="Instagram"
                        >
                            <img
                                src="/path/to/instagram.svg"
                                alt="Instagram"
                                className="w-5 h-5"
                            />
                        </a>
                    )}
                    {facebook && (
                        <a
                            href={facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition"
                            aria-label="Facebook"
                        >
                            <img
                                src="/path/to/facebook.svg"
                                alt="Facebook"
                                className="w-5 h-5"
                            />
                        </a>
                    )}
                    {youtube && (
                        <a
                            href={youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition"
                            aria-label="YouTube"
                        >
                            <img
                                src="/path/to/youtube.svg"
                                alt="YouTube"
                                className="w-5 h-5"
                            />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="/path/to/linkedin.svg"
                                alt="LinkedIn"
                                className="w-5 h-5"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SculptorCardHome;