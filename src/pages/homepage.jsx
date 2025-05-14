import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faBriefcase, faGraduationCap, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Education from "../components/homepage/education";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";
import myEducation from "../data/education";
import myWork from "../data/work";

import { initScrollReveal, addElementAnimations } from "../utils/animations";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

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
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.main.name}
								</div>
								
								<div className="subtitle homepage-role">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									<span
										dangerouslySetInnerHTML={{ __html: INFO.homepage.description }}
									></span>
								</div>
								<div className="resume-download">
									<span className="hire-me-text">Want to hire me?</span>
									<button className="view-resume" onClick={() => window.open("https://drive.google.com/file/d/1jJGUFDE7CmW0_Nh4er1ffneekyPCJkQq/view?usp=sharing", "_blank")}>
										<FontAwesomeIcon icon={faEye} /> View
									</button>
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

						<div className="homepage-socials-centered">
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
						</div>

						<div className="homepage-after-title">
							<div className="homepage-education-list">
								<h2 className="education-header">
									Education <FontAwesomeIcon
										icon={faGraduationCap}
										className="homepage-social-icon"
									/>
								</h2>
								{myEducation.map((education, index) => (
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
								))}
							</div>

							<div className="homepage-work-list">
								<h2 className="work-header">
									Work Experience <FontAwesomeIcon
										icon={faBriefcase}
										className="homepage-social-icon"
									/>
								</h2>
								{myWork.map((work, index) => (
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
								))}
							</div>
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