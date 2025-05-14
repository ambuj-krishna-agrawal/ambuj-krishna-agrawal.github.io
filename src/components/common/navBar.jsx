import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<div className="nav-logo">
							<Logo width={48} link={true} />
						</div>
						
						<div className="mobile-menu-toggle" onClick={toggleMenu}>
							<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
						</div>
						
						<ul className={`nav-list ${menuOpen ? "nav-list-mobile-open" : ""}`}>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles" onClick={closeMenu}>ML Research</Link>
							</li>
							<li
								className={
									active === "mlprojects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/mlprojects" onClick={closeMenu}>AI Full Stack</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects" onClick={closeMenu}>Dev Projects</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about" onClick={closeMenu}>About me</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;