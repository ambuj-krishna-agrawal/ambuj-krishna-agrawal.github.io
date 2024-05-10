import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
    return (
        <div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						features={project.features}
						company={project.company}
						linkText={project.linkText}
						link={project.link}
						linkViewDemoText={project.linkViewDemoText}
						linkViewDemo={project.linkViewDemo}
					/>
				</div>
			))}
		</div>
    );
};

export default AllProjects;
