import { INavbarLink } from "./INavigationLink.ts";

export interface NavbarLinksProps {
    links: INavbarLink[];
    closeNavbar: () => void;
    isVertical?: boolean;
    toggleNavbar?: () => void; // Opcional
    onLinkClick?: (index: number) => void; //Opcional
}
