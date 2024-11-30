import React from "react";
import { buttonLinkStyles } from "../styles/ButtonLinkStyle.ts";
import { FaHome, FaMapMarkedAlt, FaUsers, FaShapes, FaCalendarAlt } from "react-icons/fa";
import { NavbarLinksProps } from "../interfaces/INavbarProps.ts";
import UserMenu from "../../../../features/user/components/UserMenu.tsx"; // Importa el nuevo componente

const NavbarLinks: React.FC<NavbarLinksProps> = ({
                                                     links,
                                                     closeNavbar,
                                                     isVertical = false,
                                                     onLinkClick
                                                 }) => {
    const icons: { [key: string]: React.ReactNode } = {
        hero: <FaHome />,
        eventos: <FaCalendarAlt />,
        esculturas: <FaShapes />,
        escultores: <FaUsers />,
        maps: <FaMapMarkedAlt />,
    };

    return (
        <ul
            className={`flex ${ isVertical ? " flex-col items-center" : "items-center" } gap-4 p-4 list-none`} // Sin marcadores
        >
            {links.map((link, index) => (
                <li key={index} className="relative group">
                    {"id" in link ? (
                        <a
                            href={`#${link.id}`} // Agrega el ID al enlace
                            onClick={(e) => {
                                e.preventDefault(); // Previene el comportamiento predeterminado del enlace
                                if (onLinkClick) onLinkClick(link.index); // Llama a onLinkClick con el índice
                                if (closeNavbar) closeNavbar(); // Cierra la barra si se requiere
                            }}
                            className={`${buttonLinkStyles.base} ${buttonLinkStyles.hover}`}
                        >
                            <span className={`${buttonLinkStyles.icon}`}>
                                {icons[link.id]} {link.label}
                            </span>

                            {/* Blobs con colores y animaciones */}
                            <span
                                className={`${buttonLinkStyles.blobs.orange} group-hover:bg-[#0061ff] group-hover:scale-130`}></span>
                            <span
                                className={`${buttonLinkStyles.blobs.purple} group-hover:bg-[#ff1b6b] group-hover:scale-130`}></span>
                            <span
                                className={`${buttonLinkStyles.blobs.pink} group-hover:bg-[#bf0fff] group-hover:scale-130`}></span>
                            <span
                                className={`${buttonLinkStyles.blobs.blue} group-hover:bg-[#ff930f] group-hover:scale-130`}></span>
                        </a>
                    ) : (
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonLinkStyles.base} ${buttonLinkStyles.hover}`}
                        >
                            {link.label}
                        </a>
                    )}
                </li>
            ))}
            {/* Agrega el indicador del rol del usuario */}
            <li >
                <UserMenu />
            </li>
        </ul>
    );
};

export default NavbarLinks;

