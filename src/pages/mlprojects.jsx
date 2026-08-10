import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ProductCard from "../components/mlprojects/productCard";
import FeaturedProduct from "../components/mlprojects/featuredProduct";
import Reveal from "../components/common/reveal";

import { AI_PRODUCTS, seoFor } from "../lib/content";

import "./styles/mlprojects.css";

const MLProjects = () => {
	useEffect(() => { window.scrollTo(0, 0); }, []);

	const s = seoFor("ai-products");
	const launched = AI_PRODUCTS.filter((p) => p.launched);
	const drafts = AI_PRODUCTS.filter((p) => !p.launched);

	return (
		<>
			<Helmet>
				<title>{s.title}</title>
				<meta name="description" content={s.description} />
				<meta name="keywords" content={(s.keywords || []).join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="mlprojects" />
				<div className="content-wrapper page-inner">
					<h1 className="title">AI Products</h1>
					<p className="subtitle">
						Products I build with real users in mind — usually where a well-behaved model
						meets a real workflow. More landing here soon.
					</p>

					{launched.length > 0 && (
						<div className="ai-featured-stack">
							{launched.map((p, i) => (
								<Reveal key={p.id} delay={i * 90}>
									<FeaturedProduct product={p} />
								</Reveal>
							))}
						</div>
					)}

					{drafts.length > 0 && (
						<>
							<h2 className="section-heading serif" style={{ marginTop: "var(--space-xxl)" }}>
								<span className="section-heading-underline">Also built</span>
							</h2>
							<div className="ai-drafts-list">
								{drafts.map((p) => (
									<ProductCard key={p.id} product={p} />
								))}
							</div>
						</>
					)}

					<Footer />
				</div>
			</div>
		</>
	);
};

export default MLProjects;
