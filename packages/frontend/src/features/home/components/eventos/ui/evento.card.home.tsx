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
        <div className="w-full h-128 flex flex-col items-center justify-center">
            <div
                className="relative w-full max-w-6xl h-full mx-auto rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 group fade-in"
                style={{
                    backgroundImage: `url(${imagen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col justify-between h-full p-10 md:p-20 text-white text-center">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-wide mb-6">
                        {nombre}
                    </h3>

                    <p className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
                        {tematica}
                    </p>

                    <p className="mt-6 text-gray-300 text-xl md:text-2xl leading-relaxed mb-6">
                        {descripcion}
                    </p>

                    <p className="mt-6 text-gray-300 text-xl md:text-2xl leading-relaxed mb-6">
                        Desde {fechaInc} hasta {fechaFin}
                    </p>

                    <a
                        href={`/events/${id}`}
                        className="mt-10 inline-block py-5 px-12 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white text-2xl font-medium rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
                    >
                        Ver Detalles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventoCardHome;