# Little Joes Tree Services — Website

> **Client:** Joe — Little Joes Tree Services
> **Website:** https://littlejoestreeservices.co.uk
> **Repo:** https://github.com/jonnyallum/little-joes-tree-services
> **Project lead:** Jonny Allum
> **Contact:** info@littlejoestreeservices.co.uk | 07519 744 790
> **Stack:** Next.js 14+ / TypeScript / Tailwind CSS

---

## What this is

Full website rebuild and marketing infrastructure for Little Joes Tree Services, a Hampshire-based tree surgery business. The project covers the website, SEO, Google Ads, Google Business Profile, social media content, and brand.

---

## Repository structure

```
/
├── README.md                    ← You are here
├── PROJECT-BRIEF.md             ← Read this first — full client and project context
├── site-config.ts               ← Single source of truth for all business data
├── /content/
│   └── homepage.md              ← Approved homepage copy — implement as written
├── /public/
│   └── /brand/
│       ├── BRAND-NOTES.md       ← Logo usage, colours, typography, favicon spec
│       ├── logo-transparent.png ← Upload here
│       └── logo-white-bg.png    ← Upload here
└── /docs/
    ├── SEO-agent-prompt.md      ← Full technical SEO specification
    ├── ui-revision.md           ← Full UI and design specification
    └── claude-code-prompt.md    ← Claude Code system prompt — read before coding
```

> Once the Next.js app is scaffolded, the `/app`, `/components`, and other code directories will be added here.

---

## Quick start for developers

```bash
# Clone the repo
git clone https://github.com/jonnyallum/little-joes-tree-services.git
cd little-joes-tree-services

# Install dependencies (once app is scaffolded)
npm install

# Run dev server
npm run dev
```

Before writing a single line of code:
1. Read `PROJECT-BRIEF.md` — understand the client, the services, and what matters
2. Check `site-config.ts` — use it, never hardcode business data
3. Read `docs/ui-revision.md` — every design decision must align with it
4. Read `docs/SEO-agent-prompt.md` — every SEO decision must align with it
5. Read `docs/claude-code-prompt.md` — if you are using Claude Code, this is your system prompt

---

## The business at a glance

| | |
|---|---|
| Business | Little Joes Tree Services |
| Owner | Joe |
| Base | Havant, Hampshire |
| Phone | 07519 744 790 |
| Email | info@littlejoestreeservices.co.uk |
| Services | Tree surgery, removal, stump grinding, hedge cutting, clearance, fencing, emergency |
| Qualifications | NPTC / City & Guilds |
| Insurance | Fully insured |
| Hours | 24/7 (emergency call-outs) |
| Reviews | 94% recommend — 24 Facebook reviews |
| Stump grinding from | £70 |

---

## Key links

| Resource | URL |
|---|---|
| Live website | https://littlejoestreeservices.co.uk |
| Facebook page | https://www.facebook.com/profile.php?id=100064091166943 |
| Google review link | https://search.google.com/local/writereview?placeid=ChIJ1TFyb2GlSwRhFQt81c3w0Q |
| YouTube playlist | https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0 |
| YouTube embed URL | https://www.youtube.com/embed/videoseries?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0 |

All of these are also in `site-config.ts`. Always pull from there in code.

---

## Brand colours (quick reference)

| Token | Hex | Use |
|---|---|---|
| Primary green | `#2D4A1E` | Nav, headings, dark backgrounds |
| Accent gold | `#B8860B` | CTAs, highlights, borders |
| Off-white | `#F5F2EC` | Main page background |
| Dark surface | `#1A2E10` | Dark sections (not pure black) |
| Body text | `#1C1C1A` | All body copy |

Full palette is in `site-config.ts` → `brand`.

---

## AI agent notes

This repo is designed to work with multiple AI agents. Each has a dedicated prompt file:

| Agent | File | Scope |
|---|---|---|
| Claude Code | `docs/claude-code-prompt.md` | Full-stack implementation |
| SEO agent | `docs/SEO-agent-prompt.md` | Technical SEO and rankings |
| Design agent | `docs/ui-revision.md` | UI, visual design, brand |
| Any agent | `PROJECT-BRIEF.md` | Business context and rules |

**All agents have permission to improve the codebase, add value, and suggest better approaches.** They must not invent business facts, change the tone to corporate/American, or introduce spammy SEO.

---

## Content rules (for any agent or human writing copy)

- British English only — s not z, -our not -or
- Plain, human, conversational tone — written for Hampshire homeowners
- No corporate jargon: no “unlock”, “elevate”, “seamless”, “cutting-edge”, “solutions”
- Phone number on every page — always a clickable `tel:` link
- Free estimates mentioned naturally on every service page
- Real job photos only — no stock photography
- Do not invent services, qualifications, prices, or locations

---

## TODO — immediate next steps

- [ ] Upload logo files to `/public/brand/`
- [ ] Scaffold Next.js app
- [ ] Add GA4 Measurement ID to `site-config.ts`
- [ ] Add Search Console verification to `site-config.ts`
- [ ] Confirm full street address with Joe (for schema)
- [ ] Get Google Business Profile admin access
- [ ] Get website hosting / CMS access
- [ ] Confirm guttering is still an active service
- [ ] Collect NPTC / insurance certificate scans for badge display
- [ ] Build core service pages
- [ ] Build priority location pages (Petersfield, Liphook, Liss, East/West Meon)
- [ ] Set up Instagram and link to Facebook
- [ ] Set up review request workflow after every job

---

*Built by Jonny Allum. All copy and configuration © Little Joes Tree Services 2026.*
