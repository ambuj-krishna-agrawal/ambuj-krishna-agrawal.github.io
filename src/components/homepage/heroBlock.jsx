import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import StatusChip from "../common/statusChip";
import { PROFILE, HOME } from "../../lib/content";

import "./styles/hero.css";

const HeroBlock = () => (
	<section className="hero">
		<div className="hero-copy">
			<StatusChip />
			<h1 className="hero-greeting serif">
				Hi, I'm <span className="hero-name">Ambuj</span>
				<span className="hero-cursor" aria-hidden="true">.</span>
			</h1>
			<p className="hero-intro">{HOME.intro}</p>
			<p className="hero-longintro">{HOME.longIntro}</p>

			<div className="hero-cta-row">
				{PROFILE.resumeUrl && (
					<a
						className="btn-primary"
						href={PROFILE.resumeUrl}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faEye} /> Résumé
					</a>
				)}
				<a
					className="btn-ghost"
					href={`mailto:${PROFILE.email}`}
				>
					<FontAwesomeIcon icon={faEnvelope} /> Email
				</a>
				<a
					className="btn-icon"
					href={PROFILE.socials.github}
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					className="btn-icon"
					href={PROFILE.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				{PROFILE.socials.topmate && (
					<a
						className="btn-icon btn-icon--img"
						href={PROFILE.socials.topmate}
						target="_blank"
						rel="noreferrer"
						aria-label="Topmate — book a call"
						title="Topmate — book a call"
					>
						<img src="/topmate.png" alt="Topmate" />
					</a>
				)}
			</div>
		</div>

		<div className="hero-portrait">
			<div className="hero-portrait-frame">
				<div className="hero-portrait-blob" aria-hidden="true" />
				<img src={PROFILE.avatar} alt={PROFILE.name} />
			</div>
			<div className="hero-portrait-caption serif">
				<div>{PROFILE.location}</div>
				<div>{PROFILE.tagline}</div>
			</div>
		</div>
	</section>
);

export default HeroBlock;
