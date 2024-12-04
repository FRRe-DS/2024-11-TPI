import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getEventos } from '../../../../../services/EventService.ts';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import EventoCardHome from "../ui/evento.card.home.tsx";
import { Link } from "react-router-dom";

const EventosHome: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [currentBg, setCurrentBg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data || []);
                if (data?.length > 0) {
                    setCurrentBg(data[0].imagen);
                }
            } catch (error) {
                setError('Error al cargar los eventos');
                console.error('Error al cargar los eventos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEventos();
    }, []);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.realIndex;
        setCurrentBg(eventos[currentIndex]?.imagen || '');
    };

    return (
        <div
            className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${currentBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative w-full h-full flex flex-col items-center justify-center z-10 px-4 ">
                {loading ? (
                    <p className="text-center text-gray-300 text-2xl z-10 ">Cargando eventos...</p>
                ) : error ? (
                    <p className="text-center text-red-500 text-2xl z-10">{error}</p>
                ) : eventos.length > 0 ? (
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop
                        onSlideChange={handleSlideChange}
                        className="relative w-full max-w-6xl pt-16 z-10 flex-grow"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id}>
                                <EventoCardHome {...evento} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center text-gray-300 text-2xl z-10">
                        No hay eventos disponibles
                    </p>
                )}

                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 flex justify-center">
                    <Link
                        to="/Eventos"
                        className="bg-gradient-to-r from-red-600 via-blue-300 to-purple-100 hover:bg-blue-700 text-black text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
                    >
                        Ver Lista de Eventos
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default EventosHome;