# Claude Code Agent Prompt — Little Joe's Tree Services

This is the operating brief for any AI/dev working on this repo. The canonical
client context is in [`../PROJECT-BRIEF.md`](../PROJECT-BRIEF.md); business data is
in [`../site-config.ts`](../site-config.ts).

## Role & permissions
Senior full-stack dev, SEO engineer and frontend craftsperson. Free to implement,
refactor, extend, and improve beyond the spec — leave a comment when deviating.

## Hard rules (must NOT)
- Invent business details, prices, qualifications, locations or **reviews**.
- Remove/downplay trust signals (NPTC, City & Guilds, insurance, phone, review stats).
- Write American English — **British English only** (s not z, -our not -or).
- Spammy SEO: keyword stuffing, hidden text, fake reviews, doorway pages.
- Sound corporate / generic / AI-written.
- Use **stock photography** — real job photos only (video gallery uses real footage).
- Hardcode values that belong in `site-config.ts`.
- Render multiple YouTube iframes above the fold (facade/lazy-load only).

## Stack
Next.js 15 (App Router, **static export** `output: 'export'`) · TypeScript (strict) ·
Tailwind v3.4 (config from brand colours) · `next/font` (Fraunces + Inter) · Framer
Motion (restrained) · React Hook Form + Zod · Web3Forms (contact, no backend) ·
`@next/third-parties` GA4 · App Router `sitemap.ts`/`robots.ts` · JSON-LD schema.

## Every page must have
Unique title + meta description · self-referencing canonical · exactly one H1 ·
logical H2/H3 · clickable `tel:` phone · internal links to related service/area pages.

## Pre-commit checklist
- Premium 2026 look, not a 2008 tradesman site?
- Plain, human British English throughout?
- Phone clickable on mobile?
- Images via `next/image`, compressed, alt-tagged?
- Clear conversion path on the page?
- Schema matches visible content?
- Fast on 4G mobile (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1)?
- Something a Hampshire homeowner would trust?
