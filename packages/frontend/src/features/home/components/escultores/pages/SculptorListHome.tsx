import React, { useState, useEffect } from "react";
import { fetchEscultoresConNombre } from "../../../../../services/escultorService.ts";
import SculptorCardHome from "../ui/SculptorCardHome.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import {Link} from "react-router-dom";

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
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-24 drop-shadow-lg">
                    Escultores Destacados
                </h2>

                {loading ? (
                    <p className="text-white text-lg">Cargando escultores...</p>
                ) : escultores.length > 0 ? (
                    <div className="flex justify-center items-center w-full">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
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
                            modules={[Pagination, Navigation]}
                            className="flex justify-center items-center h-screen "
                        >
                            {escultores.map((escultor, id) => (
                                <SwiperSlide key={id}>
                                    <div className="flex justify-center items-center">
                                        <SculptorCardHome
                                            nombre={escultor["usuario.nombre"]}
                                            biografia={escultor.biografia}
                                            puntuacionTotal={escultor.puntuacionTotal}
                                            imagen={escultor.imagen || 'https://via.placeholder.com/300'}
                                            instagram={escultor.instagram}
                                            facebook={escultor.facebook}
                                            youtube={escultor.youtube}
                                            linkedin={escultor.linkedin}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <p className="text-white text-lg">No hay escultores disponibles.</p>
                )}

            </div>
            <div className=""> {/* Added margin-top to create space */}
                <Link
                    to="/Escultores"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                >
                    Ver todos los escultores
                </Link>
            </div>

        </div>
    );
};

export default SculptorListHome;