# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server → http://localhost:3000
npm run build    # production build (runs TypeScript + ESLint checks)
npm run start    # serve the production build locally
npm run lint     # ESLint via next lint
```

No test framework is configured — `npm run build` is the primary correctness gate (typecheck + lint).

## Stack

- **Next.js 14** — App Router, no Turbopack; deployed as a standard Next.js build (no `output: 'export'` in `next.config.mjs`)
- **TypeScript** — strict mode; path alias `@/*` → `src/*`
- **Tailwind CSS 3** — config in `tailwind.config.ts`; accent colour exposed as `text-accent` / `bg-accent`
- **Framer Motion 12** — used in `SectionWrapper.tsx` only; all other animations are CSS-class-based via `Reveal.tsx`
- **Vercel** — deploy target; `next.config.mjs` is intentionally empty

## Design tokens

All tokens are CSS variables on `:root` in `globals.css` — use them via `var(--token)` in inline styles or arbitrary Tailwind values.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0a0b0c` | page background |
| `--panel` | `#131415` | card surfaces |
| `--border` | `#232527` | default borders |
| `--text` | `#ecebe7` | primary text |
| `--text-2` | `#b8b6af` | secondary text |
| `--muted` | `#74746f` | muted / dim text |
| `--accent` | `oklch(0.78 0.12 178)` | teal accent (≈ `#00C2A8`) |
| `--warm` | `oklch(0.82 0.09 70)` | warm amber accent |
| `--sans` | Inter Tight / Inter | body font |
| `--serif` | Instrument Serif | editorial italic |
| `--mono` | JetBrains Mono | code / eyebrows |

Dark surface values in components use arbitrary Tailwind (`bg-[#131415]`, `border-[#232527]`) rather than named tokens to avoid Tailwind built-in conflicts.

## Architecture

Single-page portfolio. All sections are composed in `src/app/page.tsx` (server component).

```
src/
  app/
    page.tsx           ← composes all sections; also mounts ScrollProgress + Spotlight
    layout.tsx         ← font loading, SEO metadata, favicon reference
    globals.css        ← Tailwind base, CSS tokens, all shared utility classes (.wrap, .sec, .r/.in, marquee, etc.)
  components/
    Navbar.tsx         ← "use client" — fixed nav, mobile hamburger, smooth-scroll
    Hero.tsx           ← "use client" — full-screen with dot-grid bg, stagger animation
    About.tsx          ← "use client" — wraps Reveal
    Goals.tsx          ← "use client" — 4-card grid from goalsData; wraps Reveal
    Experience.tsx     ← "use client" — vertical timeline with stagger per job
    Projects.tsx       ← "use client" — card grid with built-in SVG visuals, tilt effect
    Skills.tsx         ← "use client" — scrolling marquee rows, one per skillsData category
    Certifications.tsx ← "use client" — 2-col card grid
    Contact.tsx        ← "use client" — centred links
    Footer.tsx         ← server — copyright + links
    Reveal.tsx         ← "use client" — primary scroll-reveal wrapper (IntersectionObserver, CSS .r/.in)
    SectionWrapper.tsx ← "use client" — legacy Framer Motion wrapper; still present, not actively used
    ScrollProgress.tsx ← "use client" — sets --p CSS var on scroll for the progress bar
    Spotlight.tsx      ← "use client" — cursor-following radial gradient overlay
  data/
    portfolio.ts       ← all content (experience, projects, skills, certs, goals) as typed arrays
```

## Key conventions

- **All content lives in `src/data/portfolio.ts`** — update that file to change copy, add projects, etc.

- **Animation pattern — `Reveal` + CSS classes**: The primary scroll animation is CSS-based. `Reveal.tsx` adds class `r` on mount and toggles `in` when the element enters the viewport (IntersectionObserver). The `r` / `r.in` transitions are defined in `globals.css`. Use `<Reveal>` for any new element that should fade in on scroll. The `--rd` CSS variable (set via inline style) controls the animation delay.

- **Framer Motion string literals must use `as const`** when assigned to motion props outside JSX (e.g. `ease: "easeOut" as const`, `type: "spring" as const`). Framer Motion v12 has strict union types; TypeScript widens bare string literals to `string` and the build fails.

- **`SectionWrapper`** (Framer Motion `useInView`) is still in the repo but superseded by `Reveal`. Don't add new usages of it.

- **Favicon**: `public/favicon.svg` (ZK initials, teal on dark). The `next/og` `icon.tsx` approach breaks on Windows paths with spaces — use the static SVG instead.

- **`gridDrift` keyframe** lives in `globals.css` and is referenced by an inline `animation` style in `Hero.tsx`. Animation-only CSS that's referenced inline belongs there, not in a component.

- **Section numbering**: eyebrows use `00 /`, `01 /`, `02 /` … prefix. Current order: Hero (no number) → About `00` → Goals `01` → Experience `02` → Projects `03` → Skills `04` → Certifications `05` → Contact `06`.

## Common content changes

**Add a project** — `src/data/portfolio.ts`
- Append to `projectsData` using the `Project` interface.
- Required: `name`, `category`, `stack[]`, `description`, `github`, `visual`, `size`.
- `visual` must be one of `"phone" | "terminal" | "snake" | "chart" | "globe" | "pong"` — these map to built-in SVG art components in `Projects.tsx`. Adding a new visual kind requires adding a new art component and extending the `PALETTE` and `VisualKind` union there.
- `size` controls grid column span: `"w-2"` (narrow) · `"w-3"` (medium) · `"w-4"` (wide).
- `liveUrl` is optional.

**Add an experience entry** — `src/data/portfolio.ts`
- Append to `experienceData` (fields: `title`, `company`, `initials`, `date`, `bullets[]`).
- The `initials` field is used directly as the logo badge (2-char string). Missing entries in `Experience.tsx`'s `logoMap` no longer fall back — populate `initials` in the data instead.
- The first word of each bullet renders bold automatically.

**Add a skill** — `src/data/portfolio.ts`
- Add the skill name to the appropriate category in `skillsData`.
- Add a hex colour string for it in `skillColors` (used as the blob colour in the marquee chip). If omitted, falls back to `var(--accent)`.
- No icon mapping needed — the Skills component shows colour blobs, not icons.

**Add a section** — new component + `src/app/page.tsx` + `src/components/Navbar.tsx`
- Create the component in `src/components/`. Wrap elements with `<Reveal>` for scroll animation.
- Add `"use client"` if the component uses `Reveal`, hooks, or browser APIs.
- Compose it in `src/app/page.tsx`.
- Add a `{ label, href }` entry to the `navLinks` array in `Navbar.tsx`.
- Follow the `00 / 01 / 02 …` section-number prefix convention; update subsequent section numbers if inserting mid-list.
- Add the section to `goalsData` in `portfolio.ts` if it has corresponding data content.
