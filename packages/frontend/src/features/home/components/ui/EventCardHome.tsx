import React from "react";

interface EventCardHomeProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    fecha: string;
    tematica: string;
    id: string;
}

const EventCardHome: React.FC<EventCardHomeProps> = ({
                                                         nombre,
                                                         descripcion,
                                                         imagen,
                                                         fecha,
                                                         tematica,
                                                         id,
                                                     }) => {
    return (
        <div
            className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 group"
            style={{
                backgroundImage: `url(${imagen})`,
                backgroundSize: "cover", // Ajusta cómo se muestra la imagen de fondo
                backgroundPosition: "center", // Centra la imagen en la tarjeta
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
                {/* Event Title */}
                <h3 className="text-5xl font-bold tracking-wide mb-6">
                    {nombre} {/* Tamaño: text-5xl */}
                </h3>

                {/* Event Details */}
                <div className="text-2xl space-y-4">
                    <p>
                        <span className="font-semibold text-orange-400">
                            Temática:
                        </span>{" "}
                        {tematica} {/* Tamaño: text-2xl */}
                    </p>
                    <p>
                        <span className="font-semibold text-pink-400">
                            Fecha:
                        </span>{" "}
                        {fecha} {/* Tamaño: text-2xl */}
                    </p>
                </div>

                {/* Event Description */}
                <p className="mt-6 text-gray-300 text-lg leading-relaxed line-clamp-4">
                    {descripcion} {/* Tamaño: text-lg */}
                </p>

                {/* "Ver Detalles" Button */}
                <a
                    href={`/events/${id}`}
                    className="mt-8 inline-block py-4 px-10 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white text-2xl font-medium rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
                >
                    Ver Detalles {/* Tamaño: text-2xl */}
                </a>
            </div>
        </div>
    );
};

export default EventCardHome;
