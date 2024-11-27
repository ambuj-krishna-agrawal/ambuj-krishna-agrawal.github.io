import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faBriefcase, faGraduationCap, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import myEducation from "../data/education";

import "./styles/homepage.css";
import Education from "../components/homepage/education";
import myWork from "../data/work";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
								{/* <div className="resume-download">
									<p><div>Want to hire me?</div> <a href="_AMBUJ_AGRAWAL.pdf" download>Download my resume!</a> or view <span className="view-resume" onClick={() => window.open("https://drive.google.com/drive/folders/your_folder_id", "_blank")}>&#128065;</span></p>
								</div> */}
								<div className="resume-download">
								<p>Want to hire me?</p>
								<div>
									<a href="_AMBUJ_AGRAWAL.pdf" download className="download-button">
										Download my resume!
									</a>
									<button className="view-resume" onClick={() => window.open("https://drive.google.com/file/d/1e20lVTXbSp3nA8gGZtGPINgLobfQgfmv/view?usp=sharing", "_blank")}>
									<FontAwesomeIcon icon={faEye} /> View
									</button>
								</div>
							</div>

								</div>


							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.topmate}
								target="_blank"
								rel="noreferrer"
							>
							<div className="homepage-social-icon-img">
                    			<img src="/topmate.png" alt="Topmate" className="homepage-social-icon-img" />
							</div>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						{/* <div className="homepage-projects">
							<AllProjects />
						</div> */}

						<div className="homepage-after-title">
							<div className="homepage-education">
							<h2 className="education-header">Education   <FontAwesomeIcon
									icon={faGraduationCap}
									className="homepage-social-icon"
								/></h2>
								{myEducation.map((education, index) => (
									<div
										className="homepage-education"
										key={(index + 1).toString()}
									>
										<Education
											key={(index + 1).toString()}
											date={education().date}
											title={education().title}
											description={education().description}
											courses={education().courses}
											gpa={education().gpa}
											institute={education().institute}
											onlineCoursesList={education().onlineCoursesList}
										/>
									</div>
								))}
							</div>

							<div className="homepage-work">
							<h2 className="work-header">Work Experience <FontAwesomeIcon
									icon={faBriefcase}
									className="homepage-social-icon"
								/></h2>
								{myWork.map((work, index) => (
									<div
										className="homepage-work"
										key={(index + 1).toString()}
									>
										<Works
											key={(index + 1).toString()}
											date={work().date}
											title={work().title}
											description={work().description}
											internshipDescription={work().internship_description}
											internshipDate={work().internship_date}
											position={work().position}
											logo={work().logo}
										/>
									</div>
								))}
							</div>

							{/* <div className="homepage-works">
								<Works />
							</div> */}
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
