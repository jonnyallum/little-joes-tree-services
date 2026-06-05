# Project Brief — Little Joe's Tree Services

> Client context and source of truth for content decisions. Read this before
> making changes. Business **data** lives in [`site-config.ts`](./site-config.ts);
> this document explains the *why* and flags what still needs the client to confirm.

---

## The business

Little Joe's Tree Services is a Hampshire-based tree surgery and outdoor-services
business serving homeowners, landlords and commercial customers. It is a local,
hands-on operation — "Hampshire's local tree team" — not a national franchise.

The website's job: rank well for local tree-surgery searches across Hampshire,
convert local enquiries (calls + form), and look genuinely premium in 2026.

## Confirmed facts (safe to state on the site)

| Fact | Value | Source |
| --- | --- | --- |
| Phone | **07519 744 790** | Profile + indexed site |
| Email | info@littlejoestreeservices.co.uk | Project brief |
| Qualifications | **NPTC** and **City & Guilds** | Facebook profile |
| Insurance | **Fully insured** | Facebook profile |
| Free estimates | Yes | Profile + indexed site |
| Emergency | **24/7 emergency call-outs** | Facebook profile |
| Reviews | **94% recommend, 24 reviews** (Facebook) | Facebook profile |
| Service area | Hampshire + surrounding areas | Indexed site |

### Services (confirmed)
Tree surgery · Tree removal · Stump grinding / removal · Hedge cutting ·
Site clearance · Garden clearance · Fencing · Emergency tree work.

### Areas (named on the indexed listing)
Portsmouth, Havant, Fareham, Southampton, Winchester, Andover, Aldershot,
Basingstoke, Farnborough, Fleet, Gosport, Eastleigh, Emsworth, Hook,
Waterlooville, Alton, Petersfield, Whiteley, Romsey, Horndean, Liphook, Hythe,
Hedge End, Denmead. The eight highlighted on the homepage: Portsmouth, Havant,
Fareham, Southampton, Winchester, Emsworth, Waterlooville, Petersfield.

### Live links (use verbatim — in `site-config.ts`)
- Facebook: `https://www.facebook.com/profile.php?id=100064091166943`
- Google review: `https://search.google.com/local/writereview?placeid=ChIJ1TFyb_2GlSwRhFQt81c3w0Q`
- YouTube playlist: `https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsO_RzpeB4m0`

## ⚠️ To confirm before go-live (do NOT invent)

1. **Business name styling** — logo reads "LITTLE JOES TREE SERVICES" (plural, no
   apostrophe); approved copy uses "Little Joe's Tree Service" (singular). The site
   uses **"Little Joe's Tree Services"** as the brand name and keeps approved copy
   verbatim. Confirm the exact trading name.
2. **Domain** — assumed `www.littlejoestreeservices.co.uk`. The indexed site
   reportedly returned NXDOMAIN, so confirm the live domain and set
   `NEXT_PUBLIC_SITE_URL`.
3. **Registered address** — none confirmed. Schema uses region (Hampshire) + GB
   only. Add a full address if the business has a premises (improves local SEO).
4. **Real reviews** — we show the verified *aggregate* (94% / 24) but no individual
   quotes (none supplied). Paste genuine reviews into `lib/reviews.ts` when available.
5. **Real job photos** — no stock imagery is used. Service/area pages are ready for
   real photos. The video gallery uses the genuine YouTube playlist.
6. **GA4 Measurement ID** and **Search Console** verification — see README.
7. Whether "landscaping" / "gardening services" from the old indexed result should
   also be promoted (currently not listed as services).

## Tone & content rules

- **British English only** (s not z, -our not -or). Plain, human, no jargon.
- Never: "unlock", "elevate", "leverage", "seamless", "cutting-edge", "solutions",
  "at the end of the day". No corporate/AI voice. Second person, not third.
- Never invent prices, qualifications, reviews, locations or guarantees.
- Approved copy lives in [`content/homepage.md`](./content/homepage.md). Where that
  draft contained notes written *to the copywriter* (e.g. "the Facebook profile
  states…"), those have been rendered as their plain customer-facing intent in the
  implementation — the underlying facts are unchanged.

## Design direction

Premium 2026 local-service brand built around the logo: **deep forest green** +
**warm bronze/gold**, warm neutrals, layered surfaces, tasteful depth, restrained
motion. Full direction in [`docs/ui-revision.md`](./docs/ui-revision.md).

## SEO direction

Technical cleanliness, unique service + location pages, honest schema, strong Core
Web Vitals, no spam. Full direction in [`docs/SEO-agent-prompt.md`](./docs/SEO-agent-prompt.md).
