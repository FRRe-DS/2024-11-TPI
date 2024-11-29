import React from "react";
import { INavbarLink } from "../components/interfaces/INavigationLink";
import { sidebarStyles } from "../styles/SidebarStyles";
import NavbarToggleButton from "../components/NavbarToggleButton.tsx";
import NavbarLinks from "../components/ui/NavbarLinks.tsx";

interface SidebarProps {
    isExpanded: boolean;
    closeSidebar: () => void;
    links: INavbarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, closeSidebar, links }) => {
    return (
        <header className={`${sidebarStyles.container} md:flex`}>
            <div className="flex items-center gap-2">
                <NavbarToggleButton
                    isExpanded={isExpanded}
                    toggleNavbar={closeSidebar}
                    className="w-8 h-8"
                />
            </div>
            <NavbarLinks
                links={links}
                closeNavbar={closeSidebar}
                isVertical={true}
            />
        </header>
    );
};

export default Sidebar;
