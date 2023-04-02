import Footer from "../components/Footer";
import Header from "../components/Header";

import AboutPage from "./AboutPage";
import MobileAboutPage from "./MobileAboutPage";

function CombinedAboutPage() {
	return (
		<>
			<div className="h-screen hidden lg:flex  bg-[#011627] font-body flex-col bg-right-top z-10 bg-no-repeat header">
				<Header currentTab={"aboutme"} />
				<AboutPage />
				<Footer />
			</div>
			<MobileAboutPage />
		</>
	);
}
export default CombinedAboutPage;
