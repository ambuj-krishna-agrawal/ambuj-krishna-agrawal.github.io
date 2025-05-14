import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<div className="nav-logo">
							<Logo width={48} link={true} />
						</div>
						<ul className="nav-list">
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">ML Research</Link>
							</li>
							<li
								className={
									active === "mlprojects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/mlprojects">AI Full Stack</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Dev Projects</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About me</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;