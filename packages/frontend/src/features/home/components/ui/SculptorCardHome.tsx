import React from 'react';

interface SculptorCardHomeProps {
    nombre: string;
    biografia: string;
    tematica: string;
    imagen: string;
}

const SculptorCardHome: React.FC<SculptorCardHomeProps> = ({ nombre, biografia, tematica, imagen }) => {
    return (
        <div className="card shadow-xl group relative w-[300px] h-[400px] flex flex-col justify-end rounded-xl overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 transition-transform transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <img src={imagen} alt={nombre} className="w-full h-full object-cover object-center opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-white z-10 p-4 relative">
                <h1 className="text-2xl font-semibold text-shadow-lg">{nombre}</h1>
                <p className="text-sm">{tematica}</p>
            </div>
            <p className="text-white p-4 font-light overflow-hidden max-h-20 group-hover:max-h-[200px] transition-all duration-500">{biografia}</p>
        </div>
    );
};

export default SculptorCardHome;