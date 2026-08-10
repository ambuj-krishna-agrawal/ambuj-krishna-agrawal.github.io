import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/common/navBar";
import { PROFILE } from "../lib/content";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${PROFILE.name}`;
	}, []);

	return (
		<div className="page-content">
			<NavBar />
			<div className="content-wrapper page-inner nf">
				<div className="nf-num serif">404</div>
				<div className="nf-title serif">This room is empty.</div>
				<p className="nf-body">
					The page you're looking for isn't here — probably an old link or a typo.
				</p>
				<Link to="/" className="btn-primary">Take me home →</Link>
			</div>
		</div>
	);
};

export default Notfound;
