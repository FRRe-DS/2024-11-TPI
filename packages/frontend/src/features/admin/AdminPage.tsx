import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

import { FaCalendarAlt, FaCogs, FaUser, FaUsers, FaHome } from 'react-icons/fa'; // Librería de íconos

// Importar los componentes previos de gestión
import EventManagement from "./components/event/EventManagement";
import SculptureManagement from "./components/sculpture/SculptureManagement";
import SculptorManagement from "./components/sculptor/SculptorManagement";
import UserManagement from "./components/user/UserManagement";
import Home from "../home/Home.tsx";
import Events from "../events/Events.tsx";
import Sculptures from "../sculptures/Sculptures.tsx";
import Sculptors from "../sculptors/Sculptors.tsx";
import LoginPage from "../auth/pages/LoginPage.tsx";
import RegisterPage from "../auth/pages/registerpage.tsx";
import AuthPage from "../auth/pages/AuthPage.tsx";

const AdminPage: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<string>("home");  // Estado para las nuevas páginas
    const [selectedTab, setSelectedTab] = useState<string>("event");  // Estado para los módulos de gestión

    // Función para cambiar el contenido del databoard basado en la opción seleccionada
    const renderPageContent = () => {
        switch (selectedPage) {
            case "home":
                return <Home />;
            case "events":
                return <Events />;
            case "sculptures":
                return <Sculptures />;
            case "sculptors":
                return <Sculptors />;
            case "auth":
                return <AuthPage />;
            case "login":
                return <LoginPage />;
            case "register":
                return <RegisterPage />;
            default:
                return <Home />;
        }
    };

    // Función para cambiar el contenido del databoard basado en la opción seleccionada para gestión
    const renderDataboardContent = () => {
        switch (selectedTab) {
            case "event":
                return <EventManagement />;
            case "sculpture":
                return <SculptureManagement />;
            case "sculptor":
                return <SculptorManagement />;
            case "user":
                return <UserManagement />;
            default:
                return <EventManagement />;
        }
    };

    return (
        <div className="w-full h-screen flex">
            {/* Menú lateral */}
            <div className="w-1/4 bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-white flex flex-col justify-between shadow-lg">
                <div>
                    <h2 className="text-3xl font-extrabold mb-8">Admin Dashboard</h2>
                    <ul>
                        {/* Enlaces para las nuevas páginas */}
                        <li
                            onClick={() => setSelectedPage("home")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaHome className="mr-3 text-xl"/>
                            Home
                        </li>
                        <li
                            onClick={() => setSelectedPage("events")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaCalendarAlt className="mr-3 text-xl"/>
                            Events
                        </li>
                        <li
                            onClick={() => setSelectedPage("sculptures")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaCogs className="mr-3 text-xl"/>
                            Sculptures
                        </li>
                        <li
                            onClick={() => setSelectedPage("sculptors")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUsers className="mr-3 text-xl"/>
                            Sculptors
                        </li>
                        <li
                            onClick={() => setSelectedPage("auth")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUser className="mr-3 text-xl"/>
                            Auth
                        </li>
                        <li
                            onClick={() => setSelectedPage("login")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUser className="mr-3 text-xl"/>
                            Login
                        </li>
                        <li
                            onClick={() => setSelectedPage("register")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUser className="mr-3 text-xl"/>
                            Register
                        </li>

                        {/* Enlaces para los módulos de gestión */}
                        <li
                            onClick={() => setSelectedTab("event")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaCalendarAlt className="mr-3 text-xl"/>
                            Event Management
                        </li>
                        <li
                            onClick={() => setSelectedTab("sculpture")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaCogs className="mr-3 text-xl"/>
                            Sculpture Management
                        </li>
                        <li
                            onClick={() => setSelectedTab("sculptor")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUsers className="mr-3 text-xl"/>
                            Sculptor Management
                        </li>
                        <li
                            onClick={() => setSelectedTab("user")}
                            className="cursor-pointer mb-6 flex items-center text-lg hover:text-gray-300 transition-all ease-in-out"
                        >
                            <FaUser className="mr-3 text-xl"/>
                            User Management
                        </li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-300 mt-12">
                    <p>Bienal Admin Panel</p>
                </div>
            </div>

            {/* Databoard con efecto Swiper */}
            <div className="w-3/4 bg-gray-100 p-6 flex flex-col">
                <div className="mb-6 text-2xl font-semibold text-gray-800">
                    {selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)} Page
                </div>

                <Swiper
                    grabCursor={true}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="w-full h-full rounded-lg shadow-xl"
                >
                    <SwiperSlide className="flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-lg">
                        {/* Aquí se renderiza el contenido dependiendo de la página seleccionada */}
                        {renderPageContent()}
                    </SwiperSlide>

                    {/* Contenido de los módulos de gestión */}
                    <SwiperSlide className="flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg">
                        {renderDataboardContent()}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AdminPage;
