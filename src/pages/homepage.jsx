import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import HeroBlock from "../components/homepage/heroBlock";
import HighlightPostcards from "../components/homepage/highlightPostcards";
import RoleTimeline from "../components/homepage/roleTimeline";
import EducationList from "../components/homepage/educationList";

import { PROFILE, seoFor } from "../lib/content";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const s = seoFor("home");

	return (
		<>
			<Helmet>
				<title>{s.title || PROFILE.siteTitle}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper page-inner homepage">
					<HeroBlock />
					<HighlightPostcards />
					<RoleTimeline />
					<EducationList />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Homepage;
