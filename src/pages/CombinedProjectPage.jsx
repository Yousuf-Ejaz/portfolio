import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileProjectPage from "./MobileProjectPage";

import ProjectPage from "./ProjectPage";

function CombinedProjectPage() {
	return (
		<>
			<div className="h-screen  bg-[#011627] font-body hidden lg:flex flex-col bg-right-top z-10 bg-no-repeat header">
				<Header currentTab={"projects"} />
				<ProjectPage />
				<Footer />
			</div>
			<MobileProjectPage />
		</>
	);
}
export default CombinedProjectPage;
