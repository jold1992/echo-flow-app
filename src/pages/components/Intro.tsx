import AuthShowCase from "./AuthShowCase";

const Intro = () => {

    return (
        <>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Echo <span className="text-[hsl(280,100%,70%)]">Flow</span> App
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                <div
                    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                >
                    <h3 className="text-2xl font-bold">Your music 🎵</h3>
                    <div className="text-lg">
                        Discover your song of the day based on your mood.
                    </div>
                </div>
                <div
                    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                >
                    <h3 className="text-2xl font-bold">Taste it! 😋</h3>
                    <div className="text-lg">
                        Answer a few questions and get the suggestion of the day.
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-2xl text-white">
                    Log in to save the song history by date.
                </p>
                <AuthShowCase />
            </div>
        </>
    )


}


export default Intro;