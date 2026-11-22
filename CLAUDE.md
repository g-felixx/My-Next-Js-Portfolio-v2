# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production app: `npm run build`
- Start production server: `npm run start`
- Lint repository: `npm run lint`
- Lint one file: `npx eslint src/components/Navbar.tsx`
- Lint multiple files: `npx eslint src/app/page.tsx src/app/api/contact/route.ts`

## Tests

There is currently no test runner configured.

- No `test` script exists in `package.json`
- No Jest / Vitest / Playwright / Cypress config is present
- No single-test command exists yet

For meaningful changes, use:

- `npm run lint`
- `npm run build`

## Stack

- Next.js 16 App Router
- React 19
- TypeScript (`strict: true`)
- Tailwind CSS v4
- Framer Motion for animation
- next-themes for dark mode
- Radix/shadcn-style UI primitives under `src/components/ui`
- Resend for contact email delivery
- “Ask my résumé” chat widget in the hero (front end only — the RAG backend is built separately, see below)
- Fonts via `next/font/google`: Mona Sans (UI), JetBrains Mono (code/prompt), Pixelify Sans (mascot speech only)

## Architecture

### App shell

- `src/app/layout.tsx` owns global metadata, viewport config, JSON-LD injection, theme bootstrapping, skip link, and wraps the app with `SmoothScroll` and `Providers`.
- `src/app/providers.tsx` configures class-based theming via `next-themes` and mounts the global Sonner toaster.
- `src/app/page.tsx` is intentionally compositional: it stitches together the landing-page sections plus the floating mascot.

### Content model

The portfolio is mostly data-driven.

- `src/data/portfolio.ts` is the source of truth for personal info and project entries.
- Visible copy (hero, experience, skills, prompt widget, mascot lines…) lives in `src/lib/i18n/{en,pt,fr}.ts` and is typed by `src/lib/i18n/types.ts`. **Every new string must be added to all three locales and to the type.**
- When updating resume links, social links, project entries, or career facts, start here and then verify any dependent SEO behavior.

### SEO and metadata

SEO is centralized rather than scattered across sections.

- `src/lib/seo/site.ts` defines canonical site metadata, keywords, geo info, and identity fields.
- `src/lib/seo/jsonld.ts` builds the schema graph for Website, WebPage, Person, and project list entries.
- `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` consume that SEO layer.

### Homepage composition

The homepage is a single long-form landing page with section-based navigation.

- `Navbar` scrolls to hash sections and tracks the active section in view.
- Order: `HeroSection` → `TechMarquee` → `AboutSection` → `ExperienceSection` → `EducationSection` → `CertificationsSection` → `ProjectsSection` → `SkillsSection` → `AskCta` → `ContactSection`, plus `FloatingMascot` (fixed).
- Sections are presentation components backed by the i18n dictionaries and portfolio data.
- `SmoothScroll` installs Lenis globally and intercepts in-page hash navigation, so section links should use the existing scroll helpers instead of custom scrolling behavior.

### Ask-my-résumé widget and mascot

- `src/components/HeroPrompt.tsx` is the chat card in the hero: typewriter placeholder, auto-playing demo conversation, suggestion chips, rotating “thinking” lines, cited sources, `aria-live` log. The card can be enlarged to a full-screen dialog (button in its header, Esc / click outside / scroll down past the end to go back); on desktop, scrolling down from the top of the page opens it automatically once (`AUTO_EXPAND_ON_SCROLL` in that file turns it off). Conversation state lives in `useTwinChat`, shared by the inline and the full-screen `ChatPanel`.
- `src/lib/ai-twin-client.ts` is the **single seam to the backend**. `streamTwinReply()` currently returns a placeholder (“Demo mode”) reply; replace its body with a streaming `fetch("/api/chat", …)` that yields `{type:"text"}` / `{type:"source"}` chunks. The UI needs no other change. It also exports `PROMPT_FOCUS_EVENT`, which other components dispatch on `window` to focus the input.
- The mascot is a 48×48 pixel grid per pose (`idle`, `blink`, `point` = wave, `pointBlink`, `walkA/B`). Two characters live side by side with the same API: `src/components/pixel/sprites.cat.ts` (black cat with yellow eyes in the light theme, white cat with blue eyes and brown patches in the dark theme — one drawing, the theme swaps the palette) and `sprites.girl.ts` (Amanda, chibi, archived). `sprites.ts` is the switch: change `CHARACTER` there to swap the mascot everywhere. Keep every frame at 48×48 and export a head crop (`HEAD_BOX`) for avatars. Cell characters map to `--px-*` CSS variables in `globals.css` (light/dark palettes; the cat has its own keys F f u O Y y Q T b). `PixelSprite.tsx` renders it as crisp SVG; size it in multiples of 48px for sharp pixels.
- `Mascot.tsx` (hero/CTA, with blink), `MascotCallout.tsx` (“I built this AI with RAG” note + arrow), `FloatingMascot.tsx` (walks across the screen on scroll, parks at the nearest edge when idle, comments on the current section, click → back to the prompt).
- Demo/answer copy must stay faithful to the résumé; do not invent experience in `prompt.demo`.

### Contact flow

The contact form is split cleanly between client validation and server delivery.

- `src/components/ContactSection.tsx` manages the form UI, client-side validation, timeout handling, and toast feedback.
- `src/lib/contact.ts` defines the shared Zod schema and allowed contact reasons.
- `src/app/api/contact/route.ts` re-validates the payload, rate-limits submissions, builds sanitized email content, and sends via Resend.
- `src/lib/rate-limit.ts` provides the shared in-memory rate limiting helpers used by both API routes.

### Styling and UI primitives

- Global design tokens, cursors, utility classes, and theme variables live in `src/app/globals.css`. The look is GitHub-inspired: neutral surfaces, 1px borders, small radii, purple as the accent. `.glass*` utilities are flat bordered surfaces.
- Use theme tokens (`bg-secondary`, `border-border`, `text-muted-foreground`…) — never `white/N` or `black/N` for chrome, they break the light theme. The project gallery modal is the only intentionally dark-only surface (it scopes the `dark` class to itself).
- Motion language (from Mux): `ease-energetic` = `cubic-bezier(.7,0,.3,1)`, stepped caret blink, pop-in/rise-in keyframes (see `tailwind.config.ts`).
- Reusable low-level primitives are in `src/components/ui/`; prefer extending those before creating new base components.
- The site relies heavily on Tailwind utility classes plus a few shared helpers like `cn()` from `src/lib/utils.ts`.
- Motion and reduced-motion support are already wired into key components; preserve that behavior when editing animated UI.

## Environment variables

The app currently uses these environment variables:

- `RESEND_API_KEY`
- `CONTACT_EMAIL_FROM`
- `CONTACT_EMAIL_TO`
- `AI_MODEL` (reserved for the RAG backend)
- `LLM_API_KEY`
- `LLM_BASE_URL`

## Working conventions

- Use `npm`, not another package manager.
- Prefer `@/*` imports; `tsconfig.json` maps `@/*` to `src/*`.
- Preserve the local formatting style of the file you touch; there is no Prettier config.
- Default to server components; add `"use client"` only when hooks, browser APIs, animation, or event-driven UI require it.
- For backend/API changes, keep the existing pattern of Zod validation + `NextResponse.json(...)` + explicit status codes.
- If you change runtime behavior in a meaningful way, validate with `npm run lint` and `npm run build`.
