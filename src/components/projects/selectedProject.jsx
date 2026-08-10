import React from "react";

import "./styles/selectedProject.css";

const labelForLink = (url) => {
	if (!url) return "Link";
	if (/github\.com/.test(url)) return "Repo";
	if (/linkedin\.com/.test(url)) return "Post";
	if (/youtu\.?be/.test(url)) return "Video";
	if (/arxiv\.org/.test(url)) return "Paper";
	return "Link";
};

const SelectedProject = ({ project }) => (
	<article id={`entry-${project.id}`} className="sp-card stripe-ember">
		{project.tag && <span className="sp-tag">{project.tag}</span>}
		<div className="sp-top">
			{project.logo && (
				<span className="sp-logo">
					<img src={project.logo} alt={project.company} />
				</span>
			)}
			<span className="sp-company">{project.company}</span>
		</div>
		<h3 className="sp-title serif">{project.title}</h3>
		<p className="sp-description">{project.description}</p>
		{project.outcomes?.length ? (
			<ul className="sp-outcomes">
				{project.outcomes.map((o, i) => (
					<li key={i}>
						<span className="sp-outcome-bullet">■</span> {o}
					</li>
				))}
			</ul>
		) : null}
		{(project.link || project.demo) && (
			<div className="sp-links">
				{project.link && (
					<a href={project.link} target="_blank" rel="noreferrer">
						{project.linkLabel || labelForLink(project.link)} ↗
					</a>
				)}
				{project.demo && (
					<a href={project.demo} target="_blank" rel="noreferrer">Demo ↗</a>
				)}
			</div>
		)}
	</article>
);

export default SelectedProject;
