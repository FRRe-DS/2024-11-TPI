import React from 'react';

interface EventCardVoteProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    fecha: string;
    tematica: string;
    id: string;
}

const EventCardVote: React.FC<EventCardVoteProps> = ({ nombre, descripcion, imagen, fecha, tematica, id }) => {
    return (
        <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl relative group bg-white">
            {/* Imagen principal de fondo */}
            <div
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${imagen})` }}
            >
                {/* Superposición de color (semi-transparente) */}
                <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full w-full"></div>
            </div>

            {/* Contenido dentro de la tarjeta */}
            <div className="p-6 space-y-4">
                {/* Título y temática */}
                <h2 className="text-5xl font-bold text-yellow-400">{nombre}</h2>
                <p className="text-xl text-green-500">{tematica}</p>

                {/* Descripción con efecto hover */}
                <p className="text-lg text-gray-200 group-hover:text-black group-hover:bg-yellow-400 transition-all duration-300 p-4 rounded-lg">
                    {descripcion}
                </p>

                {/* Fecha con color llamativo */}
                <p className="text-3xl font-semibold text-pink-500">{fecha}</p>

                {/* Botón para votar */}
                <a
                    href={`/votacion/${id}`}
                    className="inline-block py-2 px-6 bg-pink-500 text-white font-semibold text-lg rounded-lg hover:bg-pink-700 transition duration-300"
                >
                    Votar
                </a>
            </div>
        </div>
    );
};

export default EventCardVote;