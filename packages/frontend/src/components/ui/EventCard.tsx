import React from 'react';

interface EventCardProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    fecha: string;
    tematica: string;
    id: string; // Asegúrate de que cada evento tenga un id único
}

const EventCard: React.FC<EventCardProps> = ({ nombre, descripcion, imagen, fecha, tematica, id }) => {
    return (
        <div
            className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-purple-500 hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                style={{ backgroundImage: `url(${imagen})`, backgroundSize: 'cover' }}
            ></div>

            <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">{nombre}</h2>
                <p className="text-gray-200 line-clamp-3">{descripcion}</p>
                <p className="text-sm mt-2">{tematica}</p>
                <p className="text-sm text-gray-300">{fecha}</p>
            </div>

            <a
                href={`/events/${id}`}
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6 text-center"
            >
                Ver detalles
            </a>
        </div>
    );
};

export default EventCard;