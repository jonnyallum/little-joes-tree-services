import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { galleryPhotos, hasGalleryPhotos } from "@/lib/gallery";

/**
 * "Our work" gallery, real job imagery in 16:9 tiles with a hover zoom and a
 * gradient caption. Self-hides until photos exist in lib/gallery.ts. Images are
 * lazy-loaded and pre-optimised, so it stays fast.
 */
export function Gallery() {
  if (!hasGalleryPhotos) return null;

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
              <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
              Our work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-shadow-forest font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Real jobs across <span className="text-gradient">Hampshire</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-shadow-forest mt-4 text-lg leading-relaxed text-bone-100">
              A few recent jobs, tree surgery, stump removal and hedge work, carried out
              across Hampshire, West Sussex and Surrey.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {galleryPhotos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 0.08}
              scale
              className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-forest-900/10 shadow-card"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
              />
              {photo.caption && (
                <>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-950/85 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-bone-50">
                    {photo.caption}
                  </p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
