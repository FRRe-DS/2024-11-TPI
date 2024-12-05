import React, { useState } from 'react';

interface EventCardProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    fecha: string;
    tematica: string;
    id: string;
}

const EventCard: React.FC<EventCardProps> = ({ nombre, descripcion, imagen, fecha, tematica, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultImage =
        'https://via.placeholder.com/600x400?text=Evento+Sin+Imagen';

    return (
        <div
            className="max-w-6xl mx-auto bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagen */}
            <div className="relative w-full">
                <img
                    src={imagen || defaultImage}
                    alt="Imagen del evento"
                    className="w-full h-80 object-cover "
                />
                {/* Superposición de color */}
                <div
                    className={`absolute inset-0 transition-all duration-500 ${
                        isHovered ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-30'
                    }`}
                />
            </div>
            <div className="">
                {/* Contenido */}
                <div
                    className="flex flex-col justify-between w-full p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
                    {/* Temática */}
                    <p className="text-xs md:text-sm uppercase tracking-wide text-purple-700 font-semibold">
                        {tematica}
                    </p>

                    {/* Título */}
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-800 mt-2 leading-tight">
                        {nombre}
                    </h2>

                    {/* Descripción */}
                    <p className="text-gray-600 text-sm md:text-md mt-4 line-clamp-3">
                        {descripcion}
                    </p>

                    {/* Fecha */}
                    <p className="text-sm md:text-lg font-medium text-gray-500 mt-4">
                        📅 {fecha}
                    </p>

                    {/* Botón Ver Más */}
                    <a
                        href={`/events/${id}`}
                        className="mt-6 py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg text-sm md:text-md shadow-md hover:from-purple-500 hover:to-indigo-500 transition-transform duration-300"
                    >
                        Ver detalles
                    </a>
                </div>
            </div>
        </div>

            );
            };

            export default EventCard;
