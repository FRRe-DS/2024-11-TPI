import React from 'react';
// @ts-ignore
import logo from "./assets/images/Titulo.png";
// @ts-ignore
import logo2 from "./assets/images/b24-slide-principal-nuevo-logo-gobierno.png";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen">
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    src="https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/05/B24-web-slide-institucional-nuevo-c.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-start justify-center w-full h-full px-10">
                <img
                    src={logo}
                    alt="Biennale Art"
                    className="max-w-full h-auto mb-4 bg-transparent"
                />
                <img
                    src={logo2}
                    alt="Biennale Art"
                    className="max-w-full h-auto bg-transparent"
                />
            </div>
        </section>
    );
};

export default Hero;
