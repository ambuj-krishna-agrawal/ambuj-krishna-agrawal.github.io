import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import { PROFILE, ABOUT, seoFor } from "../lib/content";

import "./styles/about.css";

const About = () => {
	useEffect(() => { window.scrollTo(0, 0); }, []);
	const s = seoFor("about");

	return (
		<>
			<Helmet>
				<title>{s.title}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper page-inner about">
					<div className="about-grid">
						<div>
							<h1 className="serif about-greeting">
								{ABOUT.greeting}<span className="hero-cursor">.</span>
							</h1>
							<ul className="about-roles">
								{ABOUT.navRoles.map((r) => (
									<li key={r} className="about-role">{r}</li>
								))}
							</ul>

							{ABOUT.sections?.length > 0 && (
								<div className="about-sections">
									{ABOUT.sections.map((sec) => (
										<section key={sec.title} className="about-section">
											<h2 className="serif about-section-title">{sec.title}</h2>
											<p>{sec.body}</p>
										</section>
									))}
								</div>
							)}

							<div className="about-contact-card">
								<a className="about-contact-line" href={`mailto:${PROFILE.email}`}>
									<FontAwesomeIcon icon={faEnvelope} /> {PROFILE.email}
								</a>
								<a className="about-contact-line" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
								</a>
								<a className="about-contact-line" href={PROFILE.socials.github} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} /> GitHub
								</a>
								{PROFILE.socials.topmate && (
									<a className="about-contact-line" href={PROFILE.socials.topmate} target="_blank" rel="noreferrer">
										<span className="about-contact-img"><img src="/topmate.png" alt="" /></span> Book a call — Topmate
									</a>
								)}
							</div>
						</div>

						<aside className="about-side">
							<div className="about-portrait">
								<img src={ABOUT.image} alt="Ambuj" />
							</div>
						</aside>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default About;
