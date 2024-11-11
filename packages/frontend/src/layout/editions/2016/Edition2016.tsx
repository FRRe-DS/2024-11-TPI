import React from 'react';

const Edition2016: React.FC = () => {
    return (
        <section className="fondoeditions relative w-full h-screen">
            {/* Background Image */}
            <div className="editions absolute inset-0 overflow-hidden">
                <img
                    src="https://www.bienaldelchaco.org/2016/wp-content/uploads/2015/03/fondobienal2016.jpg"
                    className="w-full h-full object-cover"
                    alt="No hay nada"/>
            </div>

            {/* Overlay Text */}
            <div className="title-editions absolute inset-0 flex justify-end mr-50 text-white z-100"
                 style={{transform: 'translateY(50px) translateX(-400px)'}}>
                <h1 className="text-4xl font-bold">Bienal del Chaco 2014</h1>
            </div>
        </section>

    );
};

export default Edition2016;