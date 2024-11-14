import React from 'react';

interface SculptureCardProps {
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    tematica: string;
    id: string;
    puntuacion: number;  // Nueva propiedad para la puntuación
}

const SculptureCard: React.FC<SculptureCardProps> = ({ nombre, descripcion, fechaCreacion, tematica, id, puntuacion }) => {
    // Función para generar las estrellas llenas y vacías en base a la puntuación
    const generateStars = (score: number) => {
        const fullStars = Math.floor(score);
        const halfStar = score % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <svg key={`full-${index}`} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em]" fill="white">
                        <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
                    </svg>
                ))}
                {halfStar === 1 && (
                    <svg key="half" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em]" fill="white">
                        <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
                    </svg>
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <svg key={`empty-${index}`} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em]" fill="none" stroke="white" strokeWidth="32">
                        <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
                    </svg>
                ))}
            </>
        );
    };

    return (
        <div className="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-[#111111]"></div>

            <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                <div className="h-fit w-full">
                    <h1 className="card_heading text-[1.5em] tracking-[.2em] font-weight: 900; -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; text-shadow: 0 0 7px #fff;">
                        {id}: {nombre}
                    </h1>
                    <p className="text-[1.2em] font-weight: 900; -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; text-shadow: 0 0 7px #fff;">
                        By Hirohiko Araki in {fechaCreacion}
                    </p>
                </div>

                <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
                    <div className="w-fit h-fit flex justify-left gap-[0.5em]">
                        {generateStars(puntuacion)}  {/* Mostrar las estrellas según la puntuación */}
                    </div>

                    <div className="w-fit h-fit text-white font-nunito text-[1.2em] font-light">
                        <p>{puntuacion}/5 stars</p>
                    </div>
                </div>

                <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
                    <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
                        <p>{tematica}</p>
                    </div>
                </div>
            </div>
            <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                {descripcion}
            </p>
        </div>

    );
};

export default SculptureCard;
