import React from "react";

interface SculptureCardHomeProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    onClick: () => void;
}

const SculptureCardHome: React.FC<SculptureCardHomeProps> = ({
                                                                 nombre,
                                                                 descripcion,
                                                                 imagen,
                                                                 onClick,
                                                             }) => {
    return (
        <div
            onClick={onClick}
            className="flex-shrink-0 w-64 h-80 mx-2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{
                backgroundImage: `url(${imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col justify-end h-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-lg font-bold text-white">{nombre}</h3>
                <p className="text-xs text-gray-300 mt-2 line-clamp-2">{descripcion}</p>
            </div>
        </div>
    );
};

export default SculptureCardHome;