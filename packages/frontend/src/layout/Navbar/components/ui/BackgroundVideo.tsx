import React, { useEffect, useRef } from "react";

const BackgroundVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Adelantar el video al segundo 2 y reproducir
            videoRef.current.currentTime = 2; // Avanza al segundo 2
            videoRef.current
                .play()
                .catch((error) => {
                    console.error("Error al reproducir el video:", error);
                });
        }
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <video
                ref={videoRef}
                src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"
                muted
                playsInline // Para dispositivos móviles
                className="w-full h-full object-cover filter invert"
            />
        </div>
    );
};

export default BackgroundVideo;
