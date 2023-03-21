import Project from "../components/Project";
import projects from "../data/data";
import chatspot from "../assets/projectImages/chatspot.jpg";
import shoeImg from "../assets/projectImages/shoes.jpg";
import proshop from "../assets/projectImages/proshop.jpg"
import marketplace from "../assets/projectImages/house-marketplace.jpg"
import githubfinder from "../assets/projectImages/github-finder.jpg"
import galeria from "../assets/projectImages/galeria.jpg"
import feedbackapp from "../assets/projectImages/feedbackapp.jpg"

function ProjectPage() {
	const images = [chatspot, proshop, marketplace, githubfinder, galeria, feedbackapp];
	return (
		<div className="grow flex 2xl:text-md text-sm">
			<div className="  text-[#607B96]  basis-2/12  border-r border-[#1E2D3D] h-full flex">
				<div className="grow flex flex-col">
					<div className="text-white basis-6 border-b border-b-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill px-2"></i>
						<span>tech-stack</span>
					</div>
					<div className="flex flex-col px-2 py-4">
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
			<div className="flex flex-col grow">
				<div className="basis-6 border-b border-b-[#1E2D3D] flex">
					<div className="border-r border-r-[#1E2D3D] p-2 2xl:text-md text-sm text-[#607B96] flex w-60 justify-between items-center">
						<span>
							{" "}
							<i className="ri-arrow-down-s-fill text-[#011627]"></i>{" "}
							React
						</span>
						<i className="ri-close-fill"></i>
					</div>
				</div>
				<div className="py-14 px-10 h-[620px] overflow-y-auto">
					<div className="grid grid-cols-3 gap-8">
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
	);
}
export default ProjectPage;
