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
                className="surface-mesh group absolute inset-0 flex flex-col items-center justify-center gap-4 text-bone-50"
                aria-label="Play video gallery"
              >
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full">
                  <span aria-hidden className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md animate-pulse-glow" />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-forest-950 shadow-glow-emerald transition-transform duration-300 ease-spring group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
                  </span>
                </span>
                <span className="relative text-lg font-semibold">Watch our recent jobs</span>
                <span className="relative text-sm text-bone-300">
                  Tap to play, loads only when you click
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
