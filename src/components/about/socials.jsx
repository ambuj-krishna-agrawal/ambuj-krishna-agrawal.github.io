import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials-container">
			<div className="social-item">
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
					<span className="social-text">Follow on LinkedIn</span>
				</a>
			</div>

			<div className="social-item">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="social-icon" />
					<span className="social-text">Follow on GitHub</span>
				</a>
			</div>


			<div className="social-item email-item">
				<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
					<span className="social-text">{INFO.main.email}</span>
				</a>
			</div>
		</div>
	);
};

export default Socials;