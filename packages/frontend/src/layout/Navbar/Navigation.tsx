import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { INavbarLink } from "./components/interfaces/INavigationLink";
import useMediaQuery from "./hooks/useMediaQuery.ts";


interface NavigationProps {
    links: INavbarLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)"); // Detecta si es desktop

    const toggleNavbar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            {/* Mostrar solo Navbar en desktop */}
            {isDesktop && (
                <Navbar links={links} toggleNavbar={toggleNavbar} isExpanded={isExpanded} />
            )}

            {/* Mostrar solo Sidebar en mobile */}
            {!isDesktop && (
                <Sidebar
                    links={links}
                    isExpanded={isExpanded}
                    closeSidebar={() => setIsExpanded(false)}
                />
            )}
        </>
    );
};

export default Navigation;