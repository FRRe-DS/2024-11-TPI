import React from "react";
import { INavbarLink } from "../interfaces/INavigationLink.ts";
import { buttonLinkStyles } from "../styles/ButtonLinkStyle.ts";

interface NavbarLinkItemProps {
    link: INavbarLink;
    icon: React.ReactNode;
    closeNavbar: () => void;
}

const NavbarLinkItem: React.FC<NavbarLinkItemProps> = ({ link, icon, closeNavbar }) => {
    return (
        <li className="w-full relative">
            {"id" in link ? (
                <a
                    href={`#${link.id}`}
                    onClick={closeNavbar}
                    className={`${buttonLinkStyles.base} ${buttonLinkStyles.hover}`}
                >
                    <span className={`${buttonLinkStyles.icon}`}>
                        {icon} {link.label}
                    </span>
                    <span className={buttonLinkStyles.blobs.orange}></span>
                    <span className={buttonLinkStyles.blobs.purple}></span>
                    <span className={buttonLinkStyles.blobs.pink}></span>
                    <span className={buttonLinkStyles.blobs.blue}></span>
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
    );
};

export default NavbarLinkItem;
