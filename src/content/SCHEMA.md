# Content contract

Every page and card on this site is rendered from JSON in `src/content/`.
**Do not embed work data in JSX or CSS.** Edit the JSON — the components will re-render.

## Files

| File | Purpose |
|---|---|
| `profile.json` | Personal info, socials, status chip, resume link |
| `home.json` | Homepage greeting, "modes" row, highlight cards |
| `about.json` | About-page sections |
| `experience.json` | Work history (rendered on homepage) |
| `education.json` | Degrees + online certifications |
| `research.json` | Research entries (rendered on `/articles`) |
| `ai-products.json` | Launched AI products (rendered on `/mlprojects`) |
| `dev-projects.json` | Engineering + hackathon work (rendered on `/projects`) |
| `nav.json` | Top-nav items |
| `seo.json` | Per-page meta |

## Common fields

- `id` — kebab-case unique key
- `accent` — one of `ember`, `moss`, `stone` (design tokens in `styles.css`)
- `logo` — path under `/public`, served as-is
- `date` — human-readable range, e.g. `Feb 2023 – Jul 2024`

## Research (`research.json`)

```jsonc
{
  "id": "cmu-granular-preference",
  "title": "Granular Preference-Based Feedback of Generated Text",
  "date": "Sep 2024 – Present",
  "institute": "Carnegie Mellon University",
  "guide": "Prof. Name",
  "category": "LLM Eval | Speech | RAG | Agents | Vision | Time Series",
  "status": "published | in_progress | completed | industry",
  "featured": true,                 // optional: highlight (e.g. published paper)
  "link": "https://...",            // paper / report
  "codelink": "https://github.com/...",
  "description": ["bullet 1", "bullet 2"]
}
```

Published paper (`status: "published"`) is always featured — do not archive it.

## AI Products (`ai-products.json`)

Set `launched: true` for real launches. Unlaunched products render smaller and lower down.

```jsonc
{
  "id": "product-slug",
  "name": "Product Name",
  "tagline": "One-liner.",
  "year": "2025",
  "launched": true,
  "role": "Founder · CMU",
  "icon": "shield | robot | sparkle | book",
  "cover": "/cover-image.png",
  "summary": "Paragraph.",
  "links": [ { "label": "Website", "url": "https://..." } ],
  "features": [ { "title": "Feature", "detail": "..." } ]
}
```

## Dev projects (`dev-projects.json`)

- `tier: "selected"` — surfaces as a full card at the top of `/projects`
- `tier: "archive"` — compact row in the Archive section (still expandable)

Set every old project to `archive` unless it truly earns headline space.

## Adding a new item

1. Edit the relevant JSON.
2. Save. React dev server hot-reloads.
3. No JSX / CSS changes needed unless the field is brand new (then update `src/lib/content.js` types).
