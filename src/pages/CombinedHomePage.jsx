import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "./Homepage";
import BackgroundBlurs from "../assets/BackgroundBlurs.png";
import MobileHomepage from "./MobileHomepage";

function CombinedHomePage() {
	return (
		<>
			<div
				className="h-screen lg:flex hidden bg-[#011627] font-body  flex-col bg-right-top z-10 bg-no-repeat"
				style={{ backgroundImage: `url(${BackgroundBlurs})` }}
			>
				<Header currentTab={"hello"} />
				<Homepage />
				<Footer />
			</div>
			<MobileHomepage currentTab={"hello"} />
		</>
	);
}
export default CombinedHomePage;
