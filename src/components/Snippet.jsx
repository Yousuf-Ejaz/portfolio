import dp from "../assets/dp.jpg";
import ReactEmbedGist from "react-embed-gist";
import "./Snippet.css";
import { useState } from "react";

function Snippet({ detailsBtnHandler }) {
	const [showCodeDetails, setShowCodeDetails] = useState(false);
	return (
		<div className="flex flex-col px-8 text-[#607B96] ">
			<div className="flex flex-col">
				<div className="flex justify-between mb-2">
					<div className=" flex">
						<div className="avatar">
							<div className="w-10 rounded-full">
								<img src={dp} />
							</div>
						</div>
						<div className="flex flex-col pl-4 text-sm justify-center">
							<div className="font-semibold text-[#4D5BCE]">
								@Yousuf-Ejaz
							</div>
							<div>created a month ago</div>
						</div>
					</div>
					<button
						className="flex transition duration-200 ease-in-out hover:text-slate-400"
						onClick={() => {
							setShowCodeDetails(!showCodeDetails);
							detailsBtnHandler(!showCodeDetails);
						}}
					>
						<i className="ri-chat-smile-3-fill text-[#607B96] "></i>
						<div className="pl-1.5  ">Details</div>
					</button>
				</div>
				<div className="rounded-xl border border-[#1E2D3D] bg-[#011221] mt-1">
					<ReactEmbedGist
						gist="Yousuf-Ejaz/33d6acf965c6081fa20937b4268517d6"
						showLineNumbers={false}
					/>
				</div>
			</div>
			<div></div>
		</div>
	);
}
export default Snippet;
