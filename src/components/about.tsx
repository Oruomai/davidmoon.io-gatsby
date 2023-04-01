import React from "react"
import Img_graduation from '../images/graduation.jpg' // eslint-disable-line @typescript-eslint/no-unused-vars

function About() {
	return (
		<section id="about" className="dark:bg-gray-800 dark:text-gray-100 mt-20">
			<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
				<div>
					<a className="mx-auto">
						<div className="flex items-center mx-auto justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ed8936] to-[#ed64a6]">
							<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 512"><path fill="white" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" /></svg>
						</div>
					</a>
					<h1 className="mt-6 text-2xl bg-gradient-to-r from-[#ed8936] to-[#ed64a6] bg-clip-text text-transparent text-center uppercase">about</h1>
					<h2 className="mt-6 text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-gray-50">Howdy, I'm David.</h2>
					<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-grey">I am a recent graduate of Texas A&N University, where I majored in Electrical Engineering. During my time in college, I developed a passion for designing and developing web software.</p>
				</div>
				<div>
					<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
						<div className="lg:col-start-2">
							<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">"Hello, World!"</h3>
							<p className="mt-3 text-lg font-sans text-grey">I am now seeking opportunities to utilize my skills and continue growing in the field of web development.</p>
							<div className="mt-12 space-y-12">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">I am a quick learner.</h4>
										<p className="mt-2 text-grey">I am a quick learner with a good sense of design. I have a solid understanding of web development technologies and always strive to improve my abilities.</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">I am self-motivated.</h4>
										<p className="mt-2 text-grey">I am a driven, creative, and self-motivated individual who is always seeking new opportunities to challenge myself and learn new skills.</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">I am curious.</h4>
										<p className="mt-2 text-grey">In my free time, I stay up to date on the latest web development trends and experiment with new technologies.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
							<img src={Img_graduation} width={361} height={481} alt="" className="mx-auto rounded-lg shadow-[15px_15px_75px_15px_#e2e8f0] dark:bg-gray-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About