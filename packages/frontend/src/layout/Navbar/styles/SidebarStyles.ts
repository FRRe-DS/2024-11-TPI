export const sidebarStyles = {
    container: "fixed top-0 left-0 h-full z-40 transition-transform duration-300 bg-white/30 backdrop-blur-lg", // Fondo transparente con desenfoque
    expanded: "translate-x-0 w-64", // Ancho visible cuando está expandido
    collapsed: "-translate-x-full", // Fuera de la vista cuando está colapsado
    button: "absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-primary bg-white/30 backdrop-blur-lg", // Botón con fondo transparente
};
