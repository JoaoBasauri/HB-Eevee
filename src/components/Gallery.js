import { useState } from "react";

function importAll(r) {
    return r.keys().map(r);
}

function Gallery({ next }) {

    const images = importAll(
        require.context("../assets/Gallery/", false, /\.(png|jpe?g|webp)$/)
    );

    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-softPink p-8 md:p-10 rounded-2xl shadow-xl text-center max-w-6xl fade-in">

            <h2 className="text-4xl font-bold text-roseText mb-4">
                Nuestros momentos 💕
            </h2>

            <p className="mb-8 text-lg">
                Cada recuerdo contigo es especial...
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Recuerdo ${i + 1}`}
                        loading="lazy"
                        onClick={() => setSelected(img)}
                        className="rounded-xl shadow-md hover:scale-105 transition transform cursor-pointer object-cover w-full h-32 md:h-40"
                    />
                ))}

            </div>

            {/* BOTÓN */}
            <button
                onClick={next}
                className="mt-8 bg-pastelPink hover:bg-strongPink text-white px-6 py-3 rounded-xl transition transform hover:scale-105 shadow-md"
            >
                Ver sorpresa final 💖
            </button>

            {/* LIGHTBOX */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 fade-in"
                    onClick={() => setSelected(null)}
                >
                    <img
                        src={selected}
                        alt="Imagen ampliada"
                        className="max-h-[85%] max-w-[90%] rounded-xl shadow-2xl"
                    />
                </div>
            )}

        </div>
    );
}

export default Gallery;