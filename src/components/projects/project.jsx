import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faEye, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, features, company, linkText, link, linkViewDemoText, linkViewDemo, date } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					{/* Date at the top, styled like homepage */}
					{date && (
						<div className="homepage-education-date" style={{ marginBottom: '12px' }}>
							|&nbsp;&nbsp;&nbsp;{date}
						</div>
					)}
					<div className="project-header">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title-wrapper">
							<div className="project-title">{title}</div>
							{company && (
								<div className="project-company">{company}</div>
							)}
						</div>
					</div>
					
					<div className="project-description">{description}</div>
					
					{features && features.length > 0 && (
						<div className="project-features-list">
							{features.map((feature, index) => (
								<div key={index} className="project-feature">
									<div className="project-feature-bullet">•</div>
									<div className="project-feature-text">{feature}</div>
								</div>
							))}
						</div>
					)}

					<div className="project-links">
						{linkText && (
							<div className="project-link">
								<Link to={link} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faExternalLinkAlt} className="project-link-icon" />
									<span className="project-link-text">{linkText}</span>
								</Link>
							</div>
						)}
						{linkViewDemoText && (
							<div className="project-link">
								<Link to={linkViewDemo} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faEye} className="project-link-icon" />
									<span className="project-link-text">{linkViewDemoText}</span>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
