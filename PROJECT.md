# Blueprint — Jade Polo's Portfolio

## What it is
A portfolio site for Jade Polo, positioned as a **Frontend Developer** (independent Digital Product Designer & Builder). Showcases app idea blueprints, services, and real project case studies.

Hero line: "From real-world problems to practical digital products."
CTAs: "Explore My Projects" / "Let's Work Together"

## Tech stack (do not change)
- React + TypeScript + Tailwind CSS + Vite
- Deployed on Vercel (free tier)
- Source of truth: this GitHub repo
- Do NOT migrate to Next.js or any other framework.
- Motion: use the existing `motion` package; do not add a second animation library.

## Design system
- Dark charcoal background with a teal accent
- Blueprint feel: subtle grid lines, layered/3D depth, clean typography
- Rounded cards, soft shadows, generous spacing
- Animations: smooth and subtle (fade-up on scroll, staggered children, hover depth, ~0.6s ease-out). Respect `prefers-reduced-motion`.
- Must look great on mobile first.

## Sections
1. Hero
2. Services: App Idea Blueprint, UI/UX & Product Design, Custom Web Applications, Workflow & Report Automation, App Improvement
3. Featured projects: Plotline, Assured Capture, and Deaf Contact Record. Use real product screens or live demos, and clearly identify seeded sample data; do not use generated concept visuals as product evidence.
4. Skills & tools
5. Process: Understand → Plan → Build → Test → Refine
6. About and contact

## Content rules
- Only real, verifiable content. No fake testimonials, stats, clients, or results.
- Do not re-add the old generated concept visuals.
- Correct contact details:
  - Email: jdpolo.1218@gmail.com
  - LinkedIn: https://www.linkedin.com/in/jade-polo-a46833411

## Current status
- Public Vercel deployment is reachable; the visual direction is the dark, teal-accented Blueprint system.
- Portfolio content, metadata, and contact links were aligned on 2026-11-17.
- Plotline is shown as a client-side demo with seeded sample data and browser persistence.
- Assured Capture and Deaf Contact Record have live interactive previews; their project detail image slots still need verified screenshots or walkthrough media.

## Next steps
1. Replace remaining placeholder project-detail visuals with verified app screenshots or walkthrough clips.
2. Review mobile layouts and run Lighthouse for performance, accessibility, and SEO.
3. Update the GitHub repository homepage field to the canonical Lemon Vercel URL.
4. Consider a custom domain (optional).

## Rules for AI tools
- Read this file first before making changes.
- Keep changes small and focused; one feature or fix at a time.
- Do not rename, move, or delete existing files without asking.
- Do not change the tech stack or install large new dependencies without asking.
- Never put API keys in code; use environment variables.
- After changes, list which files were edited.

## Workflow
Google AI Studio → GitHub → v0 (UI work, on a separate branch) → back to AI Studio. Always pull the latest repo before editing in any tool. Commit after every working change.

## Last updated
2026-11-17
