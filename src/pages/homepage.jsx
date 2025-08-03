import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faBriefcase, faGraduationCap, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
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
						<div className="homepage-hero">
							<div className="hero-content">
								<div className="hero-text">
									<h1 className="hero-name">
										{INFO.main.name}
									</h1>
									
									<h2 className="hero-title">
										{INFO.homepage.title}
									</h2>

									<p className="hero-description">
										I'm a Machine Learning Researcher specializing in NLP, currently working on LLM evaluation and RAG systems. With 3+ years of industry experience building scalable products.
									</p>

									<div className="hero-actions">
										<button className="hero-resume-btn" onClick={() => window.open("https://drive.google.com/file/d/1ZMTYInZLOGM-644TizNRcP4Q2T0TN_Nm/view?usp=sharing", "_blank")}>
											<FontAwesomeIcon icon={faEye} /> View Resume
										</button>
									</div>
								</div>

								<div className="hero-image">
									<div className="hero-image-wrapper">
										<img
											src="homepage.jpg"
											alt="Ambuj Krishna Agrawal"
											className="hero-img"
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

						<div className="homepage-main-content">
							<div className="homepage-work-section">
								<h2 className="work-header-main">
									<FontAwesomeIcon
										icon={faBriefcase}
										className="section-icon"
									/>
									Work Experience
								</h2>
								<div className="work-timeline">
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

							<div className="homepage-education-section">
								<h2 className="education-header-main">
									<FontAwesomeIcon
										icon={faGraduationCap}
										className="section-icon"
									/>
									Education
								</h2>
								<div className="education-grid">
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
							</div>

							<div className="homepage-highlights-preview">
								<h2 className="highlights-header-main">
									<FontAwesomeIcon
										icon={faStar}
										className="section-icon"
									/>
									Key Highlights
								</h2>
								<div className="highlights-grid">
									<div className="highlight-card">
										<div className="highlight-header">
											<div className="highlight-logo">
												<img src="netflix.svg" alt="Netflix" />
											</div>
											<div className="highlight-company">NETFLIX</div>
										</div>
										<div className="highlight-title">ML Engineering Intern</div>
										<div className="highlight-description">Built full-catalog audio retrieval system for style/emotion transfer in synthetic dubbing. Fine-tuned wav2vec2-2B with contrastive loss for multilingual embeddings</div>
										<div className="highlight-impact">
											Achieved ~13% improvement in human preference evaluations for TTS systems
										</div>
									</div>
									
									<div className="highlight-card">
										<div className="highlight-header">
											<div className="highlight-logo">
												<img src="cmu.svg" alt="CMU" />
											</div>
											<div className="highlight-company">CMU</div>
										</div>
										<div className="highlight-title">Masters in Intelligent Information Systems</div>
										<div className="highlight-description">Pursuing MIIS at Language Technologies Institute, SCS. Research Assistant under Dr. Fernando Diaz on LLM evaluation using granular human preference feedback</div>
										<div className="highlight-impact">
											3.92/4 GPA with coursework in Conversational AI, Multimodal ML, Advanced NLP
										</div>
									</div>
									
									<div className="highlight-card">
										<div className="highlight-header">
											<div className="highlight-logos-group">
												<div className="highlight-logo-small">
													<img src="cred_1.svg" alt="CRED" />
												</div>
												<div className="highlight-logo-small">
													<img src="linkedin.png" alt="LinkedIn" />
												</div>
												<div className="highlight-logo-small">
													<img src="elucidata.jpeg" alt="Elucidata" />
												</div>
											</div>
											<div className="highlight-company">INDUSTRY</div>
										</div>
										<div className="highlight-title">3+ Years Backend Engineering</div>
										<div className="highlight-description">Senior roles at CRED (bill payments platform, 5M+ users) and LinkedIn (Account Protection Team, authentication security). Built scalable microservices from scratch</div>
										<div className="highlight-impact">
											Delivered products serving millions of users with focus on security and scalability
										</div>
									</div>
								</div>
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