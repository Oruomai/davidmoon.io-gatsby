import React from "react"
import Image_1 from '../images/clocks.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_2 from '../images/davidmoon.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_3 from '../images/classia.png' // eslint-disable-line @typescript-eslint/no-unused-vars
import Image_4 from '../images/carsofamerica.png' // eslint-disable-line @typescript-eslint/no-unused-vars

export const Work = () => {
    return (
        <div id="work" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-[200px]">
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-gray-50">My personal projects.</h2>
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        clocks.app
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A clock web application built with Next.js and hosted on Netlify. The website offers high performance and a sleek,
                        minimalist design clocks.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Next.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Typescript</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Sass</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/clocks.app"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        davidmoon.io
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A personal portfolio website built with Gatsby and hosted on Netlify. The web page was designed to showcase my projects, skills, and experience as a web developer.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Gatsby</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Tailwind CSS</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/davidmoon.io-gatsby"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        classia.io
                    </h5>
                    <p className="mb-6 text-gray-900">
                        A full-stack web application on Heroku. The website offers a comprehensive list of most highly rated literature from authors who have been deceased for at least 30 years.
                    </p>
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Node.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Express.js</kbd>
                    <kbd className="ml-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">MongoDB</kbd>
                    <hr className="mt-5 mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Oruomai/classia.io"
                            target="_blank"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
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
        </div>
    );
};

export default Work;
