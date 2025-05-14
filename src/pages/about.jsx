import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	const titleText = INFO.about.title;
	const [displayed, setDisplayed] = useState("");
	const [typingDone, setTypingDone] = useState(false);

	useEffect(() => {
		let typingTimeout;
		function typeTitle(idx) {
			if (idx <= titleText.length) {
				setDisplayed(titleText.slice(0, idx));
				typingTimeout = setTimeout(() => typeTitle(idx + 1), 75);
			} else {
				setTypingDone(true);
			}
		}
		setDisplayed(""); // Clear before typing
		setTypingDone(false);
		typeTitle(1); // Start from 1 to include the first character
		return () => clearTimeout(typingTimeout);
	}, [titleText]);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="title about-title">
									{displayed}
									<span
										className={`about-cursor${typingDone ? " typing-complete" : ""}`}
										aria-hidden="true"
									></span>
								</div>
								<div className="about-subtitle">{INFO.about.description}</div>
							</div>
							<div className="about-right-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img src="about.jpg" alt="about" />
									</div>
								</div>
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;