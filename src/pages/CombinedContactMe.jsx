import Footer from "../components/Footer";
import Header from "../components/Header";

import ContactMe from "./ContactMe";

function CombinedContactMe() {
	return (
		<div className="h-screen  bg-[#011627] font-body flex flex-col bg-right-top z-10 bg-no-repeat header">
			<Header currentTab={"contactme"} />
			<ContactMe />
			<Footer />
		</div>
	);
}
export default CombinedContactMe;
