import React from "react"

function Landing() {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mt-60 mb-60 landing_section">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
                <h1>
                    <span className="text-9xl font-black leading-none sm:text-9xl heading-line heading-line-first">
                        <span className="text-9xl font-black leading-none sm:text-9xl heading-line-gradient">I am</span>
                    </span>
                    <span className="text-9xl font-black leading-none sm:text-9xl heading-line heading-line-second">
                        <span className="text-9xl font-black leading-none sm:text-9xl heading-line-gradient">David</span>
                    </span>
                    <span className="text-9xl font-black leading-none sm:text-9xl heading-line heading-line-third">
                        <span className="text-9xl font-black leading-none sm:text-9xl heading-line-gradient">Moon</span>
                    </span>
                </h1>
                <p className="px-8 mt-8 mb-12 text-2xl text-grey leading-relaxed landing_paragraph">A recent Electrical Engineering graduate with a minor in Mathematics.
                    Seeking a full-time position.</p>
                <div className="flex flex-wrap justify-center">
                    <a href="https://www.linkedin.com/in/davmoon/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 m-2 text-lg bolder border font-semibold rounded bg-black text-white w-48 linkedin_button">LinkedIn</a>
                    <a href="https://github.com/oruomai/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 m-2 text-lg bolder border font-semibold rounded bg-white text-black w-48 github_button">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Landing