# Little Joes Tree Services — Project Brief

> **Last updated:** June 2026
> **Project lead:** Jonny Allum
> **Client:** Joe — Little Joes Tree Services
> **Contact:** info@littlejoestreeservices.co.uk | 07519 744 790
> **Website:** https://littlejoestreeservices.co.uk
> **Repo:** https://github.com/jonnyallum/little-joes-tree-services

---

## What this project is

A full marketing takeover and website rebuild for Little Joes Tree Services, a Hampshire-based tree surgery business run by Joe. The aim is to generate more qualified local enquiries through a properly built website, Google Ads, optimised Google Business Profile, consistent social media content, and a repeatable content pipeline built around real jobs.

This is not a template website refresh. The brief is to build something that looks and performs like a proper premium local brand in 2026 — clean, fast, trustworthy, and genuinely useful to someone searching for a tree surgeon in Hampshire.

---

## The business

| Field | Detail |
|---|---|
| Business name | Little Joes Tree Services |
| Trading name (Facebook) | Little Joe's Tree Service |
| Owner | Joe |
| Phone | 07519 744 790 |
| Email | info@littlejoestreeservices.co.uk |
| Website | https://littlejoestreeservices.co.uk |
| Base location | Havant, Hampshire, PO9 5DS |
| Service region | Hampshire and surrounding areas |
| Facebook | https://www.facebook.com/profile.php?id=100064091166943 |
| Google Place ID | ChIJ1TFyb2GlSwRhFQt81c3w0Q |
| Google review link | https://search.google.com/local/writereview?placeid=ChIJ1TFyb2GlSwRhFQt81c3w0Q |
| YouTube playlist | https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0 |

---

## Services confirmed

All of the following have been confirmed from the Facebook page, van livery, and business profile. Do not invent additional services without checking with Joe.

- Tree surgery and crown reduction
- Tree removal (including dangerous and hazardous trees)
- Stump grinding — advertised from £70
- Hedge cutting and reduction
- Site clearance and overgrown land
- Garden clearance
- Landscaping and turfing
- Fencing
- Guttering *(listed on van — confirm with Joe whether still active)*
- Firewood cutting for customers
- Free estimates and free tree inspections
- 24/7 emergency call-outs

---

## Qualifications and trust signals

- NPTC / City & Guilds qualified *(certificates needed for badge display)*
- Fully insured *(certificate needed for badge display)*
- 94% recommend on Facebook from 24 reviews
- Always open / 24/7 emergency response

---

## Confirmed service areas

These towns have been confirmed from Facebook posts and the business listing:

**Core:** Havant, Porchester, Chichester, Waterlooville, Emsworth

**Wider Hampshire rural coverage (high woodland density):**
Petersfield, Liphook, Liss, East Meon, West Meon, Swanmore, Bishops Waltham, Droxford, Wickham, Horndean, Rowlands Castle, Clanfield, Buriton, Sheet, Steep

**Coastal and urban:**
Portsmouth, Fareham, Gosport, Eastleigh, Southampton, Winchester

**Strategy note:** Do not list all towns on every page. Use location landing pages for SEO coverage, a single clean sentence on the homepage, and Google Business Profile service areas for the rest. See `/docs/SEO-agent-prompt.md` for full detail.

---

## Budget and marketing scope

| Channel | Budget / Notes |
|---|---|
| Google Ads | ~£1,000/month total budget |
| Google Business Profile | Organic — optimise fully |
| Facebook | Organic content + occasional boost |
| Instagram | Set up and link to Facebook |
| YouTube | Playlist already exists — embed on site |
| Website | Full rebuild — see UI and SEO docs |

---

## Content assets

### Available now
- Logo files: see `/public/brand/` — two versions (transparent PNG + white background PNG)
- Facebook page with 417 followers, 24 reviews, 94% recommend
- Existing job photos (various, from Facebook)
- Videos filmed June 2026 by Jonny — to be uploaded and used for reels + site gallery
- YouTube playlist: PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0

### Still needed from Joe
- NPTC / City & Guilds certificate scans
- Insurance certificate
- Full confirmed service area list
- Confirmation on guttering service
- More job photos (before/after pairs)
- Short raw video clips from jobs — ideally 3 per job
- Customer names/permissions for testimonials
- Google Business Profile admin access
- Access to website hosting / CMS

### Ongoing weekly content request (send to Jonny)
- 5–15 job photos per week
- 2–5 short video clips per week
- For each job: town, service type, problem, result, customer happy to review?

---

## What the Facebook page tells us

Researched June 2026. Key findings:

- **Best performing content:** Stump grinder reel — 3K organic views, 15 likes. Stump content clearly resonates.
- **Highest ever reach:** Boosted promotional video — 69K views, 92 shares. Paid video works.
- **Tagline on van:** "Your local tree team" — use this everywhere.
- **Best copy already written by Joe:**
 - *"Rain or sunshine, we will get the job done"*
 - *"Fed up with no sunshine? Neighbours tree blocking the sun? We got you covered"*
 - *"You're concerned about any tree — do not leave it. Insurance will not pay out if it damages your property"*
- **Missing:** No before/after posts, no review posts, no consistent format, no Instagram link, no highlights set up.

---

## Brand direction

See `/docs/ui-revision.md` for full UI specification.

**Summary:**
- Logo: circular, heritage-inspired, deep forest green and warm bronze/gold
- Tagline: *Your local tree team*
- Tone: human, local, trustworthy, plain English — never corporate, never hype
- Visual: premium countryside-professional, 2026 modern — NOT a 2008 tradesman website
- Colours: deep forest green (#2D4A1E range), warm bronze/gold accent, soft off-white and stone neutrals
- Typography: modern premium — no cheesy rustic fonts

---

## File structure guide

```
/
├── README.md # Developer setup and orientation
├── PROJECT-BRIEF.md # This file — full project context
├── site-config.ts # All live URLs, keys, business data
├── /content/
│ └── homepage.md # Homepage copy — ready to implement
├── /public/
│ └── /brand/
│ ├── logo-transparent.png # Logo on transparent background
│ └── logo-white-bg.png # Logo on white background
└── /docs/
 ├── SEO-agent-prompt.md # Full technical SEO agent instructions
 ├── ui-revision.md # Full UI/design specification
 └── claude-code-prompt.md # Claude Code agent system prompt
```

---

## Agent permissions

All AI agents working on this project — including Claude Code — have permission to:

- Improve, extend, and restructure any content, copy, or configuration in this repo where it adds genuine value
- Suggest better approaches and implement them with clear comments
- Refactor code for performance, readability, or SEO benefit
- Add new files, components, or documentation where clearly useful
- Modify the README, this brief, and the SEO prompt if the site structure changes

Agents must NOT:
- Invent service details, qualifications, prices, or locations not confirmed in this brief
- Remove confirmed trust signals (NPTC, insurance, phone number, review stats)
- Change the tone away from plain, human, British English
- Introduce keyword stuffing, fake reviews, hidden text, or any black-hat SEO
- Make the website sound corporate, generic, or AI-written

---

## Key content rules for all agents

- Write in British English only — s not z, -our not -or, etc.
- Never use: "unlock", "elevate", "leverage", "seamless", "cutting-edge", "solutions"
- Never write in the third person about the business on customer-facing pages
- Always write for a real Hampshire homeowner, landlord, or local business customer
- Every page must have a clear phone number CTA: **07519 744 790**
- Every page must link to the Google review page where appropriate
- Free estimates should be mentioned naturally on every service page

---

## Priorities — what moves the needle most for this business

1. **Google Business Profile** — complete, photo-rich, keyword-relevant, review-generating
2. **Core service pages** — tree surgery, stump removal, hedge cutting, emergency — each with unique useful copy
3. **Location pages** — Petersfield, Liphook, Liss, East/West Meon, Swanmore etc. — genuinely useful, not just town-name-swapped
4. **Google Ads** — high-intent local searches, stump grinding and emergency work first
5. **Review generation** — after every job, send the Google review link
6. **Video content** — stump grinding reels are the organic winner, do more of them
7. **Website performance** — fast on mobile, clean Core Web Vitals, proper analytics

---

*This brief is a living document. Update it as the project progresses.*
