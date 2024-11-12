import { useState } from 'react';
import Sidebar from './Sidebar.tsx';
import NavbarLogo from './component/NavbarLogo.tsx';
import NavbarLinks from './component/NavbarLinks.tsx';
import UserMenu from "../../features/user/components/UserMenu.tsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Video de fondo */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <video
                    src="https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/05/B24-web-slide-institucional-nuevo-c.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Navbar para pantallas grandes */}
            <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 bg-opacity-60 text-white shadow-lg relative">
                <NavbarLogo />
                <NavbarLinks />
                <UserMenu />
            </nav>

            {/* Navbar para pantallas móviles */}
            <nav className="md:hidden bg-gray-800 bg-opacity-60 shadow-md relative">
                <div className="flex justify-between items-center p-4">
                    <NavbarLogo />
                    <button onClick={toggleSidebar} className="text-white focus:outline-none hover:text-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="h-8 w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Sidebar y Overlay para pantallas móviles */}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Navbar;
