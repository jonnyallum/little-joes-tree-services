// =============================================================================
// LITTLE JOES TREE SERVICES — SITE CONFIGURATION
// =============================================================================
// Single source of truth for all URLs, business data, and external links.
// Import this wherever you need business data — do not hardcode values elsewhere.
// Agents: you may extend this file but do not remove or change confirmed values
// without checking PROJECT-BRIEF.md first.
// =============================================================================

export const siteConfig = {

  // ---------------------------------------------------------------------------
  // Business identity
  // ---------------------------------------------------------------------------
  businessName: 'Little Joes Tree Services',
  tradingName: "Little Joe's Tree Service", // Used on Facebook
  tagline: 'Your local tree team',
  phone: '07519 744 790',
  phoneRaw: '07519744790', // For tel: links — no spaces
  email: 'info@littlejoestreeservices.co.uk',
  website: 'https://littlejoestreeservices.co.uk',
  baseLocation: 'Havant, Hampshire',
  postcode: 'PO9 5DS',
  county: 'Hampshire',
  country: 'England',
  region: 'Hampshire and surrounding areas',

  // ---------------------------------------------------------------------------
  // Social and external links
  // ---------------------------------------------------------------------------
  facebookUrl: 'https://www.facebook.com/profile.php?id=100064091166943',
  googlePlaceId: 'ChIJ1TFyb2GlSwRhFQt81c3w0Q',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ1TFyb2GlSwRhFQt81c3w0Q',
  googleMapsUrl: 'https://maps.google.com/?cid=ChIJ1TFyb2GlSwRhFQt81c3w0Q',

  // ---------------------------------------------------------------------------
  // YouTube
  // ---------------------------------------------------------------------------
  youtubePlaylistId: 'PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0',
  youtubePlaylistUrl: 'https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0',
  // Use this URL for embedded playlist players — lazy load, do not render multiple iframes above fold
  youtubePlaylistEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLmh5zDJCEdDclDC5r8phPDsORzpeB4m0',

  // ---------------------------------------------------------------------------
  // Analytics and tracking
  // ---------------------------------------------------------------------------
  // TODO: Insert GA4 Measurement ID once provided by client or set up
  ga4MeasurementId: '', // e.g. 'G-XXXXXXXXXX'
  // TODO: Insert Search Console verification meta tag value if needed
  searchConsoleVerification: '',

  // ---------------------------------------------------------------------------
  // Services — used for nav, schema, and service page generation
  // Confirm with Joe before adding or removing items
  // ---------------------------------------------------------------------------
  services: [
    {
      slug: 'tree-surgery',
      name: 'Tree Surgery',
      shortDescription: 'Professional tree surgery across Hampshire for homes and businesses.',
    },
    {
      slug: 'tree-removal',
      name: 'Tree Removal',
      shortDescription: 'Safe removal of dangerous, dead, or unwanted trees.',
    },
    {
      slug: 'stump-grinding',
      name: 'Stump Grinding',
      shortDescription: 'Stump grinding and removal from £70. Clean, tidy, and done properly.',
    },
    {
      slug: 'hedge-cutting',
      name: 'Hedge Cutting',
      shortDescription: 'Hedge cutting and reduction across Hampshire. Tidy results every time.',
    },
    {
      slug: 'site-clearance',
      name: 'Site Clearance',
      shortDescription: 'Overgrown sites and land cleared properly and left tidy.',
    },
    {
      slug: 'garden-clearance',
      name: 'Garden Clearance',
      shortDescription: 'Neglected gardens brought back to life. We clear, you enjoy.',
    },
    {
      slug: 'fencing',
      name: 'Fencing',
      shortDescription: 'Fencing installation and replacement across Hampshire.',
    },
    {
      slug: 'emergency-tree-work',
      name: 'Emergency Tree Work',
      shortDescription: '24/7 emergency call-outs for storm damage and dangerous trees.',
    },
  ],

  // ---------------------------------------------------------------------------
  // Service areas — used for location pages and GBP
  // Core = priority towns | Rural = high woodland density | Urban = city coverage
  // Strategy: use location landing pages for SEO, GBP service areas for maps,
  // and a single clean sentence on homepage. Do not list all towns everywhere.
  // ---------------------------------------------------------------------------
  serviceAreas: {
    core: [
      'Havant', 'Emsworth', 'Waterlooville', 'Porchester', 'Chichester',
    ],
    rural: [
      'Petersfield', 'Liphook', 'Liss', 'East Meon', 'West Meon',
      'Swanmore', 'Bishops Waltham', 'Droxford', 'Wickham', 'Horndean',
      'Rowlands Castle', 'Clanfield', 'Buriton', 'Sheet', 'Steep',
    ],
    urban: [
      'Portsmouth', 'Fareham', 'Gosport', 'Eastleigh', 'Southampton', 'Winchester',
    ],
  },

  // ---------------------------------------------------------------------------
  // Trust signals — display on every page
  // ---------------------------------------------------------------------------
  trust: {
    qualified: 'NPTC / City & Guilds qualified',
    insured: 'Fully insured',
    freeEstimates: true,
    emergency247: true,
    recommendRate: '94%',
    reviewCount: 24,
    reviewSource: 'Facebook',
  },

  // ---------------------------------------------------------------------------
  // Brand colours — match logo exactly
  // Use these as CSS custom properties or Tailwind config values
  // ---------------------------------------------------------------------------
  brand: {
    primaryGreen: '#2D4A1E',     // Deep forest green — primary
    accentGold: '#B8860B',       // Warm bronze/gold — accent
    lightGold: '#D4A853',        // Lighter gold for hover states
    offWhite: '#F5F2EC',         // Background — warm off-white
    stone: '#E8E2D9',            // Secondary background — stone
    warmGrey: '#9E9088',         // Muted warm grey for secondary text
    darkSurface: '#1A2E10',      // Deep green-charcoal for dark sections
    textDark: '#1C1C1A',         // Near-black for body text
  },

  // ---------------------------------------------------------------------------
  // SEO defaults — used as fallbacks if page-specific values are not set
  // ---------------------------------------------------------------------------
  seo: {
    defaultTitle: 'Little Joes Tree Services | Tree Surgery Hampshire',
    defaultDescription:
      'Tree surgery, stump grinding, hedge cutting, clearance and fencing across Hampshire. Fully insured, NPTC qualified, free estimates. 24/7 emergency call-outs.',
    defaultOgImage: '/brand/logo-white-bg.png',
    twitterHandle: '', // Add if Joe creates a Twitter/X account
    canonicalBase: 'https://littlejoestreeservices.co.uk',
  },

  // ---------------------------------------------------------------------------
  // Schema.org structured data — LocalBusiness
  // Rendered as JSON-LD on every page
  // ---------------------------------------------------------------------------
  schema: {
    type: 'LocalBusiness',
    additionalType: 'https://schema.org/TreeService',
    name: 'Little Joes Tree Services',
    description:
      'Professional tree surgery, stump grinding, hedge cutting, site clearance and fencing across Hampshire. NPTC/City & Guilds qualified, fully insured, free estimates, 24/7 emergency service.',
    telephone: '+447519744790',
    email: 'info@littlejoestreeservices.co.uk',
    url: 'https://littlejoestreeservices.co.uk',
    image: 'https://littlejoestreeservices.co.uk/brand/logo-white-bg.png',
    priceRange: '££',
    openingHours: 'Mo-Su 00:00-24:00', // 24/7
    address: {
      streetAddress: '',  // TODO: confirm full street address with Joe
      addressLocality: 'Havant',
      addressRegion: 'Hampshire',
      postalCode: 'PO9 5DS',
      addressCountry: 'GB',
    },
    geo: {
      // TODO: confirm exact coordinates
      latitude: 50.8534,
      longitude: -0.9823,
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100064091166943',
    ],
    areaServed: [
      'Havant', 'Emsworth', 'Waterlooville', 'Chichester', 'Porchester',
      'Petersfield', 'Liphook', 'Liss', 'Portsmouth', 'Fareham',
      'Hampshire',
    ],
  },

} as const

export type SiteConfig = typeof siteConfig
