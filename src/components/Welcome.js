import {useEffect, useState } from "react";

function Welcome({ next }) {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                left: Math.random() * window.innerWidth,
                size: Math.random() * 20 + 10,
                duration: Math.random() * 3 + 3
            };

            setHearts((prev) => [...prev, newHeart]);

            setTimeout(() => {
                setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
            }, 6000);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative text-center p-10 bg-softPink rounded-2xl shadow-xl fade-in max-w-xl overflow-hidden">

            {/* Corazones */}
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`
                    }}
                >
                    💕
                </span>
            ))}

            <h1 className="text-5xl font-bold text-roseText mb-6">
                Feliz Cumpleaños Ivy 💕
            </h1>

            <p className="text-lg mb-6">
                Tengo algo preparado para ti...
            </p>

            <button
                onClick={next}
                className="bg-pastelPink hover:bg-strongPink text-white px-6 py-3 rounded-xl transition transform hover:scale-105 shadow-md"
            >
                Disfrútalo 💖
            </button>

        </div>
    );
}

export default Welcome;