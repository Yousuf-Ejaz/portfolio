import { useState } from "react";
import Bio from "../components/Bio";
import Education from "../components/Education";
import Interests from "../components/Interests";
import Snippet from "../components/Snippet";
import { useEffect } from "react";
import CodeDetails from "../components/CodeDetails";

function AboutPage() {
	const [showBio, setShowBio] = useState(true);
	const [showInterests, setShowInterests] = useState(false);
	const [showEducation, setShowEducation] = useState(false);
	const [showCodeDetails, setShowCodeDetails] = useState(false);
	const [linesCount, setLinesCount] = useState(26);
	useEffect(() => {
		if (showBio) setLinesCount(26);
		else if (showInterests) setLinesCount(22);
		else setLinesCount(12);
	}, [showBio, showEducation, showInterests]);
	const detailsBtnHandler = (val) => {
		setShowCodeDetails(val);
	};
	return (
		<div className="grow flex 2xl:text-md text-sm ">
			<div className="  text-[#607B96]  basis-2/12  border-r border-[#1E2D3D] h-full flex">
				<div className="basis-1/6  border-r border-[#1E2D3D] flex flex-col gap-3 p-3">
					<i className="ri-terminal-box-fill text-xl opacity-40"></i>
					<i className="ri-user-4-fill text-xl mt-1"></i>
					<i className="ri-gamepad-fill text-xl mt-1 opacity-40"></i>
				</div>
				<div className="grow flex flex-col">
					<div className="text-white basis-6 border-b border-b-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill px-2"></i>
						<span>personal-info</span>
					</div>
					<div className="flex flex-col px-2 py-4">
						<button
							className="flex items-center"
							onClick={() => {
								setShowBio(true);
								setShowEducation(false);
								setShowInterests(false);
							}}
						>
							<i className="ri-arrow-right-s-line pl-2 text-lg"></i>{" "}
							<i className="ri-folder-3-fill pr-2 text-lg text-[#E99287]"></i>
							<span
								className={`${
									showBio && `text-white transition duration-200 ease-in-out hover:text-white`
								} transition duration-200 ease-in-out hover:text-slate-400`}
							>
								bio
							</span>{" "}
						</button>
						<button
							className="flex items-center"
							onClick={() => {
								setShowBio(false);
								setShowEducation(false);
								setShowInterests(true);
							}}
						>
							<i className="ri-arrow-right-s-line pl-2 text-lg"></i>{" "}
							<i className="ri-folder-3-fill pr-2 text-lg text-[#43D9AD]"></i>
							<span
								className={`${
									showInterests &&
									`text-white transition duration-200 ease-in-out hover:text-white`
								} transition duration-200 ease-in-out hover:text-slate-400`}
							>
								interests
							</span>{" "}
						</button>
						<button
							className="flex items-center"
							onClick={() => {
								setShowBio(false);
								setShowEducation(true);
								setShowInterests(false);
							}}
						>
							<i className="ri-arrow-right-s-line pl-2 text-lg"></i>{" "}
							<i className="ri-folder-3-fill pr-2 text-lg text-[#4D5BCE]"></i>
							<span
								className={`${
									showEducation &&
									`text-white transition duration-200 ease-in-out hover:text-white`
								} transition duration-200 ease-in-out hover:text-slate-400`}
							>
								education
							</span>{" "}
						</button>
						{/* <div className="flex items-center">
							<i className="ri-arrow-down-s-line pl-2 text-lg text-[#011627] "></i>{" "}
							<i className="ri-markdown-fill pr-2 text-lg "></i>
							<span>high-school</span>{" "}
						</div>
						<div className="flex items-center">
							<i className="ri-arrow-down-s-line pl-2 text-lg text-[#011627]"></i>{" "}
							<i className="ri-markdown-fill pr-2 text-lg "></i>
							<span>university</span>{" "}
						</div> */}
					</div>
					<div className="text-white basis-6 border-y border-y-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill px-2"></i>
						<span>contacts</span>
					</div>
					<div className="flex flex-col px-4 py-4">
						<div className="flex items-center">
							<i className="ri-mail-fill pr-2 text-lg "></i>

							<span className="text-xs transition duration-200 ease-in-out hover:text-slate-400 cursor-pointer">
								ejazahmadyousuf2@gmail
							</span>
						</div>
						<div className="flex items-center">
							<i className="ri-phone-fill pr-2 text-lg "></i>
							<span className="text-xs transition duration-200 ease-in-out hover:text-slate-400 cursor-pointer">
								+91xxxxxxxxxx
							</span>{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="flex grow">
				<div className="basis-5/12 border-r border-r-[#1E2D3D] flex flex-col">
					<div className="basis-6 border-b border-b-[#1E2D3D] flex">
						<div className="border-r border-r-[#1E2D3D] p-2 2xl:text-md text-sm text-[#607B96] flex w-60 justify-between items-center">
							<span>
								{" "}
								<i className="ri-arrow-down-s-fill text-[#011627]"></i>{" "}
								personal-info{" "}
							</span>
							<i className="ri-close-fill"></i>
						</div>
					</div>
					<div className="grow flex">
						<div className="basis-1/12 py-4">
							{Array.from(Array(linesCount).keys()).map(
								(_, i) => (
									<div
										className="px-4  text-center text-[#607B96]"
										key={i}
									>
										{i + 1}
									</div>
								)
							)}
						</div>
						{showBio && <Bio />}
						{showInterests && <Interests />}
						{showEducation && <Education />}
					</div>
				</div>
				<div className="basis-7/12 flex flex-col">
					<div className="basis-6 border-b border-b-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill text-[#011627]"></i>
					</div>
					<div className="py-4 text-[#607B96] pl-8">
						// Code snippet showcase:
					</div>
					<div className="flex flex-col gap-6">
						<Snippet detailsBtnHandler={detailsBtnHandler} />
						{showCodeDetails && <CodeDetails />}
					</div>
				</div>
			</div>
		</div>
	);
}
export default AboutPage;
