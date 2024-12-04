import React from "react";

interface EsculturaCardProps {
    nombre: string;
    autor: string;
    puntuacion: number;
    nombreEvento: string;
    imagenFinal: string;
}

const EsculturaCard: React.FC<EsculturaCardProps> = ({
                                                                  nombre,
                                                                  autor,
                                                                  puntuacion,
                                                                  nombreEvento,
                                                                  imagenFinal,
                                                              }) => {
    return (
        <div
            className="flex-shrink-0 w-64 h-80 mx-2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500"
            style={{
                backgroundImage: `url(${imagenFinal})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col justify-end h-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-lg font-bold text-white">{nombre}</h3>
                <p className="text-sm text-gray-300 mt-1">{autor}</p>
                <p className="text-sm text-yellow-400 mt-1">Puntuación: {puntuacion}</p>
                <p className="text-xs text-gray-300 mt-2 line-clamp-2">{nombreEvento}</p>
            </div>
        </div>
    );
};

export default EsculturaCard;