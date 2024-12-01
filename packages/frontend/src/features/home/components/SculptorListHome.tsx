import React, { useState, useEffect } from "react";
import { fetchEscultoresConNombre } from "../../../services/escultorService";
import SculptorCardHome from "./ui/SculptorCardHome";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SculptorListHome: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await fetchEscultoresConNombre();
                setEscultores(data);
            } catch (error) {
                console.error("Error al obtener los escultores:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEscultores();
    }, []);

    return (
        <div
            className="relative w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage:
                    "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-escultores-invitados.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center pt-24 px-4 w-full h-full overflow-y-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
                    Escultores Destacados
                </h2>

                {loading ? (
                    <p className="text-white text-lg">Cargando escultores...</p>
                ) : escultores.length > 0 ? (
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: 30,

                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-full"
                    >
                        {escultores.map((escultor, id) => (
                            <SwiperSlide key={id}>
                                <div className="flex justify-center">
                                    <SculptorCardHome
                                        nombre={escultor["usuario.nombre"]}
                                        biografia={escultor.biografia}
                                        tematica={escultor.tematica}
                                        imagen={escultor.imagen || "https://default-avatar.com/imagen.png"}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-white text-lg">No hay escultores disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default SculptorListHome;
