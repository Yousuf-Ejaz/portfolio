import Footer from "../components/Footer";
import Header from "../components/Header";

import ProjectPage from "./ProjectPage";

function CombinedProjectPage() {
	return (
		<div className="h-screen  bg-[#011627] font-body flex flex-col bg-right-top z-10 bg-no-repeat header">
			<Header currentTab={"projects"} />
			<ProjectPage />
			<Footer />
		</div>
	);
}
export default CombinedProjectPage;
