import React from "react";
import { INavbarLink } from "../components/interfaces/INavigationLink";
import { sidebarStyles } from "../styles/SidebarStyles";
import SidebarToggleButton from "../components/SidebarToggleButton.tsx";
import NavbarLinks from "../components/ui/NavbarLinks.tsx";

interface SidebarProps {
    isExpanded: boolean;
    closeSidebar: () => void;
    links: INavbarLink[];
    onLinkClick?: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, closeSidebar, links,onLinkClick }) => {
    return (
        <header className={`${sidebarStyles.container} md:flex`}>
            <div className="flex items-center gap-2">
                <SidebarToggleButton
                    isExpanded={isExpanded}
                    toggleNavbar={closeSidebar}
                    className="w-8 h-8"
                />
            </div>
            <nav
                className={`${sidebarStyles.nav} ${
                    isExpanded ? sidebarStyles.expanded : sidebarStyles.collapsed
                }`}
            >
                <div className="flex pl-12 md:gap-20 md:pr-20 pt-24">
                    <NavbarLinks
                        links={links}
                        closeNavbar={closeSidebar}
                        isVertical={true}
                        onLinkClick={onLinkClick}
                    />
                </div>
            </nav>

        </header>
    );
};

export default Sidebar;
