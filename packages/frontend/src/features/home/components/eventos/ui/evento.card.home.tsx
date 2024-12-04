import React from "react";

interface EventCardHomeProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    fechaInc: string;
    fechaFin: string;
    tematica: string;
    id: string;
}

const EventoCardHome: React.FC<EventCardHomeProps> = ({
    nombre,
    descripcion,
    imagen,
    fechaInc,
    fechaFin,
    tematica,
    id,
}) => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div
                className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 group"
                style={{
                    backgroundImage: `url(${imagen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-12 text-white text-center">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
                        {nombre}
                    </h3>

                    <p className="text-lg md:text-2xl font-semibold text-orange-400 mb-4">
                        {tematica}
                    </p>

                    <p className="mt-4 text-gray-300 text-lg leading-relaxed mb-4">
                        {descripcion}
                    </p>

                    <p className="mt-4 text-gray-300 text-lg leading-relaxed mb-4">
                        Desde {fechaInc} hasta {fechaFin}
                    </p>

                    <a
                        href={`/events/${id}`}
                        className="mt-8 inline-block py-4 px-10 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white text-xl font-medium rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
                    >
                        Ver Detalles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventoCardHome;