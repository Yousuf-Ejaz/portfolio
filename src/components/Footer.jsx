function Footer() {
	return (
		<div className="flex text-[#607B96] justify-between 2xl:h-12 h-10 border-t border-[#1E2D3D] 2xl:text-md text-sm">
			<div className="flex w-2/6 ">
				<div className="basis-2/6  border-r border-[#1E2D3D] 2xl:py-3 py-2 pl-4 ">
					find me in:
				</div>
				<div className="basis-1/12 text-center text-xl  border-r border-[#1E2D3D] 2xl:py-3 py-2 transition duration-200 ease-in-out hover:text-slate-400">
					<a href="https://twitter.com/0xYousuf">
						<i className="ri-twitter-fill"></i>
					</a>
				</div>
				<div className="basis-1/12 text-center text-xl border-r border-[#1E2D3D] 2xl:py-3 py-2 transition duration-200 ease-in-out hover:text-slate-400">
					<a href="https://www.instagram.com/yousuf__ejaz/">
						<i className="ri-instagram-fill "></i>
					</a>
				</div>
			</div>
			<div className="text-center w-44 border-l border-[#1E2D3D] 2xl:py-3 px-2 flex justify-center align-center">
				<a
					href="https://github.com/Yousuf-Ejaz"
					className="flex items-center justify-evenly transition duration-200 ease-in-out hover:text-slate-400 "
				>
					<span>@Yousuf-Ejaz&nbsp;</span>
					<i className="ri-github-fill text-xl"></i>
				</a>
				{/* </a> */}
			</div>
		</div>
	);
}
export default Footer;
