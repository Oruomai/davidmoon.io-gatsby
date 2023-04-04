import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 mt-56">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8 max-w-full">Sorry, page is not found.</p>
          <a rel="noopener noreferrer" href="https://davidmoon.io/" className="border text-white bg-black hover:bg-white hover:text-black hover:border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to homepage</a>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
