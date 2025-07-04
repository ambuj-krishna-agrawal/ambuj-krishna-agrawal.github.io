import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">ML Research</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/mlprojects">AI Full Stack</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Dev Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About me</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						2025 - Ambuj Krishna Agrawal
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
