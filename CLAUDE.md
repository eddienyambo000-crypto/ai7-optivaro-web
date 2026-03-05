# CLAUDE.md — Ai7 OPTIVARO Website

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project
Single `index.html` file. All styles inline. Tailwind CSS via CDN. Mobile-first responsive.
This is the agency website for **Ai7 OPTIVARO** — a premium AI automation agency based in Kigali, Rwanda.

## Brand Assets
- Always check `brand_assets/` before designing.
- Logo: coming soon (placeholder for now — use text logo "Ai7 OPTIVARO")
- Brand guidelines: `brand_assets/brand-guidelines.md` — follow exactly.

## Local Server
- Always serve on localhost — never screenshot a `file:///` URL.
- Start: `node serve.mjs` (serves project root at `http://localhost:3000`)
- Do not start a second instance if already running.

## Screenshot Workflow
- Always screenshot from localhost: `node screenshot.mjs http://localhost:3000`
- Screenshots saved to `./temporary screenshots/screenshot-N.png` (auto-incremented)
- After screenshotting, read the PNG with the Read tool and analyze it.
- Do at least 2 comparison rounds. Fix spacing, colors, alignment, typography each pass.
- For animated/Three.js sections: do NOT use screenshot loop — just write the code and ask Eddie for feedback.

## Output Defaults
- Single `index.html`, all styles inline
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Three.js via CDN for animations
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Anti-Generic Guardrails
- **Colors:** Use exact brand hex values. Never default Tailwind palette (indigo-500, blue-600).
- **Shadows:** Layered, color-tinted shadows with low opacity. Never flat `shadow-md`.
- **Typography:** Inter for body, Space Grotesk or Syne for headings. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Layering system — base → elevated → floating surfaces.
- **Glass morphism:** Use frosted glass cards with `backdrop-blur` and border glow.

## Hard Rules
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary
- Do not stop after one screenshot pass
- Always test on localhost before any GitHub push
- Do not push to GitHub until Eddie explicitly says so
- When making animated components from 21st.dev: disable screenshot loop, just write the code
