import { useState } from "react";

import { Link } from "react-router-dom";
import Project from "../components/Project";
import projects from "../data/data";
import chatspot from "../assets/projectImages/chatspot.jpg";

import proshop from "../assets/projectImages/proshop.jpg";
import marketplace from "../assets/projectImages/house-marketplace.jpg";
import githubfinder from "../assets/projectImages/github-finder.jpg";
import galeria from "../assets/projectImages/galeria.jpg";
import feedbackapp from "../assets/projectImages/feedbackapp.jpg";

function MobileProjectPage() {
	const images = [
		chatspot,
		proshop,
		marketplace,
		githubfinder,
		galeria,
		feedbackapp,
	];

	const [show, setShow] = useState(false);
	const [showpi, setShowpi] = useState(false);
	const clickHander = () => {
		setShow((prev) => !prev);
	};
	const piBtnHandler = () => {
		setShowpi((prev) => !prev);
	};
	return (
		<div className="h-screen lg:hidden bg-[#011627] font-body flex flex-col bg-right-top z-10 bg-no-repeat text-[#607B96]">
			<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-[#607B96] border-[#1E2D3D] border-b lg:h-10 h-12 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
				<nav
					className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex items-center justify-between">
						<Link
							className="flex-none ont-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 pr-8"
							to="/"
							aria-label="yousuf-ejaz-ahmad"
						>
							yousuf-ejaz-ahmad
						</Link>
						<div className="sm:hidden">
							<button
								type="button"
								className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 font-medium bg-[#011627] text-[#607B96] shadow-sm align-middle hover:text-white focus:outline-none transition-all text-lg dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
								data-hs-collapse="#navbar-collapse-with-animation"
								aria-controls="navbar-collapse-with-animation"
								aria-label="Toggle navigation"
								onClick={clickHander}
							>
								<svg
									className="hs-collapse-open:hidden w-4 h-4"
									width={16}
									height={16}
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
									/>
								</svg>
								<svg
									className="hs-collapse-open:block hidden w-4 h-4"
									width={16}
									height={16}
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</button>
						</div>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
					>
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
							<Link
								className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 "
								to="/"
								aria-current="page"
							>
								_hello
							</Link>
							<Link
								className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
								to="/aboutme"
							>
								_about-me
							</Link>
							<Link
								className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
								to="/projects"
							>
								_projects
							</Link>

							<div className="flex items-center gap-x-2 sm:ml-auto">
								<Link
									className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-blue-500"
									to="/contactme"
								>
									_contact-me
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
			{show ? (
				<></>
			) : (
				<div className="flex flex-col">
					<div className="text-white text-xs py-3 px-5 border-b-[#1E2D3D] border-b">
						_projects
					</div>
					<div>
						<div className="hs-accordion-group">
							<div
								className="hs-accordion "
								id="hs-basic-with-arrow-heading-one"
							>
								<button
									className="hs-accordion-toggle  group px-5 text-sm text-white py-1 inline-flex items-center gap-x-3 w-full text-left  transition hover:text-gray-500  dark:text-gray-200 dark:hover:text-gray-400 bg-[#1E2D3D] content-center "
									aria-controls="hs-basic-with-arrow-collapse-one"
									onClick={piBtnHandler}
								>
									<i
										className="ri-arrow-right-s-fill hs-accordion-active:hidden block
									w-3 h-3 text-white group-hover:text-gray-500
									dark:text-gray-400 "
									></i>
									<i
										className="ri-arrow-down-s-fill hs-accordion-active:block hidden
									w-3 h-3 text-white group-hover:text-gray-500
									dark:text-gray-400 "
									></i>
									tech-stack
								</button>

								<div
									id="hs-basic-with-arrow-collapse-one"
									className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 overflow-y-auto md:max-h-full h-[102px]"
									aria-labelledby="hs-basic-with-arrow-heading-one"
									style={{ height: 0 }}
								>
									<div className="flex flex-col px-2 py-2 text-xs">
										<div className="flex items-center">
											<i className="ri-reactjs-fill text-lg px-2"></i>
											<span className="">React</span>{" "}
										</div>
										<div className="flex items-center">
											<i className="ri-html5-fill text-lg px-2"></i>
											<span>HTML</span>{" "}
										</div>
										<div className="flex items-center">
											<i className="ri-css3-fill text-lg px-2"></i>
											<span>CSS</span>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="text-xs px-5 pt-6">
							<span className="text-white ">// projects</span>
						</div>
						<div className="px-5 pt-5">
							<div className="pb-14 px-10 h-[500px] md:h-[620px] overflow-y-auto">
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
									{projects.map((project) => (
										<Project
											project={project}
											key={project.id}
											image={images[project.id - 1]}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<footer className="mt-auto  border-t-[#1E2D3D] border-t ">
				<div className="max-w-[85rem] mx-auto pl-4 sm:pl-6 lg:pl-8 flex  text-[#607B96] text-sm">
					<div className="grow py-3">find me in:</div>
					<div className="px-4 border-l-[#1E2D3D] border-l py-3  flex">
						<a href="https://twitter.com/0xYousuf">
							<i className="ri-twitter-fill text-xl"></i>
						</a>
					</div>
					<div className="px-4 border-l-[#1E2D3D] border-l py-3 flex">
						<a href="https://www.instagram.com/yousuf__ejaz/">
							<i className="ri-instagram-fill text-xl"></i>
						</a>
					</div>
					<div className="px-4 border-l-[#1E2D3D] border-l py-3 flex">
						<a href="https://github.com/Yousuf-Ejaz">
							<i className="ri-github-fill text-xl"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
export default MobileProjectPage;
