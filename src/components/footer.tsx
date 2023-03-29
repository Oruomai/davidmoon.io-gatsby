import React from "react"

function Footer() {
    return (
        <footer className=" bg-white rounded-lg shadow m-4 dark:bg-gray-800 absolute inset-x-0 bottom-0">
            <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://github.com/Oruomai/davidmoon.io-gatsby" className="hover:underline">Designed & Built by David Moon</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer