# Homepage Content

> **Status:** Ready to implement
> **Page:** / (root — homepage)
> **SEO title:** Little Joes Tree Services | Tree Surgery Hampshire
> **Meta description:** Tree surgery, stump grinding, hedge cutting, clearance and fencing across Hampshire. Fully insured, NPTC qualified, free estimates. 24/7 emergency call-outs.
> **Canonical:** https://littlejoestreeservices.co.uk/

---

## Hero section

**H1:**
Tree surgery and garden clearance across Hampshire

**Hero subtext:**
We do proper tree work for homeowners, landlords and businesses across Hampshire and the surrounding areas. Whether you need a tree reduced, a stump ground out, hedges cut back or a site cleared — we turn up, get it sorted safely, and leave the place tidy.

We are NPTC and City & Guilds qualified, fully insured, and we offer free estimates. If it is urgent, we also handle 24/7 emergency tree call-outs.

**Primary CTA button:** Get a free quote
**Secondary CTA:** Call 07519 744 790

**Hero image direction:**
Real job photo — before/after stump removal or dramatic tree surgery in a residential garden. Avoid stock photography entirely.

---

## Trust bar (below hero, above fold on mobile)

Four trust signals displayed as a horizontal strip:

- NPTC / City & Guilds Qualified
- Fully Insured
- Free Estimates
- 24/7 Emergency Call-Outs

---

## Intro section

At Little Joes Tree Service, we keep things simple. You tell us what needs doing, we come out, have a proper look, and give you honest advice on the best way to deal with it.

Some jobs are straightforward. Some need a bit more planning — especially where access is tight, branches are overhanging buildings, or a tree has become unsafe. Either way, the aim is the same: safe work, fair pricing, and a job done properly from start to finish.

---

## Why choose us

**H2:** A local Hampshire tree team you can rely on

We are not trying to dress it up as something it is not. We are a local tree team doing solid work for local people, and most customers want the same things — someone who answers the phone, turns up when they say they will, works safely, and leaves the job clean and tidy.

That is what we focus on.

We offer free estimates, we are fully insured, and we cover a wide range of tree and garden work across Hampshire and surrounding areas.

**Four proof points (display as feature cards):**
1. Qualified and insured — NPTC / City & Guilds trained, fully insured on every job
2. Free estimates — we come out, look at the job, and give you a clear honest price
3. 24/7 emergency — if a tree has come down or become dangerous, call us any time
4. Tidy work — we clear up properly and leave the site as we found it

---

## Services overview

**H2:** Our tree and outdoor services

We cover all the main jobs people usually ring about, from single-tree work in a back garden to larger clearance jobs.

**Service cards — link to individual service pages:**

### Tree Surgery
Crown reductions, pruning, shaping, and deadwood removal for trees of all sizes. Safe work, done properly.
[Link: /services/tree-surgery]

### Tree Removal
When a tree has to come down — safely, controlled, and with all the mess cleared away.
[Link: /services/tree-removal]

### Stump Grinding
Stumps gone from £70. We grind them out properly so you can use the space again.
[Link: /services/stump-grinding]

### Hedge Cutting
Overgrown hedges cut back neatly. We always check for nesting birds before we start.
[Link: /services/hedge-cutting]

### Site & Garden Clearance
Completely overgrown? We clear it back properly and leave it ready to use.
[Link: /services/site-clearance]

### Emergency Tree Work
Storm damage, fallen trees, dangerous branches. Call us any time — 24/7.
[Link: /services/emergency-tree-work]

### Fencing
Fencing installation and replacement, on its own or alongside tree work.
[Link: /services/fencing]

**CTA below services:**
Not sure what the job needs? Send over a few photos or ask us to come out and have a look. We will talk you through the best option without overcomplicating it.

[Get a free quote]

---

## Video section

**H2:** See the work in action

Short intro copy:
We post regular videos from our jobs — from stump grinding to tree removals and everything in between. Have a look to see the kind of work we get stuck into.

**Implementation:**
- Embed YouTube playlist using lazy-loaded thumbnail-first approach
- Playlist embed URL: https://www.youtube.com/embed/videoseries?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0
- Do NOT render multiple iframes on page load — use click-to-load or facade pattern
- CTA link: Watch more on YouTube → https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0

---

## Reviews and social proof

**H2:** Trusted by local customers

**Stats bar:**
- 94% recommend us — 24 reviews on Facebook

**Review CTA:**
Happy with our work? It means a lot when customers leave a review. It helps other people find us and helps us keep doing what we do.

[Leave us a Google review] → https://search.google.com/local/writereview?placeid=ChIJ1TFyb2GlSwRhFQt81c3w0Q

**Implementation note:**
Add real customer testimonials here as they are collected. Do not fabricate or invent reviews. Minimum 3 testimonials before this section goes live.

---

## Areas we cover

**H2:** Tree services across Hampshire and nearby areas

We carry out tree surgery and outdoor work across Hampshire and surrounding areas — including Havant, Emsworth, Waterlooville, Chichester, Petersfield, and many of the rural villages and woodland areas across South Hampshire.

If you are not sure whether we cover your area, just get in touch. We can usually let you know quickly and arrange a visit if needed.

**Implementation note:**
Do not list every town here — this is intentionally brief on the homepage. Individual location landing pages handle the SEO for specific towns. See `/docs/SEO-agent-prompt.md`.

---

## Final CTA section

**H2:** Need a quote for tree work?

If you need tree surgery, stump grinding, hedge cutting, clearance or fencing, get in touch for a free estimate. We are happy to come out, look at the job properly, and give you a clear price with no messing about.

Call **07519 744 790** or use the contact form to send over your details and a few photos of the job.

**CTA buttons:**
- Get a free quote (primary)
- Call 07519 744 790 (secondary — tel: link)
- Message us on Facebook → https://www.facebook.com/profile.php?id=100064091166943

---

## Notes for developers

- All copy above is final and approved — do not rewrite or paraphrase
- Phone number must always render as a clickable `tel:` link on mobile
- Google review link must open in a new tab
- YouTube embed must use lazy loading — no iframes on initial page render
- Trust bar should be visible above the fold on mobile without scrolling
- Service cards link to individual service pages which must exist before going live
- Do not add stock photography — real job photos only
- All images must have descriptive alt text (e.g. "Stump grinding in Havant garden" not "image1.jpg")
