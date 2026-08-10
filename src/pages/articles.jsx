import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ResearchEntry from "../components/articles/researchEntry";
import Reveal from "../components/common/reveal";

import { RESEARCH, seoFor } from "../lib/content";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => { window.scrollTo(0, 0); }, []);

	const s = seoFor("research");

	const categories = useMemo(() => {
		const seen = new Set();
		const list = [];
		RESEARCH.forEach((r) => {
			if (r.category && !seen.has(r.category)) {
				seen.add(r.category);
				list.push(r.category);
			}
		});
		return list;
	}, []);

	const [cat, setCat] = useState("All");
	const filtered = cat === "All" ? RESEARCH : RESEARCH.filter((r) => r.category === cat);

	return (
		<>
			<Helmet>
				<title>{s.title}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper page-inner">
					<h1 className="title">Research</h1>
					<p className="subtitle">
						Chronological work across LLM evaluation, speech, RAG, agents and vision.
						The featured entry is a published paper — everything else is somewhere on the
						spectrum from "shipped" to "still simmering".
					</p>

					<div className="research-filter">
						{["All", ...categories].map((c) => (
							<button
								key={c}
								className={`archive-chip ${cat === c ? "is-active" : ""}`}
								onClick={() => setCat(c)}
							>
								{c}
							</button>
						))}
					</div>

					<div className="research-timeline">
						{filtered.map((r, i) => (
							<Reveal key={r.id} delay={i * 55}>
								<ResearchEntry item={r} />
							</Reveal>
						))}
					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Articles;
