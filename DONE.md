# DONE.md — Portfolio Build Summary

## What was built

A complete personal developer portfolio website for Zaid Khan, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Fully static, ready to deploy to Vercel.

---

## Pages & sections

| Section | Component | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Fixed top bar, glassmorphism on scroll, mobile hamburger w/ AnimatePresence |
| Hero | `Hero.tsx` | Full-screen, animated line-grid bg, teal radial glow, two-column layout, ZK avatar, rotating ring |
| About | `About.tsx` | Scroll-triggered fade, 3 stat cards (3 Internships / 5+ Projects / Claude Certified) |
| Experience | `Experience.tsx` | Vertical timeline, 3 jobs, per-item stagger animation |
| Projects | `Projects.tsx` | 3-col responsive card grid, 5 projects, Featured badge on top 2, teal glow hover |
| Skills | `Skills.tsx` | Icon + label badges (simpleicons CDN + devicons) grouped into 4 categories |
| Certifications | `Certifications.tsx` | 2-col card grid, 4 credentials, teal glow hover |
| Contact | `Contact.tsx` | Centred email / LinkedIn / GitHub links |
| Footer | `Footer.tsx` | "Designed & Built by Zaid Khan © 2026" centred |

---

## Upgrade pass (v2)

1. **Hero background** — animated line-grid (CSS `gridDrift` keyframe, 20s loop) + stronger teal radial glow at centre
2. **Hero layout** — two-column on desktop: text left, circular ZK avatar right with rotating dashed ring and ambient glow; "Add Photo" hint badge
3. **Skill icons** — `simpleicons.org` CDN icons for 22 skills + devicons for Java + custom sparkle SVG for Claude + first-letter badge fallback for skills with no icon
4. **About stat cards** — 3 teal-accented quick-fact cards below the paragraph
5. **Section numbers** — editorial `00 / … 05 /` prefix on every section label
6. **Featured badges** — teal pill badge on Habit Tracker App and Automated LinkedIn Job Applicator cards
7. **Card glow hover** — stronger `shadow-[0_0_32px_rgba(0,194,168,0.12)]` + `border-accent/50` on project cards; `shadow-[0_0_28px_rgba(0,194,168,0.1)]` on cert cards
8. **Footer** — replaced split layout with centred "Designed & Built by Zaid Khan © 2026"

---

## Design tokens

- Background: `#0d0d0d`
- Surface cards: `#161616`
- Borders: `#252525`
- Accent: `#00C2A8` (Tailwind class: `accent`)
- Font: Inter (Google Fonts via `next/font`)

---

## Key technical notes

- Skill icons use `<img>` tags (not Next.js `<Image>`) — `/* eslint-disable @next/next/no-img-element */` suppresses the lint rule so the build stays clean
- `ease: "easeOut" as const` required in Framer Motion v12 variant definitions (TypeScript literal widening fix)
- `@keyframes gridDrift` defined in `globals.css` drives the animated hero grid via inline `animation` style
- Favicon: `public/favicon.svg` (ZK initials in teal on dark) — avoids the `next/og` Windows path bug

---

## Build result

```
✓ Compiled successfully
✓ Types checked
✓ Static pages generated (5/5)

Route /   →  47.7 kB (First Load JS: 135 kB)
```

---

## To deploy to Vercel

1. Push the repo to GitHub
2. Import in vercel.com → auto-detects Next.js
3. No env vars or build config needed

## To update content

Edit `src/data/portfolio.ts` — all experience, projects, skills, and certifications live there.

## To add your photo

Replace the ZK avatar in `src/components/Hero.tsx` — swap the `<span>ZK</span>` block with a `<Image>` component pointing to your photo, keeping the surrounding `rounded-full` container.
