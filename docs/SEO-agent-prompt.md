# SEO Agent Prompt — Little Joes Tree Services

> **Agent type:** Technical SEO and website optimisation
> **Scope:** littlejoestreeservices.co.uk
> **Language:** British English only
> **Last updated:** June 2026

---

## Agent objective

Make the website technically sound, easy for Google to crawl, properly tracked, locally relevant, and stronger than nearby competitors in Hampshire without using spam.

Follow Google Search Essentials. Do not use keyword stuffing, doorway pages, fake reviews, hidden text, or any other black-hat tactic. Focus on relevance, technical cleanliness, local trust signals, and useful service content.

---

## What actually moves the needle for this business

1. **Google Analytics 4 + Search Console** — so we can measure what pages and queries are working
2. **Clean sitemap, robots.txt, canonicals and indexing** — mixed crawl/index signals waste effort
3. **Strong individual service pages and useful town pages** — specifically recommended for tree surgery lead generation
4. **Google Business Profile work, reviews, and consistent local trust signals**
5. **Core Web Vitals and image performance** — especially on mobile

---

## Task list

### 1. Google Analytics 4
- Add the GA4 tag sitewide using the correct Measurement ID (see `site-config.ts` — `ga4MeasurementId`)
- Confirm page views fire correctly on all main pages
- Set up conversion events: contact form submission, click-to-call, WhatsApp click, quote request
- Keep tracking lean — excessive third-party scripts hurt performance

### 2. Google Search Console
- Ensure the site can be verified (meta tag value in `site-config.ts` — `searchConsoleVerification`)
- Generate and expose a valid XML sitemap at `/sitemap.xml`
- Add sitemap location to `robots.txt`
- Prepare for sitemap submission in Search Console

### 3. XML sitemap
- Generate `sitemap.xml` automatically from all live indexable pages
- Include only final canonical URLs — not redirects, parameters, duplicates, or thin utility pages
- Include `lastmod` values where possible
- Keep sitemap URLs aligned with canonical tags

### 4. robots.txt
- Create a clean `robots.txt`
- Allow crawling of all public pages needed for ranking
- Disallow: admin, preview, staging, login, cart, and any private utility areas
- Declare the sitemap URL inside `robots.txt`
- Do not block important CSS, JS, or image files needed for rendering

### 5. Canonical tags
- Add self-referencing canonicals on all indexable pages
- Ensure each canonical points to the preferred final URL
- Prevent duplicate versions caused by trailing slashes, www/non-www, http/https, parameters, or duplicate service/location URLs
- Canonical tags must match sitemap entries

### 6. Local SEO foundations
- Add clear NAP: business name, phone number, service area, business type — see `site-config.ts`
- Create individual service pages — see service list in `site-config.ts`
- Create location/town pages only where each page has unique and genuinely useful content (see Location page strategy below)
- Align website NAP with Google Business Profile

### 7. Structured data (schema.org)
- Implement `LocalBusiness` schema on every page — base values in `site-config.ts` under `schema`
- Add `Service` schema on individual service pages
- Add `FAQPage` schema only where FAQ content is genuinely visible on the page
- Add `BreadcrumbList` schema where breadcrumbs exist
- Do not add schema not supported by visible page content

### 8. On-page SEO
- Every important page: one clear H1, logical H2/H3 structure
- Add internal links between related services and location pages
- Optimise image alt text with plain descriptive language (e.g. "Stump grinding in Havant garden" not "image.jpg")
- Service pages must answer: what the service is, when people need it, areas covered, how to get a quote

### 9. Technical SEO
- All important pages return 200 status codes
- Fix broken internal links
- Redirect old/duplicate URLs cleanly to preferred version
- No indexable thin pages, soft 404s, or crawl traps
- Clean, readable URL structure

### 10. Page speed and Core Web Vitals
- Target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1
- Compress and properly size images
- Lazy-load non-critical images
- Reduce unnecessary scripts and embeds
- Preload important fonts if needed
- YouTube embeds must use facade/lazy-load pattern — never multiple iframes above the fold

### 11. Image and media SEO
- Compress images before upload
- Use descriptive filenames (e.g. `stump-grinding-havant.jpg`)
- Add alt text describing the real job shown
- Important job photos must appear on relevant service and location pages

---

## Page structure to build

### Core pages
| Page | URL | H1 target |
|---|---|---|
| Homepage | `/` | Tree surgery and garden clearance across Hampshire |
| Tree Surgery | `/services/tree-surgery` | Tree surgery in Hampshire |
| Tree Removal | `/services/tree-removal` | Tree removal in Hampshire |
| Stump Grinding | `/services/stump-grinding` | Stump grinding and removal in Hampshire |
| Hedge Cutting | `/services/hedge-cutting` | Hedge cutting in Hampshire |
| Site Clearance | `/services/site-clearance` | Site clearance in Hampshire |
| Garden Clearance | `/services/garden-clearance` | Garden clearance in Hampshire |
| Fencing | `/services/fencing` | Fencing in Hampshire |
| Emergency Tree Work | `/services/emergency-tree-work` | Emergency tree work in Hampshire |
| About | `/about` | About Little Joes Tree Service |
| Contact | `/contact` | Contact Little Joes Tree Service |
| Reviews | `/reviews` | Customer reviews |
| FAQ | `/faq` | Frequently asked questions |

### Location pages strategy

**Important:** Do NOT create dozens of thin location pages with only the town name swapped out. Each location page must have unique, locally useful content.

Build location pages for these priority areas first:

| Town | Why |
|---|---|
| Petersfield | High woodland density, South Downs proximity, confirmed service area |
| Liphook | Rural, forested, underserved digitally |
| Liss | Village with large gardens and mature trees |
| East Meon / West Meon | High-value rural properties, woodland |
| Swanmore / Bishops Waltham | Woodland villages, large garden jobs |
| Chichester | Confirmed from Facebook location tag |
| Emsworth | Close to base, coastal |
| Waterlooville | Urban/suburban, high search volume |

**Location page template structure:**
- H1: Tree surgery in [Town]
- Intro: 2–3 sentences referencing the local area specifically (woodland, property type, local landmarks where natural)
- Services list relevant to that area
- Call to action with phone number
- Unique local paragraph — NOT just the town name swapped in
- Internal links to related service pages
- Schema: LocalBusiness with `areaServed` set to that town

---

## Page title and meta description templates

| Page | Title | Meta description |
|---|---|---|
| Home | Little Joes Tree Services \| Tree Surgery Hampshire | Tree surgery, stump grinding, hedge cutting, clearance and fencing across Hampshire. Fully insured, NPTC qualified, free estimates. 24/7 emergency call-outs. |
| Tree Surgery | Tree Surgery Hampshire \| Little Joes Tree Services | Safe, tidy tree surgery across Hampshire for homes and businesses. Free estimates from a qualified, fully insured local team. |
| Tree Removal | Tree Removal Hampshire \| Safe Local Tree Work | Professional tree removal in Hampshire for damaged, dangerous or unwanted trees. Safe work, tidy finish and free estimates. |
| Stump Grinding | Stump Grinding Hampshire \| From £70 | Stump grinding and removal across Hampshire from £70. Clear old stumps properly and make your garden usable again. |
| Hedge Cutting | Hedge Cutting Hampshire \| Hedge Trimming and Reduction | Hedge cutting and reduction across Hampshire. From regular trimming to overgrown hedge clearance, done safely and neatly. |
| Site Clearance | Site Clearance Hampshire \| Overgrown Land Cleared | Site and garden clearance in Hampshire for overgrown outdoor spaces, plots and problem areas. Free estimates available. |
| Fencing | Fencing Hampshire \| Garden and Boundary Fencing | Fencing services in Hampshire for damaged, tired or replacement fencing. Free estimate available. |
| Emergency | Emergency Tree Work Hampshire \| 24/7 Call-Outs | Emergency tree work across Hampshire. Call for urgent help with storm damage, dangerous branches and unstable trees. |
| About | About Little Joes Tree Service \| Hampshire Tree Team | Local Hampshire tree team offering tree surgery, stump removal, hedge cutting, clearance and fencing. Qualified, insured and easy to deal with. |
| Contact | Contact Little Joes Tree Service | Get in touch for a free estimate on tree surgery, stump grinding, hedge cutting, clearance or fencing across Hampshire. |

---

## Reporting output required

After completing work, produce:
1. Checklist of what has been completed
2. List of issues found and fixed
3. List of items still needing manual input (GA4 ID, Search Console verification, missing content)
4. Prioritised next-steps split into: quick wins | technical fixes | longer-term ranking work

---

## Rules

- Do not chase top of Google with gimmicks
- Do not create dozens of duplicate town pages with only the place name swapped out
- Do not mark pages as indexable unless they deserve to rank
- Do not add schema not supported by visible page content
- Do not block important pages from crawling by mistake
- Keep everything human, local, and practical
- Write in British English only — s not z
- Nobody can honestly promise top of Google. The right framing is: maximise the site's ability to rank and convert locally
