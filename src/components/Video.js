function FinalVideo() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6 text-center">

            <h2 className="text-3xl md:text-4xl text-white mb-6">
                Para ti 💖
            </h2>

            <div className="relative w-full max-w-md">

                {/* FONDO DIFUMINADO */}
                <div className="absolute inset-0 blur-2xl opacity-40 scale-110">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/PM554f9qxK4?autoplay=1&mute=1&loop=1&playlist=PM554f9qxK4"
                        title="background video"
                    />
                </div>

                {/* VIDEO PRINCIPAL (VERTICAL) */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/PM554f9qxK4?autoplay=1&mute=1&rel=0&modestbranding=1"
                        title="Video especial"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>

            </div>

            <p className="text-white mt-6 opacity-80">
                Te amo mucho 💕
            </p>

        </div>
    );
}

export default FinalVideo;