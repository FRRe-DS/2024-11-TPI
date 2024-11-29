import React from 'react';
import Footer from "../../../layout/footer/Footer.tsx";

const Maps: React.FC = () => {
    return (
        <section
            className="relative w-[100%] mx-auto h-[calc(100vh-70px)] bg-gray-100 rounded-lg shadow-md overflow-hidden mb-[80px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14164.10854776721!2d-58.98136!3d-27.437265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x891619c21777887b!2sPredio+de+las+Bienales!5e0!3m2!1ses!2sar!4v1543334233591"
                className="w-full h-full pointer-events-none"
                loading="lazy"
            ></iframe>
            <Footer />
        </section>
    );
};

export default Maps;

