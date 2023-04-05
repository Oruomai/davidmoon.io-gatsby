import React from "react"
import Image_1 from '../images/clocks.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_2 from '../images/portfolio.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_3 from '../images/classia.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_4 from '../images/carsofamerica.png' // eslint-disable-line @typescript-eslint/no-unused-vars

export const Work = () => {
    return (
        <section id="work" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20 mb-[150px] work_section">
            <div>
                <a className="mx-auto">
                    <div className="flex items-center mx-auto justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#38b2ac] to-[#0bc5ea]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 320 512"><path fill="white" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" /></svg>
                    </div>
                </a>
                <h1 className="mt-6 text-2xl bg-gradient-to-r from-[#38b2ac] to-[#0bc5ea] bg-clip-text text-transparent text-center uppercase">work</h1>
                <h2 className="text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-gray-50 mt-6">My personal projects.</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-grey"> I enjoy to apply my skills and passion to help build user-friendly and visually-appealing websites and web-based software.</p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 mt-20">
                <div className="lg:pr-10">
                    <a
                        href="https://clocks.app"
                        target="_blank"
                        aria-label="Go Home"
                        title="clocks.app"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-mint">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        clocks.app
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A clock web application built with Next.js and hosted on Netlify. The website offers high-performance and sleek,
                        minimalist designed clocks.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Next.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Typescript</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Sass</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/clocks.app"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-mint"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-[0px_15px_30px_15px_#e2e8f0] sm:h-96"
                        src={Image_1}
                        alt=""
                    />
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 mt-20">
                <div className="lg:pr-10">
                    <a
                        href="https://davidmoon.io"
                        target="_blank"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-mint">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        davidmoon.io
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A personal portfolio website built with Gatsby and hosted on Netlify. The website is designed to showcase my projects, skills, and experience as a web developer.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Gatsby</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Tailwind CSS</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/davidmoon.io-gatsby"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-mint"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-[0px_15px_30px_15px_#e2e8f0] sm:h-96"
                        src={Image_2}
                        alt=""
                    />
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 mt-20">
                <div className="lg:pr-10">
                    <a
                        href="https://classia.io"
                        target="_blank"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-mint">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        classia.io
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A full-stack web application hosted on Heroku. The website offers a comprehensive list of most highly rated literature from authors who have been deceased for at least 30 years.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Node.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Express.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">MongoDB</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/classia.io"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-mint"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-[0px_15px_30px_15px_#e2e8f0] sm:h-96"
                        src={Image_3}
                        alt=""
                    />
                </div>
            </div>


            <div className="grid gap-10 lg:grid-cols-2 mt-20">
                <div className="lg:pr-10">
                    <a
                        href="https://carsofamerica.biz"
                        target="_blank"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-mint">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        carsofamerica.biz
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A custom WordPress website that provides a comprehensive solution for customers to schedule maintenance services and rent vehicles online.                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">WordPress</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">PHP</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-[0px_15px_30px_15px_#e2e8f0] sm:h-96"
                        src={Image_4}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Work;
