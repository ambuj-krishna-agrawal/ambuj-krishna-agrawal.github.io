import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { NAV } from "../../lib/content";
import { requestLampOff } from "../../lib/lampControl";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const close = () => setMenuOpen(false);

	return (
		<header className={`nav-shell ${scrolled ? "nav-shell--scrolled" : ""}`}>
			<div className="nav-inner">
				<Link to="/" className="nav-brand" title="Home" onClick={close}>
					<span className="nav-brand-mark serif">A.</span>
					<span className="nav-brand-name">Ambuj</span>
				</Link>

				<button
					className="nav-toggle"
					onClick={() => setMenuOpen((v) => !v)}
					aria-label="Menu"
				>
					<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
				</button>

				<nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
					{NAV.map((item) => (
						<Link
							key={item.key}
							to={item.href}
							className={`nav-item ${active === item.key ? "nav-item--active" : ""}`}
							onClick={close}
						>
							{item.label}
						</Link>
					))}
					<button
						className="nav-lamp"
						onClick={() => { close(); requestLampOff(); }}
						title="Turn the light off"
						aria-label="Turn the light off"
					>
						<FontAwesomeIcon icon={faLightbulb} />
					</button>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
