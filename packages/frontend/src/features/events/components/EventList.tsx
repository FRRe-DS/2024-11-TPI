import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import EventCard from './ui/EventCard.tsx';
import { getEventos } from '../../../services/EventService.ts';

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
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden py-8">
            {eventos.length > 0 ? (
                <>
                    {/* Swiper principal */}
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 w-full max-w-7xl"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id} className="flex justify-center items-center">
                                <EventCard
                                    nombre={evento.nombre}
                                    descripcion={evento.descripcion}
                                    imagen={evento.imagen}
                                    fecha={evento.fecha}
                                    tematica={evento.tematica}
                                    id={evento.id}
                                    // Asegúrate de ajustar los estilos dentro del componente EventCard para una tarjeta más grande.
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Swiper de miniaturas */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper w-full max-w-7xl mt-8"
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id}>
                                <img
                                    src={evento.imagen}
                                    alt={evento.nombre}
                                    className="w-full h-full object-cover"
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