import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventCard from './ui/EventCard.tsx';
import { getEventos } from '../../../services/EventService.ts';
import { Navigation, Pagination } from 'swiper/modules';

const EventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

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

// EventList.tsx
    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center py-8 px-4 overflow-hidden relative"
            style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg')`,
            }}
        >
            {eventos.length > 0 ? (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3}
                    navigation
                    pagination={{clickable: true}}
                    loop={true}
                    className="w-full max-w-7xl"
                >
                    {eventos.map((evento) => (
                        <SwiperSlide key={evento.id}
                                     className="flex justify-center items-center h-full overflow-hidden">
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
            ) : (
                <p className="text-xl text-gray-500">No hay eventos disponibles</p>
            )}
        </div>

    );
};

export default EventList;