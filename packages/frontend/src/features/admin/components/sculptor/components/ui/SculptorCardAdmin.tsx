import React from 'react';

interface SculptorCardAdminProps {
    userId: number;
    nombre: string;
    biografia?: string | null;
    imagen?: string | null;
    puntuacionTotal?: number;
    instagram?: string | null;
    facebook?: string | null;
    youtube?: string | null;
    linkedin?: string | null;
}

const SculptorCardAdmin: React.FC<SculptorCardAdminProps> = ({
                                                                 nombre,
                                                                 biografia,
                                                                 imagen,
                                                                 puntuacionTotal = 0,
                                                                 instagram,
                                                                 facebook,
                                                                 youtube,
                                                                 linkedin,
                                                             }) => {
    return (
        <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden">
            {imagen ? (
                <img src={imagen} alt={nombre} className="w-full h-64 object-cover" />
            ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    Sin Imagen
                </div>
            )}
            <div className="p-4">
                <h3 className="text-lg font-bold">{nombre}</h3>
                <p className="text-sm text-gray-600">
                    {biografia?.length ? biografia : 'No hay biografía disponible.'}
                </p>
                <p className="text-sm text-gray-600">Puntuación: {puntuacionTotal}</p>
                <div className="mt-2">
                    {instagram && (
                        <a href={instagram} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    )}
                    {facebook && (
                        <a href={facebook} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    )}
                    {youtube && (
                        <a href={youtube} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">
                            YouTube
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SculptorCardAdmin;
