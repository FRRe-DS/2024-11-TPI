export const buttonLinkStyles = {
    base: "relative inline-flex items-center justify-center font-semibold text-white cursor-pointer overflow-hidden border-none rounded-full w-32 h-12 transition-all duration-300 ease-in-out",
    hover: "hover:bg-blue-700 hover:scale-105 hover:shadow-md", // Cambios en hover (fondo, escala, sombra)
    icon: "z-10 flex items-center justify-center gap-2", // Íconos y texto alineados
    text: "absolute inset-0 flex items-center justify-center text-lg bg-[rgba(255,255,255,0.15)] rounded-full z-10 backdrop-blur-lg",
    blobs: {
        orange: "blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-all duration-300 ease-in-out group-hover:bg-[#0061ff] group-hover:scale-[1.3]",
        purple: "blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-all duration-300 ease-in-out group-hover:bg-[#ff1b6b] group-hover:scale-[1.3]",
        pink: "blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-all duration-300 ease-in-out group-hover:bg-[#bf0fff] group-hover:scale-[1.3]",
        blue: "blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-all duration-300 ease-in-out group-hover:bg-[#ff930f] group-hover:scale-[1.3]",
    },
};
