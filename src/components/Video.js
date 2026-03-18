import { useEffect, useState } from "react";

function FinalVideo() {

    const [show, setShow] = useState(false);

    // animación de entrada suave
    useEffect(() => {
        setTimeout(() => setShow(true), 300);
    }, []);

    return (
        <div className={`bg-softPink p-8 md:p-10 rounded-2xl shadow-xl text-center max-w-3xl mx-auto transition-all duration-1000 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

            <h2 className="text-4xl font-bold text-roseText mb-6">
                Para ti 💖
            </h2>

            <p className="mb-6 text-lg">
                Este es solo un pequeño agradecimiento de todo lo bonito que hemos vivido juntos...
            </p>

            {/* VIDEO */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">

                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1&mute=1&rel=0&modestbranding=1"
                    title="Video especial"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />

            </div>

            {/* MENSAJE FINAL */}
            <p className="mt-6 text-sm text-gray-600 animate-pulse">
                Te AMO mucho 💕
            </p>

        </div>
    );
}

export default FinalVideo;