import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import EventManagement from "./components/event/EventManagement";
import SculptureManagement from "./components/sculpture/SculptureManagement";
import SculptorManagement from "./components/sculptor/SculptorManagement";
import UserManagement from "./components/user/UserManagement";
import { Pagination } from "swiper/modules";

const AdminPage: React.FC = () => {
    return (
            <div className="w-full" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-full"
                >
                    <SwiperSlide className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center">
                        <EventManagement />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                        <SculptureManagement />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center">
                        <SculptorManagement />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full bg-gradient-to-b from-blue-200 to-blue-400 flex items-center justify-center">
                        <UserManagement />
                    </SwiperSlide>
                </Swiper>
            </div>
    );
};

export default AdminPage;