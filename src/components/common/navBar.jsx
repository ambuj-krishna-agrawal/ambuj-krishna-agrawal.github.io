import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { NAV } from "../../lib/content";
import { requestLampOff } from "../../lib/lampControl";
import { requestPaletteOpen } from "../../lib/paletteControl";
import "./styles/navBar.css";

const isMac =
	typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

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

	useEffect(() => {
		document.body.classList.toggle("nav-menu-open", menuOpen);
		return () => document.body.classList.remove("nav-menu-open");
	}, [menuOpen]);

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
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
				>
					<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
				</button>

				<div
					className={`nav-scrim ${menuOpen ? "is-open" : ""}`}
					onClick={close}
					aria-hidden="true"
				/>

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
						className="nav-cmdk"
						onClick={() => { close(); requestPaletteOpen(); }}
						title="Search everything"
						aria-label="Open search"
					>
						<kbd>{isMac ? "⌘" : "Ctrl"}</kbd>
						<kbd>K</kbd>
					</button>
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
