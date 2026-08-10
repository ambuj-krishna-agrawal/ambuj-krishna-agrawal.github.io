import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SelectedProject from "../components/projects/selectedProject";
import ArchiveList from "../components/projects/archiveList";
import Reveal from "../components/common/reveal";

import {
	DEV_PROJECTS_SELECTED,
	DEV_PROJECTS_ARCHIVE,
	seoFor,
} from "../lib/content";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => { window.scrollTo(0, 0); }, []);

	const s = seoFor("projects");

	return (
		<>
			<Helmet>
				<title>{s.title}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper page-inner">
					<h1 className="title">Engineering</h1>
					<p className="subtitle">
						Engineering work I've done — company products at CRED and LinkedIn, hackathon wins, and side builds. The notable ones sit at the top; the rest are archived below.
					</p>

					<h2 className="section-heading serif" style={{ marginTop: "var(--space-xl)" }}>
						<span className="section-heading-underline">Selected</span>
					</h2>
					<div className="projects-selected-grid">
						{DEV_PROJECTS_SELECTED.map((p, i) => (
							<Reveal key={p.id} delay={i * 70}>
								<SelectedProject project={p} />
							</Reveal>
						))}
					</div>

					<h2 className="section-heading serif" style={{ marginTop: "var(--space-xxl)" }}>
						<span className="section-heading-underline">Archive</span>
					</h2>
					<ArchiveList items={DEV_PROJECTS_ARCHIVE} />

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Projects;
