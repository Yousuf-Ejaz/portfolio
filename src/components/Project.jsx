import shoeImg from "../assets/projectImages/shoes.jpg";
function Project({ project, image }) {
	return (
		<div className="flex flex-col gap-2 justify-center">
			<div className="basis-2 flex  text-center">
				<span className="text-[#4D5BCE] font-semibold ">
					Project {project.id}&nbsp;
				</span>
				<span className="text-md text-[#607B96]">
					// {project.name}
				</span>
			</div>
			<div className="flex justify-center">
				<div className="card w-96 max-h-64 flex flex-col bg-base-100">
					<figure className="basis-1/2 border-[#1E2D3D] border  bg-[#4D5BCE]">
						<img src={image} alt="Shoes" className="opacity-70" />
					</figure>
					<div className="card-body basis-1/2 border-[#1E2D3D] border bg-[#011221] text-[#607B96] rounded-bl-xl rounded-br-xl gap-8 p-4">
						<p className="text-sm">{project.description}</p>
						<div className="card-actions justify-between flex ">
							<a href={project.link}>
								<button className="text-sm rounded-lg bg-[#1C2B3A] text-white py-3 text-center inline-block px-3 w-32">
									view-project
								</button>
							</a>
							<button className="text-sm rounded-lg bg-[#1C2B3A] text-white py-3 text-center inline-block px-3 w-32">
								view-live
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Project;
