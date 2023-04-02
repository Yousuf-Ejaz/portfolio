import { useState } from "react";
import BackgroundBlurs from "../assets/BackgroundBlurs.png";
import SnakeGame from "../components/SnakeGame";

function Homepage() {
	const [foodLeft, setFoodLeft] = useState(0);

	const handleScore = (score) => {
		setFoodLeft(score);
	};
	return (
		<div className="grow 2xl:w-4/6 w-9/12 mx-auto flex justify-between content-center lg:content-around flex-wrap 2xl:text-md text-sm mt-4 lg:mt-0">
			<div className="text-white flex flex-col h-56 justify-between flex-wrap grow">
				<div>
					<div className="py-1">
						<h4 className="text-sm">Hi all. I am</h4>
					</div>
					<div className="py-1">
						<h1 className="2xl:text-5xl text-4xl font-semibold">
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
				<div className="text-sm text-[#607B96] hidden lg:block">
					<div>// complete the game to continue</div>
					<div>// you can also see it on my Github page</div>
					<div>
						<span className="text-[#4D5BCE] ">const&nbsp;</span>
						<span className="text-[#43D9AD]">githubLink&nbsp;</span>
						<span className="text-white">=&nbsp;</span>
						<span className="text-[#E99287] ">
							“
							<span className="underline underline-offset-1 whitespace-normal">
								https://github.com/example/url
							</span>
							”
						</span>
					</div>
				</div>
				<div className="text-xs text-[#607B96] block lg:hidden">
					<div>// find my profile on Github:</div>

					<div>
						<span className="text-[#4D5BCE] ">const&nbsp;</span>
						<span className="text-[#43D9AD]">githubLink&nbsp;</span>
						<span className="text-white">=&nbsp;</span>
						<span className="text-[#E99287] ">
							“
							<span className="underline underline-offset-1 whitespace-normal">
								https://
								<br />
								github.com/example/url
							</span>
							”
						</span>
					</div>
				</div>
			</div>
			<div className="lg:block hidden">
				<div className=" shadow-lg shadow-[#011627] rounded-md p-5 gap-4 flex bg-gradient-to-br from-[#3C9D93] to-transparent">
					<div className="rounded-md p-2 bg-[#011627] h-[320px] w-[220px] ">
						<SnakeGame onScore={handleScore} />
					</div>
					<div className="flex flex-col  text-white text-sm   ">
						<div className="bg-[#011627] w-48 py-4 px-3 rounded-md bg-opacity-30 ">
							<div>// use keyboard </div>
							<div>// arrows to play</div>
							<div className="grid grid-rows-2 grid-flow-col gap-2 mt-5 ">
								<div></div>
								<div className="bg-[#01080E] rounded-lg text-white text-lg py-1 text-center h-8 ">
									<i className="ri-arrow-left-s-fill"></i>
								</div>
								<div className="bg-[#01080E] rounded-lg text-white text-lg py-1 text-center  h-8">
									<i className="ri-arrow-up-s-fill"></i>
								</div>
								<div className="bg-[#01080E] rounded-lg text-white text-lg py-1 text-center h-8 ">
									<i className="ri-arrow-down-s-fill"></i>
								</div>
								<div></div>
								<div className="bg-[#01080E] rounded-lg text-white text-lg py-1 text-center h-8 ">
									<i className="ri-arrow-right-s-fill"></i>
								</div>
							</div>
						</div>
						<div className="ml-4">
							<div className="mt-4">// food left</div>
							<div className="grid grid-rows-2 grid-flow-col gap-4 my-4 w-10/12">
								{Array.from(Array(10).keys()).map((_, i) => {
									if (i <= 9 - foodLeft)
										return (
											<div
												className="w-2.5 h-2.5 bg-[#43D9AD] rounded-full"
												key={i}
											></div>
										);
									else {
										return (
											<div
												className="w-2.5 h-2.5 bg-[#43D9AD] opacity-30 rounded-full"
												key={i}
											></div>
										);
									}
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Homepage;
