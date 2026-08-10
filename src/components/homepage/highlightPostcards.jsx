import React from "react";
import Reveal from "../common/reveal";
import { HOME } from "../../lib/content";

import "./styles/highlights.css";

const HighlightPostcards = () => (
	<section className="highlights">
		<Reveal>
			<h2 className="section-heading serif">
				<span className="section-heading-underline">Selected moments</span>
			</h2>
		</Reveal>
		<div className="highlights-grid">
			{HOME.highlights.map((h, i) => (
				<Reveal key={i} delay={i * 70} className={`postcard stripe-${h.accent || "stone"}`} as="article">
					<div className="postcard-top">
						{h.logo && (
							<span className="postcard-logo">
								<img src={h.logo} alt={h.company} />
							</span>
						)}
						<span className="postcard-company">{h.company}</span>
					</div>
					<div className="postcard-position serif">{h.position}</div>
					{h.date && <div className="postcard-date">{h.date}</div>}
					<div className="postcard-summary">{h.summary}</div>
					{h.impact && (
						<div className={`postcard-impact bg-accent-${h.accent || "stone"} accent-${h.accent || "stone"}`}>
							{h.impact}
						</div>
					)}
				</Reveal>
			))}
		</div>
	</section>
);

export default HighlightPostcards;
