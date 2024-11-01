import { useState } from 'react';
import Sidebar from './Sidebar.tsx';
import NavbarLogo from './component/NavbarLogo.tsx';
import NavbarLinks from './component/NavbarLinks.tsx';
import NavbarSearch from './component/NavbarSearch.tsx';
import UserRoleIndicator from "./component/UserRoleIndicator.tsx";
import UserMenu from "../../features/user/components/UserMenu.tsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* component para pantallas grandes */}
            <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 text-white">
                <NavbarLinks />
                <NavbarLogo />
                <UserRoleIndicator />
                <NavbarSearch />
                <UserMenu />
            </nav>

            {/* component para pantallas móviles */}
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