"use client";

import { useState } from "react";
import { Play, Youtube, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { TrackedExternal } from "./tracked";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/site-config";

/**
 * Video gallery using a FACADE pattern: nothing from YouTube loads until the
 * user clicks play. This keeps the initial render light (no heavy iframes above
 * or below the fold) while still featuring real footage of the team's work.
 * See docs/live-site-links + claude-code-prompt: never render multiple YouTube
 * iframes on first paint.
 */
export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section tone="transparent" id="our-work">
      <Container size="wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            onDark
            eyebrow="See our work"
            title="Real jobs, filmed on site"
            lead="Have a look at the team in action across Hampshire, reductions, removals, clearances and more."
          />
          <TrackedExternal
            href={siteConfig.youtubePlaylistUrl}
            event="youtube_play"
            asButton
            variant="outline"
            size="md"
            ariaLabel="Watch more on YouTube"
          >
            <Youtube className="h-4 w-4 text-emerald-600" aria-hidden />
            Watch more on YouTube
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </TrackedExternal>
        </div>

        <div className="border-gradient mt-10 overflow-hidden rounded-3xl shadow-lift">
          <div className="relative aspect-video w-full">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`${siteConfig.youtubePlaylistEmbedUrl}&autoplay=1&rel=0`}
                title="Little Joe's Tree Services, our work"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => {
                  trackEvent("youtube_play", { location: "gallery_facade" });
                  setPlaying(true);
                }}
                className="group absolute inset-0 block overflow-hidden"
                aria-label="Play Little Joe's Tree Services video on YouTube"
              >
                <picture>
                  <source srcSet="/video/youtube-poster.webp" type="image/webp" />
                  <img
                    src="/video/youtube-poster.jpg"
                    alt="Little Joe's Tree Services on YouTube, tap to watch"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
                  />
                </picture>
                {/* darken slightly on hover for feedback */}
                <span aria-hidden className="absolute inset-0 bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/25" />
                {/* clear play affordance + hover hint */}
                <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-forest-950/75 px-4 py-2 text-sm font-semibold text-white shadow-soft ring-1 ring-white/15 backdrop-blur-sm">
                  <Play className="h-4 w-4 fill-current text-leaf-400" aria-hidden />
                  Tap to watch on YouTube
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
