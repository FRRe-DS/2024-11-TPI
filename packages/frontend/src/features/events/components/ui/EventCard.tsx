import React, { useState } from 'react';
import ReactQR from 'react-qr-code';

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
    const baseURL = `${window.location.origin}/events/${id}`;

    return (
        <div
            className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagen principal de fondo */}
            <div
                className="h-80 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${imagen})` }}
            >
                {/* Superposición de color (semi-transparente) */}
                <div className={`transition-all duration-300 ${isHovered ? 'bg-black bg-opacity-50' : 'bg-transparent'} h-full w-full`}>
                </div>
            </div>

            {/* Información dentro de la tarjeta */}
            <div
                className={`p-6 space-y-4 transition-all duration-300 ${isHovered ? 'opacity-100 h-auto' : 'opacity-0 absolute bottom-4 left-4 right-4 h-0'}`}
            >
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
                    className="inline-block py-2 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg rounded-lg hover:from-pink-500 hover:to-orange-500 transition duration-300"
                >
                    Ver detalles
                </a>
            </div>

            {/* Código QR pequeño */}
            <div className="absolute bottom-4 right-4">
                <ReactQR value={baseURL} size={80} />
            </div>
        </div>
    );
};

export default EventCard;
