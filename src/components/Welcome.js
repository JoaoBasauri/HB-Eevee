function Welcome({ next }) {
    return (
        <div className="text-center p-10 gb-softpink rounded-2xl shadow-xl">
            <h1 className="text-5xl font-bond text-roseText mb-6">
                Feliz Cumpleaños Ivy
            </h1>

            <p className="text-lg mb-6">
                Tengo algo preparado para ti....
            </p>

            <button
                onClick={next}
                className="bg-pastelPink hover:bg-pink-300 text-white px-6 py-3 rounded-xl transition"
            >
                Disfrutalo
            </button>

        </div>
    )

}

export default Welcome