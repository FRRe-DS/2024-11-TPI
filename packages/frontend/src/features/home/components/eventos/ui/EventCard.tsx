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

    return (
        <div
            className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Contenedor de imagen y datos */}
            <div className="flex">
                {/* Imagen principal de fondo */}
                <div
                    className="w-1/2 h-80 bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${imagen})` }}
                >
                    {/* Superposición de color (semi-transparente) */}
                    <div className={`transition-all duration-300 ${isHovered ? 'bg-black bg-opacity-50' : 'bg-transparent'} h-full w-full`}>
                    </div>
                </div>

                {/* Contenido a la derecha */}
                <div className="w-1/2 p-6 space-y-4">
                    {/* Título y temática */}
                    <h2 className="text-3xl font-semibold text-white">{nombre}</h2>
                    <p className="text-lg text-yellow-300">{tematica}</p>

                    {/* Descripción */}
                    <p className="text-white text-md line-clamp-3">{descripcion}</p>

                    {/* Fecha */}
                    <p className="text-xl font-semibold text-pink-500">{fecha}</p>

                    {/* Ver más detalles botón */}
                    <a
                        href={`/events/${id}`}
                        className="inline-block py-2 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg rounded-lg hover:from-pink-500 hover:to-orange-500 transition duration-300 transform hover:scale-105"
                    >
                        Ver detalles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
