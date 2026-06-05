/**
 * ForestBackdrop — the site-wide, full-bleed photorealistic Hampshire woodland
 * scene. A single fixed layer behind every section (one image decode, GPU-cheap),
 * with a deep-green scrim (in globals.css `.forest-backdrop::after`) that keeps
 * the whole page cohesively forest-toned and guarantees contrast for the white
 * and cream content cards that float over it.
 *
 * Photo: Lukasz Szmigiel via Unsplash (free licence). Optimised by
 * scripts/optimize-bg.mjs → public/photos/woodland*.{webp,jpg}.
 */
export function ForestBackdrop() {
  return (
    <div className="forest-backdrop" aria-hidden="true">
      <picture>
        {/* Phones — lighter payload (primary audience). */}
        <source media="(max-width: 640px)" type="image/webp" srcSet="/photos/woodland-mobile.webp" />
        <source media="(max-width: 640px)" srcSet="/photos/woodland-mobile.jpg" />
        {/* Larger screens. */}
        <source type="image/webp" srcSet="/photos/woodland.webp" />
        <img
          src="/photos/woodland.jpg"
          alt=""
          decoding="async"
          // eslint-disable-next-line @next/next/no-img-element
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
