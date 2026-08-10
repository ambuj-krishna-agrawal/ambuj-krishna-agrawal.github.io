import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShieldAlt,
	faRobot,
	faWandSparkles,
	faBook,
	faCube,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/featuredProduct.css";

const ICONS = {
	shield: faShieldAlt,
	robot: faRobot,
	sparkle: faWandSparkles,
	book: faBook,
};

const FeaturedProduct = ({ product }) => {
	const Icon = ICONS[product.icon] || faCube;
	return (
		<article id={`entry-${product.id}`} className={`fp accent-${product.accent || "ember"}`}>
			<header className="fp-head">
				<div className={`fp-icon bg-accent-${product.accent || "ember"} accent-${product.accent || "ember"}`}>
					<FontAwesomeIcon icon={Icon} />
				</div>
				<div className="fp-title-wrap">
					<h2 className="fp-name serif">{product.name}</h2>
					<div className="fp-metrow">
						{product.role && <span className="fp-role">{product.role}</span>}
						{product.year && <span className="fp-year">{product.year}</span>}
					</div>
				</div>
				{product.links?.length ? (
					<div className="fp-links">
						{product.links.map((l) => (
							<a
								key={l.label}
								href={l.url}
								target="_blank"
								rel="noreferrer"
								className={`fp-link accent-${product.accent || "ember"}`}
							>
								{l.label} ↗
							</a>
						))}
					</div>
				) : null}
			</header>

			<p className="fp-tagline serif">{product.tagline}</p>

			{product.overview && <p className="fp-overview">{product.overview}</p>}

			{product.features?.length ? (
				<div className="fp-features">
					{product.features.map((f, i) => (
						<div key={i} className="fp-feature">
							<div className={`fp-feature-title accent-${product.accent || "ember"}`}>
								{f.title}
							</div>
							<div className="fp-feature-detail">{f.detail}</div>
						</div>
					))}
				</div>
			) : null}
		</article>
	);
};

export default FeaturedProduct;
