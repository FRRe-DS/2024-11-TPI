import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getEventos } from '../../../services/EventService'; // Servicio actualizado
import { Pagination } from 'swiper/modules';
import EventCardHome from "./ui/EventCardHome";
import { Link } from "react-router-dom";

const EventListHome: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [currentBg, setCurrentBg] = useState<string>('');

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data || []);
                if (data?.length > 0) {
                    setCurrentBg(data[0].imagen);
                }
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
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

            <div className="relative w-full h-full flex flex-col items-center justify-center z-10 px-4">
                {eventos.length > 0 ? (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop
                        onSlideChange={handleSlideChange}
                        className="relative w-full max-w-6xl pt-16 z-10 flex-grow"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id}>
                                <EventCardHome {...evento} />
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
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto text-center"
                    >
                        Ver Lista de Eventos
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default EventListHome;
