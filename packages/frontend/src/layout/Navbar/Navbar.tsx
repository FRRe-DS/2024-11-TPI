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
        <div>
            {/* Navbar para pantallas grandes */}
            <nav className="hidden md:flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white shadow-lg">
                <NavbarLogo />
                <NavbarLinks />
                <UserMenu />
            </nav>

            {/* Navbar para pantallas móviles */}
            <nav className="md:hidden bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-md">
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
