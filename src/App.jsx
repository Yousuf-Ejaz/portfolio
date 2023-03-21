import "./output.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CombinedHomePage from "./pages/CombinedHomePage";
import CombinedAboutPage from "./pages/CombinedAboutPage";
import CombinedProjectPage from "./pages/CombinedProjectPage";
import CombinedContactMe from "./pages/CombinedContactMe";

function App() {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				// transition={{ duration: 0.5 }}
				// className="flex flex-col min-h-screen"
			>
				<Router>
					<Routes>
						<Route path="/" element={<CombinedHomePage />} />
						<Route
							path="/aboutme"
							element={<CombinedAboutPage />}
						/>
						<Route
							path="/projects"
							element={<CombinedProjectPage />}
						/>
						<Route
							path="/contactme"
							element={<CombinedContactMe />}
						/>
					</Routes>
				</Router>
			</motion.div>
		</AnimatePresence>
	);
}

export default App;
