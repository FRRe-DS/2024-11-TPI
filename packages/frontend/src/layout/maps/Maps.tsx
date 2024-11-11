import React from 'react';

const Maps: React.FC = () => {
    return (
        <header className="relative overflow-hidden h-[100px] md:h-[200px] lg:h-[400px] bg-gray-800">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14164.10854776721!2d-58.98136!3d-27.437265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x891619c21777887b!2sPredio+de+las+Bienales!5e0!3m2!1ses!2sar!4v1543334233591"
                className="w-full h-full"
            ></iframe>

            {/* Título sobre la galería
            <div
                className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                HEADER
            </div>
            */}
        </header>
    );
};

export default Maps;
