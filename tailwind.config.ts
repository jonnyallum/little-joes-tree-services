import type { Config } from "tailwindcss";

/**
 * Design system for Little Joe's Tree Services — FOREST edition.
 *
 * Green-only palette: deep forest greens (#0A3D2A → #1E5A44), rich emerald and
 * bright leaf highlights, muted moss, against clean white and a soft cool cream
 * (#F8F7F4) for content surfaces. No browns, no golds, no warm greys — every
 * accent, button, icon and heading is a shade of green. Built to sit over a
 * full-bleed, photorealistic Hampshire woodland backdrop. See docs/ui-revision.md.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Deep forest greens — the brand spine. Anchors from the brief:
        // 700 = #0A3D2A (deep), 500 = #1E5A44 (mid). Darker than 700 → footer,
        // hero scrim, CTA band. Lighter tints → borders, washes, hairlines.
        forest: {
          50: "#eef6f1",
          100: "#d2e9df",
          200: "#a3d2bd",
          300: "#6fb597",
          400: "#3d9070",
          500: "#1e5a44",
          600: "#184c3a",
          700: "#0a3d2a",
          800: "#073020",
          900: "#06281a",
          950: "#04190f",
        },
        // Rich emerald — the vivid accent: primary CTAs, links, active states.
        emerald: {
          300: "#5fdca0",
          400: "#2bbd7e",
          500: "#15a06a",
          600: "#0f8557",
          700: "#0b6c47",
        },
        // Bright leaf/lime highlight — glints, gradient tips, stars, god-ray hits.
        leaf: {
          300: "#b6e69a",
          400: "#8ed16a",
          500: "#6cbf45",
          600: "#54a234",
        },
        // Muted moss/sage — quiet borders, secondary fills, subtle accents.
        moss: {
          300: "#bccab2",
          400: "#8aa583",
          500: "#6b8a64",
          600: "#54704e",
        },
        // Soft cool cream — the calm light surface for cards and content boxes.
        cream: {
          50: "#f8f7f4",
          100: "#f0efe9",
          200: "#e4e3da",
          300: "#d3d2c6",
        },
        // Cool, faintly green-tinted neutral — body text and light-on-dark text.
        // (Replaces the old warm "bone"; same token name keeps usages working,
        // now with zero brown.)
        bone: {
          50: "#f6faf8",
          100: "#eef4f0",
          200: "#dde7e1",
          300: "#c4d2ca",
          400: "#97a99f",
          500: "#6e8278",
          600: "#51635a",
          700: "#3c4b44",
          800: "#2b3832",
          900: "#1f2a25",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.875rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 40, 26, 0.04), 0 4px 12px rgba(22, 40, 26, 0.06)",
        card: "0 1px 3px rgba(22, 40, 26, 0.05), 0 10px 30px -12px rgba(22, 40, 26, 0.18)",
        lift: "0 18px 40px -16px rgba(22, 40, 26, 0.32), 0 30px 60px -30px rgba(22, 40, 26, 0.22)",
        ring: "0 0 0 1px rgba(22, 40, 26, 0.06)",
        // Coloured glows for "pop" — emerald + leaf greens.
        "glow-emerald": "0 0 0 1px rgba(21,160,106,0.28), 0 8px 30px -6px rgba(21,160,106,0.45)",
        "glow-leaf": "0 0 0 1px rgba(142,209,106,0.24), 0 10px 36px -8px rgba(108,191,69,0.42)",
        "inner-top": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      maxWidth: { prose: "68ch" },
      letterSpacing: { brand: "0.16em" },
      backgroundImage: {
        "gradient-forest": "linear-gradient(135deg, #0a3d2a 0%, #1e5a44 50%, #06281a 100%)",
        // Emerald accent gradient (was bronze) — buttons, chips, accents.
        "gradient-emerald": "linear-gradient(120deg, #2bbd7e 0%, #15a06a 45%, #0b6c47 100%)",
        // Leaf→emerald glint.
        "gradient-leaf": "linear-gradient(120deg, #8ed16a 0%, #15a06a 100%)",
        // Animated headline glint — all green (lime → emerald).
        "gradient-headline": "linear-gradient(100deg, #b6e69a 0%, #8ed16a 28%, #5fdca0 62%, #2bbd7e 100%)",
        // Mesh / aurora backdrop for dark sections — green-only radials.
        "mesh-forest":
          "radial-gradient(60% 80% at 15% 10%, rgba(108,191,69,0.20) 0%, transparent 60%), radial-gradient(50% 60% at 85% 0%, rgba(43,189,126,0.20) 0%, transparent 55%), radial-gradient(70% 90% at 50% 110%, rgba(30,90,68,0.45) 0%, transparent 60%), linear-gradient(160deg, #0a3d2a 0%, #04190f 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", borderRadius: "42% 58% 56% 44% / 50% 44% 56% 50%" },
          "33%": { transform: "translate(24px,-18px) scale(1.08)", borderRadius: "60% 40% 42% 58% / 42% 58% 42% 58%" },
          "66%": { transform: "translate(-18px,16px) scale(0.96)", borderRadius: "40% 60% 60% 40% / 60% 42% 58% 40%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-x": {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(10px,-12px) rotate(6deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        "draw-in": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        blob: "blob 20s ease-in-out infinite",
        "blob-slow": "blob 28s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-x": "float-x 11s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        gradient: "gradient-shift 9s ease infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "spin-slow": "spin 34s linear infinite",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
