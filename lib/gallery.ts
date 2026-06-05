/**
 * Gallery photos, REAL job shots only (e.g. a few of the best from the Facebook
 * page). We never use stock photos for actual work; stock/texture is only used
 * for atmospheric depth (handled procedurally in the UI).
 *
 * HOW TO ADD PHOTOS:
 *   1. Drop optimised images into /public/photos (JPG/WebP, ~1600px wide max,
 *      compressed). Tip: run them through squoosh.app or `npm run process-logo`'s
 *      sharp pipeline.
 *   2. Add an entry below with a DESCRIPTIVE alt (what the photo actually shows, *      good for SEO and accessibility).
 *   3. The "Our work" gallery section appears automatically once there's at least
 *      one entry. Leave empty and it stays hidden.
 *
 * `span` lets a photo take more room in the bento ("tall" or "wide").
 */
export type GalleryPhoto = {
  src: string; // e.g. "/photos/oak-reduction-petersfield.jpg"
  alt: string; // e.g. "Crown reduction on a large oak in a Petersfield garden"
  caption?: string;
  span?: "tall" | "wide";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/services/stump-removal.jpg",
    alt: "A large tree stump cut low and ground out, ready for removal",
    caption: "Tree stump removal",
  },
  {
    src: "/services/hedge-cutting.jpg",
    alt: "A tall garden hedge cut straight and tidy",
    caption: "Hedge cutting",
  },
];

export const hasGalleryPhotos = galleryPhotos.length > 0;
