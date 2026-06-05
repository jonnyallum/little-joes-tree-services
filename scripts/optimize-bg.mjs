/**
 * optimize-bg.mjs — one-off: turn the sourced woodland photo into optimised,
 * lightly green-graded background assets for the site-wide forest backdrop.
 *
 * Source: woodland with god-rays + ferns, via Pexels (free licence, no
 * attribution required). Run:  node scripts/optimize-bg.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = ".tmp_img/source.jpg";
const OUT = "public/photos";
mkdirSync(OUT, { recursive: true });

// A very gentle grade: a touch more saturation, barely darker. The photo is
// already bright with strong god-rays — we keep it photorealistic (no filter look).
const grade = (img) => img.modulate({ saturation: 1.05, brightness: 0.97 });

const jobs = [
  // Desktop / large screens — landscape crop from the (portrait) source,
  // favouring the upper canopy + sun-burst. Sits under a green scrim.
  { name: "woodland", resize: { width: 1920, height: 1180, fit: "cover", position: "top" }, webpQ: 62, jpgQ: 74 },
  // Mobile — keep the full portrait scene (sun-burst through to the fern floor).
  { name: "woodland-mobile", resize: { width: 1080 }, webpQ: 70, jpgQ: 76 },
];

for (const j of jobs) {
  await grade(sharp(SRC).resize(j.resize))
    .webp({ quality: j.webpQ })
    .toFile(`${OUT}/${j.name}.webp`);
  await grade(sharp(SRC).resize(j.resize))
    .jpeg({ quality: j.jpgQ, mozjpeg: true })
    .toFile(`${OUT}/${j.name}.jpg`);
  console.log(`✓ ${j.name} webp+jpg`);
}
console.log("done");
