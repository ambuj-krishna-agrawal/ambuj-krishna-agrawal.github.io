import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, features, company, linkText, link, linkViewDemoText, linkViewDemo } = props;

	return (
		<React.Fragment>
			<div className="project">
				
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{features && features.map((feature, index) => (
							<div key={index} className="project-feature">
								&#8226; {feature} {/* Bullet mark and feature */}
							</div>
						))}
						{company && (<div className="project-association">Associated With: <b>{company}</b></div>)}

						{linkText && (
							<div className="project-link">
								<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
								</div>
								<Link to={link} target="_blank" rel="noopener noreferrer">
								<div className="project-link-text">{linkText}</div>
								</Link>
							</div>
						)}
						{linkViewDemoText && (
							<div className="project-link">
								<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
								</div>
								<Link to={linkViewDemo} target="_blank" rel="noopener noreferrer">
								<div className="project-link-text">{linkViewDemoText}</div>
								</Link>
							</div>
						)}
					</div>
				
			</div>
		</React.Fragment>
	);
};

export default Project;
