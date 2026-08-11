import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
	RESEARCH,
	AI_PRODUCTS,
	DEV_PROJECTS,
	EXPERIENCE,
	EDUCATION,
} from "../../lib/content";
import { subscribeToPalette } from "../../lib/paletteControl";
import SETTINGS from "../../content/settings.json";

import "./styles/commandPalette.css";

const buildIndex = () => {
	const items = [];
	RESEARCH.forEach((r) =>
		items.push({
			id: `r-${r.id}`,
			entryId: r.id,
			section: "Research",
			title: r.title,
			hint: r.institute || r.date,
			href: "/articles",
			searchable: [r.title, r.category, ...(r.keywords || [])].join(" "),
		})
	);
	AI_PRODUCTS.forEach((p) =>
		items.push({
			id: `p-${p.id}`,
			entryId: p.id,
			section: "AI Products",
			title: p.name,
			hint: p.tagline,
			href: "/mlprojects",
			searchable: [p.name, p.tagline, p.role].join(" "),
		})
	);
	DEV_PROJECTS.forEach((p) =>
		items.push({
			id: `d-${p.id}`,
			entryId: p.id,
			section: "Engineering",
			title: p.title,
			hint: p.company,
			href: "/projects",
			searchable: [p.title, p.company, p.tag, ...(p.keywords || [])].join(" "),
		})
	);
	EXPERIENCE.forEach((e) =>
		items.push({
			id: `e-${e.id}`,
			entryId: e.id,
			section: "Experience",
			title: `${e.company} — ${e.position}`,
			hint: e.date,
			href: "/",
			searchable: [e.company, e.position, e.team, ...(e.keywords || [])].join(" "),
		})
	);
	EDUCATION.items.forEach((e) =>
		items.push({
			id: `edu-${e.id}`,
			entryId: e.id,
			section: "Education",
			title: e.title,
			hint: e.institute,
			href: "/",
			searchable: [e.title, e.institute].join(" "),
		})
	);
	return items;
};

const scrollToEntry = (entryId) => {
	if (!entryId) return;
	const tryScroll = (attempt = 0) => {
		const el = document.getElementById(`entry-${entryId}`);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "center" });
			el.classList.add("entry-flash");
			setTimeout(() => el.classList.remove("entry-flash"), 1600);
			return;
		}
		if (attempt < 20) setTimeout(() => tryScroll(attempt + 1), 60);
	};
	tryScroll();
};

const search = (items, q) => {
	if (!q.trim()) return items.slice(0, 24);
	const needle = q.toLowerCase();
	return items.filter((it) => it.searchable.toLowerCase().includes(needle)).slice(0, 24);
};

const CommandPalette = () => {
	const enabled = SETTINGS.commandPalette?.enabled !== false;
	const hotkey = (SETTINGS.commandPalette?.hotkey || "k").toLowerCase();

	const [open, setOpen] = useState(false);
	const [q, setQ] = useState("");
	const [idx, setIdx] = useState(0);
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const items = useMemo(() => buildIndex(), []);
	const results = useMemo(() => search(items, q), [items, q]);

	useEffect(() => {
		if (!enabled) return;
		const onKey = (e) => {
			const key = e.key.toLowerCase();
			if ((e.metaKey || e.ctrlKey) && key === hotkey) {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [enabled, hotkey]);

	useEffect(() => {
		if (!enabled) return;
		return subscribeToPalette(() => setOpen(true));
	}, [enabled]);

	useEffect(() => {
		if (!open) {
			setQ("");
			setIdx(0);
			return;
		}
		const t = setTimeout(() => inputRef.current?.focus(), 0);
		return () => clearTimeout(t);
	}, [open]);

	if (!enabled || !open) return null;

	const go = (r) => {
		navigate(r.href);
		setOpen(false);
		// wait for route to render, then scroll to entry
		setTimeout(() => scrollToEntry(r.entryId), 120);
	};

	const onKey = (e) => {
		if (e.key === "Escape") setOpen(false);
		else if (e.key === "ArrowDown") {
			e.preventDefault();
			setIdx((i) => Math.min(results.length - 1, i + 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setIdx((i) => Math.max(0, i - 1));
		} else if (e.key === "Enter" && results[idx]) {
			e.preventDefault();
			go(results[idx]);
		}
	};

	return (
		<div className="cmdk-backdrop" onClick={() => setOpen(false)} role="dialog" aria-label="Command palette">
			<div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
				<div className="cmdk-search">
					<FontAwesomeIcon icon={faSearch} />
					<input
						ref={inputRef}
						value={q}
						onChange={(e) => {
							setQ(e.target.value);
							setIdx(0);
						}}
						onKeyDown={onKey}
						placeholder="Jump to a paper, product, project, role…"
						aria-label="Search"
					/>
					<span className="cmdk-hint">esc</span>
				</div>
				<ul className="cmdk-results" role="listbox">
					{results.length === 0 && (
						<li className="cmdk-empty">Nothing matches "{q}".</li>
					)}
					{results.map((r, i) => (
						<li
							key={r.id}
							className={`cmdk-item ${i === idx ? "is-active" : ""}`}
							onMouseEnter={() => setIdx(i)}
							onClick={() => go(r)}
							role="option"
							aria-selected={i === idx}
						>
							<span className="cmdk-section">{r.section}</span>
							<span className="cmdk-title">{r.title}</span>
							{r.hint && <span className="cmdk-hint2">{r.hint}</span>}
							<FontAwesomeIcon icon={faArrowRight} className="cmdk-arrow" />
						</li>
					))}
				</ul>
				<div className="cmdk-foot">
					<span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
					<span><kbd>↵</kbd> open</span>
					<span><kbd>esc</kbd> close</span>
				</div>
			</div>
		</div>
	);
};

export default CommandPalette;
