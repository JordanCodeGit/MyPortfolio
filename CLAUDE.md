# CLAUDE.md — Jordan Angkawijaya Portfolio

## What this is
A single-page personal portfolio for **Jordan Angkawijaya**, a Computer Science student and junior Project Manager who ships AI products (NLP, computer vision, full-stack). Deployed on Vercel.

**Primary readers:** recruiters and hiring managers scanning for ~30 seconds, plus potential clients. Their job is to find the projects and outcomes fast. The site must reward a quick scan first and a slow read second.

**Goal of the site:** be memorable through a distinctive aesthetic and ONE signature motion moment, while proving PM judgment through restraint and clarity. Memorability comes from the real content (shipped products, measured outcomes, leadership), not from animation. Animation is the skin; the substance is the work.

## Hard rules (do not violate)
- **No full-page scroll-jacking.** Exactly one signature scroll-driven moment (Hero → Projects, see below). Every other section uses normal native scrolling with subtle reveal-on-scroll only.
- **No heavy WebGL / 3D scenes.** We do not have a commissioned 3D asset. Do not attempt to recreate Adaline's camera-through-a-3D-world. Approximate the feeling with layered parallax + transform/opacity on real DOM/SVG, kept performant.
- Never commit secrets or API keys. There is no backend; contact is `mailto` + links.
- Respect `prefers-reduced-motion`: all motion must have a static fallback that shows final state.
- Keyboard focus must be visible on every interactive element. Semantic HTML, real `alt` text on every image.
- Keep copy honest. Jordan's paid PM role is described as shadowing/observing a Senior PM — do not inflate it into "led/directed." Lead paid+leadership experience truthfully.
- Do not introduce colors outside the palette below. No blues, no vivid greens, no drop shadows beyond the single hairline ring.

## Stack
- **Next.js (App Router) + TypeScript**, deployed to **Vercel**.
- **Tailwind CSS v4** (`@theme` tokens below).
- **Motion** (`motion/react`, formerly Framer Motion) for animation. Use `useScroll`/`useTransform` for the one signature sequence.
- Fonts via `next/font`. Images via `next/image` (optimize, lazy-load below the fold).
- Use the **frontend-design** skill for aesthetic execution. Keep `CLAUDE.md` under ~200 lines; longer content can move to a `CONTENT.md` later.

## Fonts
- Primary (display + body): **Inter**, weights 400 and 700. (Stand-in for Akkurat, which is paid; do not attempt to fetch Akkurat.) Apply **letter-spacing -0.04em** to all Inter text at every size — this tight tracking is the signature.
- Mono / micro-labels: **Fragment Mono** 400, letter-spacing +0.02em, used ONLY for eyebrows, tags, status labels, and section markers. Never for headings or body.

## Design tokens (Adaline "botanical journal" system)
```css
@theme {
  --color-cream-paper: #fbfdf6;   /* page canvas, cards, text on dark fills */
  --color-botanical-ink: #0a1d08; /* headings, body, ghost-button borders, nav */
  --color-bark-brown: #31200b;    /* secondary text, decorative depth */
  --color-warm-loam: #4a3212;     /* THE single CTA fill, nothing else */
  --color-forest-floor: #203b14;  /* CTA hover, tag/divider outline accent */
  --color-sage-mist: #eff2e8;     /* surface level 1, section banding */
  --color-lichen: #e0e5d5;        /* surface level 2, hairline dividers */
  --color-moss-veil: #d7e8b5;     /* tag/badge fill only (small areas) */
  --color-eucalyptus: #c5ccb6;    /* surface level 3, decorative borders */
  --color-onyx: #000000;          /* logo mark, icon strokes */
  --shadow-subtle: rgba(99,143,61,0.1) 0 0 0 1px;
}
```
**Type scale** (weight 400 default; 700 for nav + emphasis only):
- display: clamp(2.5rem, 6vw, 4.5rem) / line-height 1.02 / tracking -0.045em
- heading: ~32–40px / 1.05
- body: 18px / 1.55 / tracking -0.02em
- body-sm: 14px
- micro (Fragment Mono): 12–14px, uppercase

**Spacing:** 8px base unit. Section gaps 64–90px. Card padding 24–32px. Max content width 1200px, centered.
**Radii:** buttons & nav 20px, images 8px, tags 9999px. Never 0px on interactive elements.
**Surfaces (never skip levels):** Cream Paper → Sage Mist → Lichen → Moss Veil → Eucalyptus.
**Elevation:** shadow-averse. Borders define edges, not shadows. Only the hairline ring above.

## Design do / don't
- DO center the hero headline at display size, **weight 400** (authority through scale + tight tracking, not bold).
- DO use Warm Loam (#4a3212) for exactly one primary CTA; ghost/outlined buttons use a 1px Botanical Ink border.
- DO use Fragment Mono micro-labels as eyebrows above each section.
- DO let imagery and whitespace carry mood; the page breathes, it is not information-packed.
- DON'T use weight 700 on headlines. DON'T add saturated colors or shadows. DON'T use Fragment Mono for running text.

## Signature moment (the ONE bold thing)
Hero → Projects transition. As the user scrolls out of the hero, the painted landscape recedes/zooms (camera-push feeling) and resolves into the first project, as if entering the work through the horizon. Build with `useScroll` + `useTransform` on a pinned section: scale + translate + opacity on layered landscape SVG/image layers and a fade-up of the first project. Must be smooth at 60fps, degrade to a plain fade under reduced motion, and never trap scroll for more than ~1 viewport. After this moment, scrolling is fully normal.

Landscape asset: use the SVG stand-in approach for now (layered hills, lake, mist, lone bench, wind-shaped trees in the palette). A real painted illustration can be dropped in later as the hero/parallax background; structure the component so the background image is swappable.

## Page structure (single page, in order)
1. **Hero** — landscape backdrop, centered. Name + first-person headline + one-line positioning. Fragment Mono eyebrow ("Project Manager · AI / NLP / Computer Vision"). A quiet credential strip (GPA 3.99, TOEIC 900, ISIF Intl. Gold, OPES Awardee, Outstanding Student 2026). NO photo here. CTAs: "View the work" (filled Warm Loam) + "Download CV" (ghost).
2. **Projects** (arrived at via the signature transition) — the core. Each project is a compact case study, not a screenshot+blurb. Per project show: name + year, role + team size, the problem, 1–2 real decisions/tradeoffs, and the measured outcome. Screenshots optional and secondary (these are student/competition projects; lead with outcomes).
3. **About** — photo of Jordan + 2–3 sentence narrative bio + a tight skills line. This is where the face lives.
4. **Experience** — paid roles AND leadership (leadership is strong PM evidence). Honest framing on the EIT role.
5. **Achievements** — typographic list (issuer + year), NOT a gallery of certificate scans. At most one or two genuine proof images that carry a story (e.g., ISIF gold medal). Link verifiable credentials (Azure → Credly) rather than embedding images.
6. **Contact** — email (`mailto`) + LinkedIn + location, one-line invitation. No form.

## Content (use verbatim facts; rewrite phrasing to fit the voice)
**Identity:** Jordan Angkawijaya · Banyumas / Purwokerto, Central Java, Indonesia · jordanaw0117@gmail.com · linkedin.com/in/jordan-angkawijaya · B.Sc. Computer Science, Telkom University Purwokerto, 2023–2027 (expected) · GPA 3.99/4.00 · OPES Fully-Funded Awardee · Outstanding Student of Telkom University 2026.

**Skills:** Python, PHP, SQL, HTML/CSS/JavaScript · NLP pipeline architecture, feature engineering, SVM, computer vision (YOLO), RoBERTa · Git, Trello, Kanban, Agile · English TOEIC 900, Indonesian native.

**Projects:**
- **UEMKASolve** (2026) — PM & Ideator · team of 5 (FE, BE, UI/UX, QA). A vision-language-model digital ledger for micro/small businesses. Outcome: ~13% operational-efficiency gain across 15 MSME clients; 89% task-success in field usability testing; secured funding, a journal publication, and registered IPR. Stack: PHP, Laravel, Generative VLM API.
- **LogiCheck** (2025) — PM & Ideator · team of 6 (Product, Design, Engineering). An AI-driven cognitive-training platform to counter student cognitive offloading. Outcome: International Gold Medal at ISIF 2025; academic sponsorship and registered IPR. Stack: Python, NLP.

**Experience:**
- **Junior Project Manager**, PT. EIT Developer Indonesia (Jan 2026–present, Purwokerto). Shadowed a Senior PM across the active lifecycle of 2 client software projects; observed how Jira/Trello workflows translated 30+ milestones into sprint deliverables.
- **Full-Stack Web Developer Intern**, PT. Solusi247 (Apr–Sep 2022, Yogyakarta). Built a JWT-secured single-page app with automated password-expiry controls; deployed a MySQL database and RESTful API for internal users. (Note: predates the 2023 degree start — present as a pre-university internship.)
- **Vice President**, Satria Muda Community (Dec 2023–Oct 2025). Ran a 52-member academic incubator; managed a QA review pipeline that advanced 47 grant proposals into a national pool.
- **Hospitality Coordinator**, The INDEX International Exchange (Jun 2024–present). Scaled the operations team from 3 to 8 to support VIP delegations across a 7-day annual international exchange.

**Achievements:** Outstanding Student of Telkom University (2026) · International Gold Medal, ISIF 2025 · 2nd International Winner, Innovation Proposal, ISC Brawijaya University (2025) · Best Presentation, Global PBL Program, SUT Thailand (2025) · Microsoft Azure AI Fundamentals (2025).

## Quality floor before "done"
- Lighthouse: performance ≥ 90, accessibility ≥ 95 on mobile.
- Responsive from 360px up. Test the signature moment on mobile and with reduced motion.
- No layout shift; images sized; fonts via `next/font` with fallback.
- Run a quick pass for contrast (Botanical Ink on Cream Paper holds ~17:1).

## Workflow
Plan before building. Propose the component structure and the signature-moment approach, get confirmation, then implement section by section. One task per session; if context fills, write progress to a scratch file and continue.
