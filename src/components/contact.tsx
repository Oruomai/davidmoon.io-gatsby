import React from "react"

export const Contact = () => {
    return (
        <div id="contact" className="text-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-20 mt-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <a className="mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ecc94b] to-[#48bb78]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="18px" height="18px"><path fill="white" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" /></svg>
                        </div>
                    </a>
                    <h1 className="mt-6 text-2xl bg-gradient-to-r from-[#ecc94b] to-[#48bb78] bg-clip-text text-transparent text-center uppercase">contact</h1>
                    <div className="mt-6 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-gray-50">
                            Get In Touch
                        </h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-grey">
                            Greeting! Thank you for visiting my personal portfolio website. If you have any questions or comments, I'd love to hear from you.
                        </p>
                    </div>
                    <div>
                        <button onClick={() => window.open('mailto:hrmoon99@gmail.com', '_blank')} className="px-8 py-3 m-2 text-lg bolder border font-semibold rounded bg-black text-white w-48 contact_button">Say Hello</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact