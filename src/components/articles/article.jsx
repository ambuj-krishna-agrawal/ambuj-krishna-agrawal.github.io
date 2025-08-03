import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faFileAlt } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link, codelink, institute, guide, isPublished } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-content">
					{date && (
						<div className="homepage-education-date" style={{ marginBottom: '12px', maxWidth: 'fit-content' }}>
							|&nbsp;&nbsp;&nbsp;{date}
						</div>
					)}
					<div className="article-title">{title}</div>
					<div className="article-description">
						{description.split('\n').map((line, index) => (
							<div key={index} className="article-bullet-point">{line}</div>
						))}
					</div>
					
					<div className="article-metadata-container">
						{guide && (
							<div className="article-metadata">
								<span className="article-metadata-label">Guide:</span> 
								<span className="article-metadata-value">{guide}</span>
							</div>
						)}
						{institute && (
							<div className="article-metadata">
								<span className="article-metadata-label">Institute:</span> 
								<span className="article-metadata-value">{institute}</span>
							</div>
						)}
					</div>
					
					<div className="article-link-list">
						{codelink && (
							<div className="article-link">
								<Link to={codelink} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faCode} className="article-link-icon" />
									<span className="article-link-text">Code</span>
								</Link>
							</div>
						)}
						{link && (
							<div className="article-link">
								<Link to={link} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={isPublished ? faFileAlt : faFileAlt} className="article-link-icon" />
									<span className="article-link-text">{isPublished ? "Paper" : "Report"}</span>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
