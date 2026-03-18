import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

import foto1 from "../assets/Quiz/foto1.jpg";
import foto2 from "../assets/Quiz/foto2.jpg";
import foto3 from "../assets/Quiz/foto3.jpg";
import foto4 from "../assets/Quiz/foto4.jpg";
import foto5 from "../assets/Quiz/foto5.jpg";

function Quiz({ next }) {

    const questions = [
        {
            question: "¿Dónde nos vimos por primera vez?",
            options: ["Gimnasio", "La Rambla", "Plaza San Miguel", "Una fiesta en la Molina"],
            correct: "Plaza San Miguel",
            failImage: foto1
        },
        {
            question: "¿Cuál fue nuestra primera actividad juntos?",
            options: ["Coney Park", "Salir a comer", "Ir al gimnnasio", "Ir a un Bar"],
            correct: "Coney Park",
            failImage: foto2
        },
        {
            question: "¿Donde fue nuestro primer beso?",
            options: ["En el bar", "Afuera del gimansio", "En tu cuarto", "En el cariñosito"],
            correct: "Afuera del gimansio",
            failImage: foto3
        },
        {
            question: "¿Cuando fue nuestra primera intimidad?",
            options: ["En año nuevo", "Antes de ir a plaza vea", "Despues del bar", "En el gimnasio"],
            correct: "Despues del bar",
            failImage: foto4
        },
        {
            question: "¿Donde fue nuestra cena de navidad del 2024?",
            options: ["Valentini", "Shimaya", "El tronco", "La Cristina"],
            correct: "La Cristina",
            failImage: foto5
        }
    ];

    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [width, height] = useWindowSize();

    const nextQuestion = () => {

        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {

            setShowConfetti(true);

            setTimeout(() => {
                next();
            }, 2500);

        }

    };

    const handleAnswer = (option) => {

        const current = questions[index];

        if (option === current.correct) {

            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
                nextQuestion();
            }, 1200);

        } else {

            setShowModal(true);

        }

    };

    const q = questions[index];

    return (

        <div className="bg-softPink p-10 rounded-2xl shadow-xl text-center max-w-xl relative">

            {showConfetti && <Confetti width={width} height={height} />}

            <h2 className="text-3xl text-roseText mb-2">
                Pregunta {index + 1}
            </h2>

            <p className="text-sm text-gray-600 mb-6">
                {index + 1} de {questions.length}
            </p>

            <p className="mb-6 text-lg">
                {q.question}
            </p>

            <div className="grid grid-cols-2 gap-4">

                {q.options.map((option, i) => (

                    <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className="bg-pastelPink hover:bg-pink-300 hover:scale-105 active:scale-95 transition transform text-white py-3 rounded-xl shadow-md"
                    >
                        {option}
                    </button>

                ))}

            </div>

            {/* PROGRESS BAR */}

            <div className="w-full bg-pink-100 rounded-full h-3 mt-8">
                <div
                    className="bg-pastelPink h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
            </div>

            {/* TOAST CORRECTO */}

            {showToast && (
                <div className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
                    ✔ Correcto
                </div>
            )}

            {/* MODAL ERROR */}

            {showModal && (

                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">

                    <div className="bg-white p-6 rounded-2xl text-center max-w-sm shadow-xl">

                        <p className="text-red-500 font-semibold mb-4">
                            😝 Esa no era la respuesta
                        </p>

                        <img
                            src={q.failImage}
                            alt="Respuesta incorrecta"
                            className="rounded-xl shadow-lg mb-4"
                        />

                        <button
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className="bg-pastelPink text-white px-6 py-2 rounded-lg hover:bg-pink-300 transition"
                        >
                            Continuar
                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}

export default Quiz;