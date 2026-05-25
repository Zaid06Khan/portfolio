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
- **Tailwind CSS 3** — config in `tailwind.config.ts`; accent colour `#00C2A8` exposed as `text-accent` / `bg-accent`
- **Framer Motion 12** — all animations; components that use it must have `"use client"`
- **Vercel** — deploy target; `next.config.mjs` is intentionally empty

## Design tokens

- Background `#0d0d0d` (set on `body` in `globals.css`) · surface cards `#161616` · borders `#252525` · accent `#00C2A8` (Tailwind `accent`)
- Font: Inter loaded via `next/font` and exposed as the CSS variable `--font-inter` (referenced by Tailwind's `fontFamily.sans`)

## Architecture

Single-page portfolio. All sections are composed in `src/app/page.tsx` (server component).

```
src/
  app/
    page.tsx          ← composes all sections
    layout.tsx        ← Inter font, SEO metadata, favicon reference
    globals.css       ← Tailwind base + dark body bg + custom scrollbar
  components/
    Navbar.tsx        ← "use client" — fixed nav, mobile hamburger, smooth-scroll
    Hero.tsx          ← "use client" — full-screen with dot-grid bg, stagger animation
    About.tsx         ← server — wraps SectionWrapper
    Experience.tsx    ← "use client" — vertical timeline with stagger per job
    Projects.tsx      ← "use client" — 3-col card grid with stagger per card
    Skills.tsx        ← server — pill badges grouped by category
    Certifications.tsx← server — 2-col card grid
    Contact.tsx       ← server — centred links
    Footer.tsx        ← server — copyright + links
    SectionWrapper.tsx← "use client" — reusable scroll-triggered fade-in+slide-up
  data/
    portfolio.ts      ← all content (experience, projects, skills, certs) as typed arrays
```

## Key conventions

- **All content lives in `src/data/portfolio.ts`** — update that file to change copy, add projects, etc.
- **Framer Motion ease values must use `as const`** when defined outside JSX (e.g. `ease: "easeOut" as const`). Framer Motion v12 has a strict `Easing` union type; TypeScript widens bare string literals to `string` otherwise and the build fails.
- **`SectionWrapper`** applies fade-in + slide-up to server-rendered sections. Pass `id` here for scroll targets. Client components (`Experience`, `Projects`) manage their own `useInView` to support per-item stagger.
- **Favicon**: `public/favicon.svg` (ZK initials, teal on dark). The `next/og` `icon.tsx` approach breaks on Windows paths with spaces — use the static SVG instead.
- **Dark colours** are arbitrary Tailwind values (`bg-[#161616]`, `border-[#252525]`, etc.) rather than named theme tokens to avoid conflicts with Tailwind built-ins.
- **Skill icons use `<img>`, not `next/image`** — `Skills.tsx` loads icons from the simpleicons/devicons CDNs and prefixes the file with `/* eslint-disable @next/next/no-img-element */`. Inline SVG fallbacks (`ClaudeIcon`, `HeyGenIcon`) and a first-letter `LetterFallback` handle special cases and `onError`. Keep this pattern when adding skills — don't switch to `next/image`.
- **`gridDrift` keyframe** lives in `globals.css` and is referenced by an inline `animation` style in `Hero.tsx` to drive the animated background grid. Animation-only CSS that's referenced inline belongs there, not in a component.
