import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
    return (
        <div className="all-projects-container">
			{INFO.projects.map((project, index) => (
									<Project
									logo={project.logo}
									title={project.title}
									description={project.description}
									features={project.features}
									company={project.company}
									linkText={project.linkText}
									link={project.link}
									key={index}
									linkViewDemoText={project.linkViewDemoText}
									linkViewDemo={project.linkViewDemo}
								/>
			))}
		</div>
    );
};

export default AllProjects;
