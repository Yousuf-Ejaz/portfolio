import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "./Homepage";
import BackgroundBlurs from "../assets/BackgroundBlurs.png";

function CombinedHomePage() {
	return (
		<div
			className="h-screen  bg-[#011627] font-body flex flex-col bg-right-top z-10 bg-no-repeat"
			style={{ backgroundImage: `url(${BackgroundBlurs})` }}
		>
			<Header currentTab={"hello"} />
			<Homepage />
			<Footer />
		</div>
	);
}
export default CombinedHomePage;
