/**
 * Logo asset pipeline.
 *
 * The supplied logos are JPEGs (the "transparent" one has a checkerboard baked
 * in, so it isn't usable). This script takes the clean white-background logo and:
 *   1. keys out the white background to true transparency (with a feathered edge
 *      to avoid halos),
 *   2. trims surrounding empty space and adds a little even padding,
 *   3. writes a web-optimised transparent PNG for use on light surfaces, and
 *   4. generates square app icons (logo on a forest-green tile) for the favicon
 *      and Apple touch icon, which read far better at small sizes than a
 *      detailed transparent crest.
 *
 * Run:  npm run process-logo
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const SRC = "littlejoeslogo (1).jpg";
const BRAND_DIR = "public/brand";
const APP_DIR = "app";

const FOREST = { r: 0x16, g: 0x28, b: 0x1a }; // forest-900 tile colour

async function keyOutWhite(srcPath) {
  const img = sharp(srcPath).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < out.length; i += channels) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum >= 246) {
      out[i + 3] = 0; // fully transparent
    } else if (lum > 216) {
      // Feather the near-white halo for a clean edge.
      out[i + 3] = Math.round((255 * (246 - lum)) / (246 - 216));
    }
    // else: keep the original (opaque) artwork pixel
  }

  return sharp(out, { raw: { width, height, channels } }).png();
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`Source logo not found: ${SRC}`);
    process.exit(1);
  }
  await mkdir(BRAND_DIR, { recursive: true });

  // 1) Transparent, trimmed master logo.
  const keyed = await keyOutWhite(SRC);
  const trimmedBuf = await keyed
    .trim({ threshold: 10 })
    .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(trimmedBuf)
    .resize({ width: 1000, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(`${BRAND_DIR}/little-joes-logo.png`);

  // A compact version for the header (smaller file, crisp at nav sizes).
  await sharp(trimmedBuf)
    .resize({ width: 320 })
    .png({ compressionLevel: 9 })
    .toFile(`${BRAND_DIR}/little-joes-logo-sm.png`);

  // 2) Square app icons: logo on a forest-green rounded tile.
  const makeTile = async (size, outPath) => {
    const pad = Math.round(size * 0.14);
    const logoOnTile = await sharp(trimmedBuf)
      .resize({ width: size - pad * 2, height: size - pad * 2, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();
    await sharp({
      create: { width: size, height: size, channels: 4, background: FOREST },
    })
      .composite([{ input: logoOnTile, gravity: "center" }])
      .png()
      .toFile(outPath);
  };

  await makeTile(512, `${APP_DIR}/icon.png`);
  await makeTile(180, `${APP_DIR}/apple-icon.png`);

  // Also keep a copy of the original sources in the brand folder for reference.
  console.log("✓ Logo assets generated:");
  console.log(`  ${BRAND_DIR}/little-joes-logo.png`);
  console.log(`  ${BRAND_DIR}/little-joes-logo-sm.png`);
  console.log(`  ${APP_DIR}/icon.png  ${APP_DIR}/apple-icon.png`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
