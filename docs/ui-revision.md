# UI Revision Direction — Little Joes Tree Services

> **Status:** Active specification — use this for all design and frontend decisions
> **Last updated:** June 2026
> **Triggered by:** New logo upgrade (see `/public/brand/`)

---

## Design goal

Create a world-class local service website with a strong branded identity, modern spacing, refined depth, elegant borders, soft shadows, excellent responsiveness, and polished animation.

The site should feel current, premium, and trustworthy without becoming corporate or flashy. It must look intentional, current, and visually strong while still being approachable and grounded.

---

## Visual direction

- Premium local service brand
- Modern countryside/outdoors professionalism
- Clean, spacious, sharp
- Restrained and confident
- Grounded, trustworthy, and high quality

**Reference:** Think premium countryside estate, artisan trade brand, or high-end outdoor company — not a letting agent, not a tech startup, not a budget tradesman.

---

## Brand cues from the logo

The logo is the anchor. The UI must modernise around it, not compete with it.

| Element | Direction |
|---|---|
| Primary colour | Deep forest green — `#2D4A1E` |
| Accent colour | Warm bronze/gold — `#B8860B` |
| Hover/light accent | Lighter gold — `#D4A853` |
| Main background | Warm off-white — `#F5F2EC` |
| Secondary background | Stone/cream — `#E8E2D9` |
| Secondary text | Muted warm grey — `#9E9088` |
| Dark surfaces | Deep green-charcoal — `#1A2E10` (NOT pure black) |
| Body text | Near-black — `#1C1C1A` |

All values are also in `site-config.ts` under `brand`.

---

## Typography

- **Headings:** Modern, premium weight serif or semi-serif with character
 - Suggestions: Playfair Display, Fraunces, Cormorant Garamond, DM Serif Display
 - Must feel contemporary, not rustic or cheesy
 - The logo already carries the heritage feel — the typography should modernise the brand
- **Body:** Clean, highly readable sans-serif — optimised for mobile readability
 - Suggestions: Inter, DM Sans, Geist, Outfit
 - Large enough to read comfortably on mobile without zooming
- **No:** Distressed fonts, fake handwriting, anything that looks like a 2008 trade website
- **No:** Generic AI-looking fonts or anything that reads as a template

---

## UI rules

- Use layered surfaces, not flat white boxes everywhere
- All cards, containers, and panels must have proper outlines and tasteful shadows
- Use a consistent border radius system — not overly rounded, not sharp square corners
- Use subtle depth and separation between sections
- Use elegant hover states and motion
- Prioritise premium composition and layout rhythm
- Make the gallery, reviews, and services feel editorial and branded
- Design mobile-first and make the mobile version feel just as premium as desktop
- Navigation must be clean, readable, and functional on all screen sizes
- Footer must feel structured and premium — not an afterthought

---

## Section-by-section direction

### Hero
- Must feel premium and properly framed — not a generic full-bleed photo with white text
- Use a real job photo (not stock) as the hero image
- Deep green overlay or elegant framing rather than a crude dark overlay
- H1 must be prominent and readable at all sizes
- Trust bar visible below hero (or bottom of hero) without scrolling on mobile
- Two CTAs: primary (Get a free quote) and secondary (Call number)

### Service cards
- Must feel substantial, useful, and well designed
- Not icon-in-a-circle with a paragraph — think more editorial
- Subtle hover lift and transition
- Clear link to service page
- Show a real job photo or a strong branded image per card where possible

### Testimonials / reviews
- Must look elegant and trustworthy
- Quote marks, customer name, location if available
- Subtle card design with proper shadow and border
- Not a generic carousel that screams template
- 94% Facebook recommendation rate should be displayed prominently near this section

### Gallery / video section
- Highly visual, clean, and polished
- Real job photos in a responsive masonry or editorial grid
- YouTube video section uses facade/thumbnail-first pattern (no heavy iframes on load)
- Click to load the video embed — do not render multiple iframes above the fold

### CTA sections
- Must feel high-value and well designed — not like an ad banner
- Deep green background (`#1A2E10` or `#2D4A1E`) with gold accent CTA button
- Clear phone number as clickable `tel:` link
- Short, confident copy — no filler

### Contact form
- Clean, well-spaced, premium form design
- Fields: Name, phone, email, postcode, message, option to attach photos
- Clear submit button in brand green/gold
- Form submission must fire a GA4 conversion event

### Footer
- Structured and premium — not cramped or cluttered
- Include: logo, phone, email, service area summary, links to main pages, social links
- Facebook link: https://www.facebook.com/profile.php?id=100064091166943
- Google review CTA: https://search.google.com/local/writereview?placeid=ChIJ1TFyb2GlSwRhFQt81c3w0Q
- Copyright line
- NPTC / insured badges if certificate images are available

---

## Motion and animation

- Smooth, restrained, high-end
- Reveal on scroll (subtle fade-in / slide-up)
- Subtle hover lift on cards and buttons
- Image zoom on hover where appropriate
- Clean transitions between states
- No gimmicky, bouncy, or distracting animation
- No animation that causes layout shift (CLS impact)
- Performance first — animation must not harm Core Web Vitals

---

## What to avoid completely

- Dated tradesman website aesthetics
- Bevelled buttons or glossy effects
- Harsh gradients
- Cheap stock-template layout
- Giant centred text blocks with no structure
- Overuse of icons in coloured circles
- Default WordPress-looking sections
- Builder template feel (Wix, Squarespace-looking)
- Anything that looks 2008, 2016, or AI-generic
- Stock photography of any kind — real job photos only
- Pure black backgrounds (`#000000`) — use `#1A2E10` dark surface instead
- Flat colour blocks with no depth or texture

---

## Mobile requirements

- Mobile-first design — not an afterthought desktop-to-mobile squeeze
- Phone number must be visibly tappable and render as a `tel:` link
- CTA buttons must be large enough to tap easily (minimum 44px touch target)
- Trust bar must be visible on mobile without scrolling
- Navigation must work cleanly on mobile (hamburger menu or similar)
- No horizontal scroll at any breakpoint
- Text must be readable without zooming
- Images must load in compressed, appropriately sized formats for mobile

---

## Overall standard

This site should look like a genuinely high-end modern local brand with proper art direction and frontend craft. It must feel intentional, current, and visually strong while still being approachable, grounded, and easy to contact.

If it looks like a template, it has failed. If it looks like it was built for a national brand, it has failed. It should look like it was built specifically for Little Joes Tree Services by someone who actually cares about the quality of the work.
