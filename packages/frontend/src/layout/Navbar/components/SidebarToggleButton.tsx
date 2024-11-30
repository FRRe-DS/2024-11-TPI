import React from "react";
import HomeButton from "./ui/HomeButton";

interface NavbarToggleButtonProps {
    isExpanded: boolean;
    toggleNavbar: () => void;
    className?: string;
}

const SidebarToggleButton: React.FC<NavbarToggleButtonProps> = ({ isExpanded, toggleNavbar }) => {
    return (
        <div className="flex items-center gap-2 relative p-2 m-4 rounded-lg backdrop-blur-md bg-white/30 shadow-lg z-50">
            {isExpanded && <HomeButton />}
            {/* Botón para alternar el Navbar o Sidebar */}
            <button
                onClick={toggleNavbar}
                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg focus:outline-none border-0 hover:bg-white/50"
            >
                <span className="text-xl md:text-2xl font-bold text-primary">
                    {isExpanded ? "<" : ">"}
                </span>
            </button>
        </div>
    );
};

export default SidebarToggleButton;