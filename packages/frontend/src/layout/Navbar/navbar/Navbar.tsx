import React from "react";
import { INavbarLink } from "../components/interfaces/INavigationLink";
import { navbarStyles } from "../styles/NavbarStyles";
import NavbarToggleButton from "../components/NavbarToggleButton.tsx";
import NavbarLinks from "../components/ui/NavbarLinks.tsx";

// Props que recibe el componente Navbar
interface NavbarProps {
    links: INavbarLink[]; // Lista de enlaces para la navegación
    isExpanded: boolean; // Indica si la barra de navegación está expandida
    toggleNavbar: () => void; // Función para alternar la expansión del menú
    onLinkClick?: (index: number) => void; // Función opcional para manejar el clic en un enlace
}

const Navbar: React.FC<NavbarProps> = ({ links, isExpanded, toggleNavbar, onLinkClick }) => {
    return (
        // Contenedor principal de la barra de navegación
        <header className={`${navbarStyles.container} md:flex hidden`}>
            {/* Botón de alternar el estado de expansión */}
            <div className="flex items-center gap-2">
                <NavbarToggleButton
                    isExpanded={isExpanded}
                    toggleNavbar={toggleNavbar}
                    className="w-8 h-8" // Tamaño del botón
                />
            </div>
            {/* Contenedor del menú de navegación */}
            <nav
                className={`${navbarStyles.nav} ${
                    isExpanded ? navbarStyles.expanded : navbarStyles.collapsed
                }`}
            >
                <div className="flex justify-end gap-4 pr-4 pt-3 md:gap-20 md:pr-7">
                    {/* Componente que renderiza los enlaces de navegación */}
                    <NavbarLinks
                        links={links}
                        closeNavbar={toggleNavbar}
                        onLinkClick={onLinkClick}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
