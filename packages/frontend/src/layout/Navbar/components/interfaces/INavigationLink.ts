export interface IInternalLink {
    id: string; // Requerido para navegación interna
    label: string;
    icon?: React.ReactNode;
}

export interface IExternalLink {
    href: string; // Requerido para navegación externa
    label: string;
    icon?: React.ReactNode;
}

export type INavbarLink = IInternalLink | IExternalLink;
