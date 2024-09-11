import { useState } from 'react';
import Sidebar from './Sidebar';
import NavbarLogo from '../domain/Navbar_domain/NavbarLogo';
import NavbarLinks from '../domain/Navbar_domain/NavbarLinks';
import NavbarSearch from '../domain/Navbar_domain/NavbarSearch';
import DarkModeToggle from '../domain/Navbar_domain/DarkModeToggle';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar_domain para pantallas grandes */}
            <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 text-white">
                <NavbarLinks />
                <NavbarLogo />
                <NavbarSearch />
                <DarkModeToggle toggleDarkMode={toggleDarkMode} />
            </nav>

            {/* Navbar_domain para pantallas móviles */}
            <nav className="md:hidden bg-gray-800">
                <div className="flex justify-between items-center p-4">
                    <NavbarLogo />
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
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