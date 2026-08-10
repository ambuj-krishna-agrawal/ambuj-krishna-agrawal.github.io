import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFileAlt, faStar } from "@fortawesome/free-solid-svg-icons";

import "./style/researchEntry.css";

const STATUS_LABEL = {
	published: { text: "Published", tone: "moss" },
	in_progress: { text: "In progress", tone: "ember" },
	completed: { text: "Completed", tone: "stone" },
	industry: { text: "Industry", tone: "stone" },
};

const ResearchEntry = ({ item }) => {
	const status = STATUS_LABEL[item.status] || STATUS_LABEL.completed;
	return (
		<article id={`entry-${item.id}`} className={`re ${item.featured ? "is-featured" : ""}`}>
			<span className="re-dot" aria-hidden="true" />
			<div className="re-date">{item.date}</div>
			<div className="re-head">
				<h3 className="re-title serif">
					{item.featured && (
						<FontAwesomeIcon icon={faStar} className="re-star" title="Featured" />
					)}
					{item.title}
				</h3>
				<div className="re-badges">
					{item.category && (
						<span className="chip re-category">{item.category}</span>
					)}
					<span className={`chip re-status re-status--${status.tone}`}>
						{status.text}
					</span>
				</div>
			</div>
			<div className="re-body">
				{item.description.map((line, i) => (
					<p key={i}>{line}</p>
				))}
			</div>
			<div className="re-meta">
				{item.authors && (
					<span><span className="re-meta-label">Authors:</span> {item.authors}</span>
				)}
				{item.guide && (
					<span><span className="re-meta-label">Guide:</span> {item.guide}</span>
				)}
				{item.institute && (
					<span><span className="re-meta-label">Institute:</span> {item.institute}</span>
				)}
			</div>
			{(item.link || item.codelink) && (
				<div className="re-links">
					{item.codelink && (
						<a href={item.codelink} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faCode} /> Code
						</a>
					)}
					{item.link && (
						<a href={item.link} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faFileAlt} /> {item.status === "published" ? "Paper" : "Report"}
						</a>
					)}
				</div>
			)}
		</article>
	);
};

export default ResearchEntry;
