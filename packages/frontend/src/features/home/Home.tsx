import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import Hero from "./components/Hero.tsx";
import EventListHome from "./components/EventListHome";
import SculptureListHome from "./components/SculptureListHome";
//import SculptorListHome from "./components/SculptorListHome";
import Maps from "./components/Maps";
import { Pagination } from "swiper/modules";

const Home: React.FC = () => {
    return (
        <div className="w-full" style={{height: '100vh'}}>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className="w-full h-full"
            >
                <SwiperSlide
                    className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center">
                    <Hero/>
                </SwiperSlide>
                <SwiperSlide
                    className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                    <EventListHome/>
                </SwiperSlide>
                <SwiperSlide
                    className="w-full h-full bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center">
                    <SculptureListHome/>
                </SwiperSlide>
                <SwiperSlide
                    className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center">
                    <Maps/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Home;
