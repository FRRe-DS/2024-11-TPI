import React from 'react';

interface SculptorCardHomeProps {
    nombre: string;
    biografia: string;
    tematica: string;
    imagen: string;
}

const SculptorCardHome: React.FC<SculptorCardHomeProps> = ({ nombre, biografia, tematica, imagen }) => {
    return (
        <div className="max-w-md w-full h-auto bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 mb-6 mx-4">
            <img
                src={imagen}
                alt={nombre}
                className="w-full h-60 object-cover object-center"
                loading="lazy"
            />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{nombre}</h2>
                <p className="text-md text-gray-600 mt-2">{tematica}</p>
                <p className="text-sm text-gray-500 mt-4 overflow-hidden max-h-24 line-clamp-4">{biografia}</p>
            </div>
        </div>
    );
};

export default SculptorCardHome;
