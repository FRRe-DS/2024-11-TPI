import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {Autoplay, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import EventCard from '../ui/EventCard.tsx';
import { getEventos } from '../../../../../services/EventService.ts';

const EventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden py-8 bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500">
            {eventos.length > 0 ? (
                <>
                    {/* Swiper principal */}
                    <Swiper
                        modules={[FreeMode, Thumbs]}
                        spaceBetween={10}
                        slidesPerView={1}

                        thumbs={{ swiper: thumbsSwiper }}
                        className="relative w-full pt-2 flex-grow rounded-3xl overflow-hidden"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id} className="justify-center items-center">
                                <EventCard
                                    nombre={evento.nombre}
                                    descripcion={evento.descripcion}
                                    imagen={evento.imagen}
                                    fecha={evento.fecha}
                                    tematica={evento.tematica}
                                    id={evento.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Swiper de miniaturas */}
                    <Swiper
                        modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        autoplay={{
                            delay: 20000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}

                       className="flex justify-center w-full max-w-7xl mt-8"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id}>
                                <img
                                    src={evento.imagen}
                                    alt={evento.nombre}
                                    className="flex justify-center w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <p className="text-xl text-gray-500">No hay eventos disponibles</p>
            )}
        </div>
    );
};

export default EventList;