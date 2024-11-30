import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Hero from "./components/Hero.tsx";
import EventListHome from "./components/EventListHome";
import SculptureListHome from "./components/SculptureListHome";
import Maps from "./components/Maps";
import { Pagination } from "swiper/modules";
import Navigation from "../../layout/Navbar/Navigation.tsx";
import { INavbarLink } from "../../layout/Navbar/components/interfaces/INavigationLink.ts";
import { useRef } from "react";

const navbarLinks: INavbarLink[] = [
    { id: "hero", label: "Inicio", index: 0 },
    { id: "eventos", label: "Eventos", index: 1 },
    { id: "esculturas", label: "Esculturas", index: 2 },
    { id: "maps", label: "Maps", index: 3 },
];

const Home: React.FC = () => {
    const swiperRef = useRef<any>(null);

    const handleNavigationClick = (index: number) => {
        // Desplaza el swiper al índice correspondiente
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };
    return (
        <div className="w-full" style={{height: '100vh'}}>
            <Navigation links={navbarLinks}
                        onLinkClick={(index) => handleNavigationClick(index)} />
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className="w-full h-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                    className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                    <SculptorListHome/>
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
