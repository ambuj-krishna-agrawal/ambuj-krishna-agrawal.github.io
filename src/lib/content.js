// Single source of truth for content. Components import from here — never from JSON directly —
// so we can enforce the contract, sort, and derive views.

import profile from "../content/profile.json";
import home from "../content/home.json";
import about from "../content/about.json";
import nav from "../content/nav.json";
import experience from "../content/experience.json";
import education from "../content/education.json";
import research from "../content/research.json";
import aiProducts from "../content/ai-products.json";
import devProjects from "../content/dev-projects.json";
import seo from "../content/seo.json";

/** @typedef {"ember"|"moss"|"stone"} Accent */

/** @typedef {{ id:string, company:string, logo:string, position:string, date:string, team?:string, description:string, internship?:{date:string, description:string}, accent?:Accent }} ExperienceItem */
/** @typedef {{ id:string, title:string, institute:string, date:string, gpa?:string, courses?:string[] }} EducationItem */
/** @typedef {{ id:string, title:string, date:string, institute?:string, guide?:string, link?:string, codelink?:string, category:string, status:"published"|"in_progress"|"completed"|"industry", featured?:boolean, description:string[] }} ResearchItem */
/** @typedef {{ id:string, name:string, tagline:string, year:string, launched:boolean, role?:string, accent?:Accent, icon?:string, cover?:string, summary:string, links?:{label:string,url:string}[], features?:{title:string,detail:string}[] }} AIProduct */
/** @typedef {{ id:string, title:string, company?:string, logo?:string, tier:"selected"|"archive", year?:string, tag?:string, description:string, outcomes?:string[], link?:string, demo?:string }} DevProject */

export const PROFILE = profile;
export const HOME = home;
export const ABOUT = about;
export const NAV = nav.items;
export const SEO = seo;

/** @returns {ExperienceItem[]} */
export const EXPERIENCE = experience.items;

/** @returns {{ items: EducationItem[], certifications: any[] }} */
export const EDUCATION = education;

/** @returns {ResearchItem[]} */
export const RESEARCH = research.items;

/** @returns {AIProduct[]} launched first (by year desc), then unlaunched */
export const AI_PRODUCTS = [...aiProducts.items].sort((a, b) => {
	if (a.launched !== b.launched) return a.launched ? -1 : 1;
	return (b.year || "").localeCompare(a.year || "");
});

/** @returns {DevProject[]} */
export const DEV_PROJECTS = devProjects.items;
export const DEV_PROJECTS_SELECTED = devProjects.items.filter((p) => p.tier === "selected");
export const DEV_PROJECTS_ARCHIVE = devProjects.items.filter((p) => p.tier === "archive");

/** Look up SEO by page key. */
export function seoFor(pageKey) {
	return SEO[pageKey] || { title: PROFILE.siteTitle, description: "", keywords: [] };
}
