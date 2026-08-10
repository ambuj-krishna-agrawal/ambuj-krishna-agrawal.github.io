import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShieldAlt,
	faRobot,
	faWandSparkles,
	faBook,
	faCube,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/productCard.css";

const ICONS = {
	shield: faShieldAlt,
	robot: faRobot,
	sparkle: faWandSparkles,
	book: faBook,
};

const ProductCard = ({ product }) => {
	const Icon = ICONS[product.icon] || faCube;
	const cls = `product-card ${product.launched ? "is-launched" : "is-draft"}`;
	return (
		<article id={`entry-${product.id}`} className={cls}>
			<div className="pc-top">
				<div className={`pc-icon accent-${product.accent || "ember"}`}>
					<FontAwesomeIcon icon={Icon} />
				</div>
				<div className="pc-heading">
					<div className="pc-name serif">{product.name}</div>
					{product.role && <div className="pc-role">{product.role}</div>}
					<div className="pc-meta">
						{product.year && <span>{product.year}</span>}
						{!product.launched && <span className="pc-tag-draft">unlaunched</span>}
					</div>
				</div>
			</div>
			<p className="pc-tagline">{product.tagline}</p>
			<p className="pc-summary">{product.summary}</p>
			{product.features?.length ? (
				<ul className="pc-features">
					{product.features.map((f, i) => (
						<li key={i}>
							<span className="pc-feature-title">{f.title}</span>
							<span className="pc-feature-detail"> — {f.detail}</span>
						</li>
					))}
				</ul>
			) : null}
			{product.links?.length ? (
				<div className="pc-links">
					{product.links.map((l) => (
						<a key={l.label} href={l.url} target="_blank" rel="noreferrer">
							{l.label} ↗
						</a>
					))}
				</div>
			) : null}
			{product.quote && (
				<blockquote className="pc-quote">{product.quote}</blockquote>
			)}
		</article>
	);
};

export default ProductCard;
