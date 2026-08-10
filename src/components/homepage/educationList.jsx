import React from "react";
import Reveal from "../common/reveal";
import { EDUCATION } from "../../lib/content";

import "./styles/educationList.css";

const EducationList = () => (
	<section className="edu-list-wrap">
		<Reveal>
			<h2 className="section-heading serif">
				<span className="section-heading-underline">Education</span>
			</h2>
		</Reveal>
		<div className="edu-grid">
			{EDUCATION.items.map((e, i) => (
				<Reveal key={e.id} delay={i * 70} id={`entry-${e.id}`} className="edu-card">
					<div className="edu-date">{e.date}</div>
					<div className="edu-title serif">{e.title}</div>
					<div className="edu-institute">{e.institute}</div>
					{e.gpa && <div className="edu-gpa">GPA: {e.gpa}</div>}
					{e.courses?.length ? (
						<div className="edu-chips">
							{e.courses.map((c) => (
								<span key={c} className="chip">{c}</span>
							))}
						</div>
					) : null}
				</Reveal>
			))}
		</div>

		{EDUCATION.certifications?.length ? (
			<details className="edu-certs">
				<summary>Online courses & certifications ({EDUCATION.certifications.length})</summary>
				<ul className="edu-certs-list">
					{EDUCATION.certifications.map((c) => (
						<li key={c.name}>
							<a href={c.url} target="_blank" rel="noreferrer">{c.name}</a>
							<span className="edu-certs-meta"> — {c.provider}, {c.date}</span>
						</li>
					))}
				</ul>
			</details>
		) : null}
	</section>
);

export default EducationList;
