import React from "react";
import Reveal from "../common/reveal";
import { EXPERIENCE } from "../../lib/content";

import "./styles/roleTimeline.css";

const RoleTimeline = () => (
	<section className="role-timeline">
		<Reveal>
			<h2 className="section-heading serif">
				<span className="section-heading-underline">The path so far</span>
			</h2>
		</Reveal>

		<ol className="rt-list">
			{EXPERIENCE.map((e, i) => (
				<Reveal key={e.id} delay={i * 60} as="li" id={`entry-${e.id}`} className={`rt-item stripe-${e.accent || "stone"}`}>
					<div className="rt-date">{e.date}</div>
					<div className="rt-header">
						{e.logo && (
							<span className="rt-logo">
								<img src={e.logo} alt={e.company} />
							</span>
						)}
						<div>
							<div className="rt-company serif">{e.company}</div>
							<div className="rt-position">{e.position}</div>
							{e.team && <div className="rt-team">{e.team}</div>}
						</div>
					</div>
					<p className="rt-description">{e.description}</p>
					{e.internship && e.internship.description && (
						<div className="rt-internship">
							<div className="rt-internship-label">
								{e.internship.date ? `Earlier — ${e.internship.date}` : "Earlier"}
							</div>
							<div className="rt-internship-desc">{e.internship.description}</div>
						</div>
					)}
				</Reveal>
			))}
		</ol>
	</section>
);

export default RoleTimeline;
