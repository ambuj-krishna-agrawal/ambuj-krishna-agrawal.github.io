import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import MLProjects from "./pages/mlprojects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import LampIntro from "./components/common/lampIntro";
import CommandPalette from "./components/common/commandPalette";
import { initTimeOfDay } from "./lib/timeOfDay";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") ReactGA.initialize(TRACKING_ID);
		const stopTime = initTimeOfDay();
		return () => stopTime && stopTime();
	}, []);

	return (
		<div className="App">
			<LampIntro />
			<Router>
				<CommandPalette />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="articles" element={<Articles />} />
					<Route path="mlprojects" element={<MLProjects />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
