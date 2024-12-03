import React, { useState, useEffect, useRef } from "react";
import { getEsculturasByEvent, getEsculturas } from "../../../services/SculptureService";
import SculptureCardHome from "./ui/SculptureCardHome";

interface SculptureListHomeProps {
    eventoId?: number; // Evento opcional.
}

const SculptureListHome: React.FC<SculptureListHomeProps> = ({ eventoId }) => {
    const [esculturas, setEsculturas] = useState<any[]>([]);
    const containerRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                const data = eventoId
                    ? await getEsculturasByEvent(eventoId)
                    : await getEsculturas();
                setEsculturas(data.esculturas);
            } catch (error) {
                console.error("Error al cargar esculturas:", error);
            }
        };

        fetchEsculturas();
    }, [eventoId]);

    const handleCardClick = (index: number, rowIndex: number) => {
        const container = containerRefs.current[rowIndex];
        if (container) {
            const cardWidth = container.offsetWidth / esculturas.length;
            const offset = index * cardWidth - container.offsetWidth / 2 + cardWidth / 2;
            container.scrollTo({ left: offset, behavior: "smooth" });
        }
    };

    return (
        <div
            className="relative w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-bienal-colores.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center pt-10 px-4 w-full h-full overflow-hidden">
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
                    Esculturas Destacadas
                </h2>

                {/* Contenedor dinámico de esculturas */}
                <div className="space-y-8 w-full px-4">
                    {Array.from({ length: Math.ceil(esculturas.length / 5) }, (_, rowIndex) => (
                        <div
                            key={rowIndex}
                            ref={(el) => (containerRefs.current[rowIndex] = el!)}
                            className="flex overflow-x-auto whitespace-nowrap space-x-4 animate-scroll"
                        >
                            {esculturas
                                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                                .map((escultura, index) => (
                                    <SculptureCardHome
                                        key={escultura.id}
                                        {...escultura}
                                        onClick={() => handleCardClick(index, rowIndex)} // Lógica al hacer clic.
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Animación de desplazamiento automático */}
            <style>{`
                .animate-scroll {
                    animation: scroll-horizontal 20s linear infinite;
                }
                @keyframes scroll-horizontal {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default SculptureListHome;
