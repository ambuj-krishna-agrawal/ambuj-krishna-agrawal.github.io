import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import { PROFILE, seoFor } from "../lib/content";

import "./styles/contact.css";

const useLocalTime = (tz) => {
	const [now, setNow] = useState("");
	useEffect(() => {
		const fmt = () => {
			try {
				const t = new Date().toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "2-digit",
					timeZone: tz,
				});
				setNow(t);
			} catch {
				setNow("");
			}
		};
		fmt();
		const id = setInterval(fmt, 30000);
		return () => clearInterval(id);
	}, [tz]);
	return now;
};

const Contact = () => {
	useEffect(() => { window.scrollTo(0, 0); }, []);
	const s = seoFor("contact");
	const localTime = useLocalTime(PROFILE.timezone);

	return (
		<>
			<Helmet>
				<title>{s.title}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper page-inner contact">
					<h1 className="title">Say hi.</h1>
					<p className="subtitle">
						The inbox is quiet and always open — best for research chats, hiring,
						or "can I pick your brain for 15 minutes".
					</p>

					<div className="contact-cards">
						<a className="contact-card contact-card--primary" href={`mailto:${PROFILE.email}`}>
							<FontAwesomeIcon icon={faEnvelope} />
							<div>
								<div className="contact-card-label">Email</div>
								<div className="contact-card-value">{PROFILE.email}</div>
							</div>
						</a>
						<a className="contact-card" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
							<div>
								<div className="contact-card-label">LinkedIn</div>
								<div className="contact-card-value">Connect / DM</div>
							</div>
						</a>
						<a className="contact-card" href={PROFILE.socials.github} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
							<div>
								<div className="contact-card-label">GitHub</div>
								<div className="contact-card-value">ambuj-krishna-agrawal</div>
							</div>
						</a>
					</div>

					<div className="contact-time">
						<FontAwesomeIcon icon={faClock} />
						<span>
							Local time in {PROFILE.location}: <strong>{localTime || "—"}</strong>
						</span>
					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Contact;
