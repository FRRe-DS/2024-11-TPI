import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchEscultores } from "../../../../../services/escultorService"; // Ajusta la ruta según tu estructura

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

interface Escultor {
    userId: number;
    biografia: string | null;
    imagen: string;
    puntuacionTotal: number;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
}

const EscultorSwiper: React.FC = () => {
    const [escultores, setEscultores] = useState<Escultor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEscultores();
                setEscultores(Array.isArray(data) ? data : []); // Ajusta según el formato de la respuesta
            } catch (err) {
                setError("Error al cargar la lista de escultores");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center text-lg">Cargando escultores...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="w-full max-w-7xl mx-auto p-20 bg-gradient-to-r from-purple-300 via-indigo-100 to-blue-300 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-center  mb-6">Escultores Destacados</h3>

            {/* Primer Swiper */}
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="rounded-lg shadow-xl"
                spaceBetween={10}  // Espacio entre cada slide
                slidesPerView={1}  // Mostrar un slide a la vez
                loop={true}
            >
                {escultores.length > 0 ? (
                    escultores.map((escultor) => (
                        <SwiperSlide key={escultor.userId}>
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={escultor.imagen || "/default-image.jpg"}
                                    alt={escultor.biografia || "Escultor"}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        {escultor.biografia || "Biografía no disponible"}
                                    </h4>
                                    <p className="text-gray-600 mt-2">Puntuación: {escultor.puntuacionTotal}</p>
                                    <div className="mt-3 space-x-3">
                                        {escultor.instagram && (
                                            <a
                                                href={escultor.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Instagram
                                            </a>
                                        )}
                                        {escultor.facebook && (
                                            <a
                                                href={escultor.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Facebook
                                            </a>
                                        )}
                                        {escultor.youtube && (
                                            <a
                                                href={escultor.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                YouTube
                                            </a>
                                        )}
                                        {escultor.linkedin && (
                                            <a
                                                href={escultor.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                LinkedIn
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No hay escultores disponibles</p>
                )}
            </Swiper>

        </div>
    );
};

export default EscultorSwiper;