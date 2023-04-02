import { useState } from "react";
import BackgroundBlurs from "../assets/BackgroundBlurs.png";
import { Link } from "react-router-dom";

function MobileHomepage() {
	const [show, setShow] = useState(false);
	const clickHander = () => {
		setShow((prev) => !prev);
	};
	return (
		<div
			className="h-screen lg:hidden bg-[#011627] font-body flex flex-col bg-right-top z-10 bg-no-repeat"
			style={{ backgroundImage: `url(${!show ? BackgroundBlurs : ``})` }}
		>
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
									className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
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
				<div className="text-white flex flex-col h-56 justify-between flex-wrap grow mx-12 my-28">
					<div>
						<div className="py-1">
							<h4 className="text-md">Hi all. I am</h4>
						</div>
						<div className="py-1">
							<h1 className="2xl:text-6xl text-5xl font-semibold">
								Yousuf Ejaz&nbsp;
								<br className="block lg:hidden" />
								Ahmad
							</h1>
						</div>
						<div className="py-1">
							<h3 className="text-[#43D9AD] lg:text-[#4D5BCE] text-xl font-semibold">
								&gt; Front-end Developer{" "}
							</h3>
						</div>
					</div>
					<div className="text-md text-[#607B96] hidden lg:block">
						<div>// complete the game to continue</div>
						<div>// you can also see it on my Github page</div>
						<div>
							<span className="text-[#4D5BCE] ">const&nbsp;</span>
							<span className="text-[#43D9AD]">
								githubLink&nbsp;
							</span>
							<span className="text-white">=&nbsp;</span>
							<span className="text-[#E99287] ">
								“
								<a
									className="underline underline-offset-1 whitespace-normal"
									href="https://github.com/Yousuf-Ejaz"
								>
									https:// github.com/Yousuf-Ejaz
								</a>
								”
							</span>
						</div>
					</div>
					<div className="text-sm text-[#607B96] block lg:hidden">
						<div>// find my profile on Github:</div>

						<div>
							<span className="text-[#4D5BCE] ">const&nbsp;</span>
							<span className="text-[#43D9AD]">
								githubLink&nbsp;
							</span>
							<span className="text-white">=&nbsp;</span>
							<span className="text-[#E99287] ">
								“
								<a
									className="underline underline-offset-1 whitespace-normal"
									href="https://github.com/Yousuf-Ejaz"
								>
									https://
									<br />
									github.com/Yousuf-Ejaz
								</a>
								”
							</span>
						</div>
					</div>
				</div>
			)}

			{!show ? (
				<></>
			) : (
				<footer className="mt-auto  border-t-[#1E2D3D] border-t ">
					<div className="max-w-[85rem] mx-auto pl-4 sm:px-6 lg:px-8 flex  text-[#607B96] text-sm">
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
			)}
		</div>
	);
}
export default MobileHomepage;
