import React, {useState} from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import {INavbarLink} from "./components/interfaces/INavigationLink";
import useMediaQuery from "./hooks/useMediaQuery.ts";


interface NavigationProps {
    links: INavbarLink[],
    onLinkClick?: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({links, onLinkClick}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)"); // Detecta si es desktop

    const toggleNavbar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            {/* Mostrar solo Navbar en desktop */}
            {isDesktop && (
                <Navbar links={links} toggleNavbar={toggleNavbar} isExpanded={isExpanded} onLinkClick={onLinkClick}/>
            )}

            {/* Mostrar solo Sidebar en mobile */}
            {!isDesktop && (
                <Sidebar
                    links={links}
                    isExpanded={isExpanded}
                    closeSidebar={() => {
                        setIsExpanded((prev) => !prev)
                    }}
                    onLinkClick={onLinkClick}
                />
            )}
        </>
    );
};

export default Navigation;