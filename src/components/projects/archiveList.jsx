import React, { useMemo, useState } from "react";

import "./styles/archiveList.css";

const ArchiveList = ({ items }) => {
	const [openId, setOpenId] = useState(null);
	const companies = useMemo(() => {
		const seen = new Set();
		const list = [];
		items.forEach((i) => {
			if (i.company && !seen.has(i.company)) {
				seen.add(i.company);
				list.push(i.company);
			}
		});
		return list;
	}, [items]);

	const [filter, setFilter] = useState("All");
	const filtered = filter === "All"
		? items
		: items.filter((i) => i.company === filter);

	return (
		<div className="archive-wrap">
			<div className="archive-filter">
				{["All", ...companies].map((c) => (
					<button
						key={c}
						className={`archive-chip ${filter === c ? "is-active" : ""}`}
						onClick={() => setFilter(c)}
					>
						{c}
					</button>
				))}
			</div>

			<ul className="archive-list">
				{filtered.map((p) => {
					const open = openId === p.id;
					return (
						<li key={p.id} id={`entry-${p.id}`} className={`archive-row ${open ? "is-open" : ""}`}>
							<button
								className="archive-row-head"
								onClick={() => setOpenId(open ? null : p.id)}
							>
								<span className="archive-row-year">{p.year || "—"}</span>
								<span className="archive-row-title serif">{p.title}</span>
								<span className="archive-row-company">{p.company}</span>
								<span className="archive-row-arrow">{open ? "−" : "+"}</span>
							</button>
							{open && (
								<div className="archive-row-body">
									<p>{p.description}</p>
									{p.outcomes?.length ? (
										<ul>
											{p.outcomes.map((o, i) => <li key={i}>{o}</li>)}
										</ul>
									) : null}
									{(p.link || p.demo) && (
										<div className="archive-row-links">
											{p.link && (
												<a href={p.link} target="_blank" rel="noreferrer">
													{p.linkLabel || (/github\.com/.test(p.link) ? "Repo" : /linkedin\.com/.test(p.link) ? "Post" : "Link")} ↗
												</a>
											)}
											{p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo ↗</a>}
										</div>
									)}
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ArchiveList;
