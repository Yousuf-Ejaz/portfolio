import { Link } from "react-router-dom";

function Header({ currentTab }) {
	console.log(currentTab);
	return (
		<div className="flex 2xl:text-md text-sm text-[#607B96] justify-between lg:h-10 h-12 2xl:h-12  border-b border-[#1E2D3D]">
			<div className="flex w-1/2 ">
				<Link
					className="lg:basis-2/6  lg:border-r border-[#1E2D3D] 2xl:py-3 py-2.5 pl-4 ml-[0.5px] transition duration-200 ease-in-out hover:text-slate-400"
					to="/"
				>
					yousuf-ejaz-ahmad
				</Link>
				<Link
					className={`basis-1/6 text-center  border-r border-[#1E2D3D] 2xl:py-3 py-2.5 transition duration-200 ease-in-out hover:text-slate-400 hidden lg:block ${
						currentTab === "hello"
							? `border-b-4 border-b-[#FEA55F] text-white transition duration-200 ease-in-out hover:text-white `
							: ``
					}`}
					to="/"
				>
					_hello
				</Link>
				<Link
					className={`basis-1/6 text-center  border-r border-[#1E2D3D] 2xl:py-3 py-2.5 transition duration-200 ease-in-out hidden lg:block hover:text-slate-400 ${
						currentTab === "aboutme"
							? `border-b-4 border-b-[#FEA55F] text-white transition duration-200 ease-in-out hover:text-white`
							: ``
					} `}
					to="/aboutme"
				>
					_about-me
				</Link>
				<Link
					className={`basis-1/6 text-center border-r border-[#1E2D3D]  2xl:py-3 py-2.5 transition duration-200 ease-in-out hidden lg:block hover:text-slate-400 ${
						currentTab === "projects"
							? `border-b-4 border-b-[#FEA55F] text-white transition duration-200 ease-in-out hover:text-white`
							: ``
					} `}
					to="/projects"
				>
					_projects
				</Link>
			</div>
			<Link
				className={`text-center w-40 border-l border-[#1E2D3D] 2xl:py-3 py-2.5 transition duration-200 ease-in-out hidden lg:block hover:text-slate-400 ${
					currentTab === "contactme"
						? `border-b-4 border-b-[#FEA55F] text-white transition duration-200 ease-in-out hover:text-white`
						: ``
				}`}
				to="/contactme"
			>
				_contact-me
			</Link>
		</div>
	);
}
export default Header;
