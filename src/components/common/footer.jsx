import React from "react";
import { Link } from "react-router-dom";
import { NAV, PROFILE } from "../../lib/content";

import "./styles/footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footer-row">
				<div className="footer-brand serif">— {PROFILE.name}</div>
				<ul className="footer-nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					{NAV.map((n) => (
						<li key={n.key}>
							<Link to={n.href}>{n.label}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="footer-note">
				<div className="footer-note-left">
					<span>{year}</span>
					<span>{PROFILE.location}</span>
				</div>
				<a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
			</div>
		</footer>
	);
};

export default Footer;
