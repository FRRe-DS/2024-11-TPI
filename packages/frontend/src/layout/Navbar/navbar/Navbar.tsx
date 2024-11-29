import React from "react";
import { INavbarLink } from "../components/interfaces/INavigationLink";
import { navbarStyles } from "../styles/NavbarStyles";
import NavbarToggleButton from "../components/NavbarToggleButton.tsx";
import NavbarLinks from "../components/ui/NavbarLinks.tsx";

interface NavbarProps {
    links: INavbarLink[];
    isExpanded: boolean;
    toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, isExpanded, toggleNavbar }) => {
    return (
        <header className={`${navbarStyles.container} md:flex hidden`}>
            <div className="flex items-center gap-2">
                <NavbarToggleButton
                    isExpanded={isExpanded}
                    toggleNavbar={toggleNavbar}
                    className="w-8 h-8"
                />
            </div>
            <nav
                className={`${navbarStyles.nav} ${
                    isExpanded ? navbarStyles.expanded : navbarStyles.collapsed
                }`}
            >
                <div className="flex justify-end gap-4 pr-4 md:gap-20 md:pr-20">
                    <NavbarLinks links={links} closeNavbar={toggleNavbar} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
