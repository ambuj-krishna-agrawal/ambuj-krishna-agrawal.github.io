import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link, codelink, institute, guide, isPublished } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						{guide && (<div className="article-metadata">Guide: <b>{guide}</b></div>)}
						{institute && (<div className="article-metadata">Institute: <b>{institute}</b></div>)}
						<div class="article-link-list">
						{codelink && (
							<div className="article-link">
								<div className="article-link-icon">
								<FontAwesomeIcon icon={faLink} />
								</div>
								<Link to={codelink} target="_blank" rel="noopener noreferrer">
								<div className="article-link-text">Code</div>
								</Link>
							</div>
						)}
						{link && (
							<div className="article-link">
								<div className="article-link-icon">
								<FontAwesomeIcon icon={faLink} />
								</div>
								<Link to={link} target="_blank" rel="noopener noreferrer">
								<div className="article-link-text">{isPublished ? "Paper" : "Report"}</div>
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
