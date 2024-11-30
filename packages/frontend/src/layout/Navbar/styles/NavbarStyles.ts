export const navbarStyles = {
    container: "fixed top-4 left-4 right-4 z-50 rounded-lg", // Sin fondo
    nav: "absolute top-0 left-0 h-16 shadow-lg transition-transform duration-300 rounded-lg",
    expanded: "w-full h-28 translate-y-0 pb-4 ", // Más alto y ancho cuando está expandido
    collapsed: "-translate-x-full ", // Tamaño reducido cuando está colapsado
    button: "absolute top-4 left-4 w-10 h-10 overflow-hidden rounded-full flex items-center justify-center text-primary shadow-lg z-50",
};
