// One-off: optimise the branded service banners for the web.
// PNG screenshots are huge; convert to progressive JPEG, sized for the layout.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "C:/Users/Dell/Downloads";
const OUT = "public/services";
await mkdir(OUT, { recursive: true });

const jobs = [
  ["Blog Banner for Website Content_20260604_061347_0000.png", "tree-surgery.jpg"],
  ["Blog Banner for Website Content_20260604_060932_0000.png", "stump-removal.jpg"],
  ["Blog Banner for Website Content_20260604_060323_0000.png", "hedge-cutting.jpg"],
];

for (const [src, out] of jobs) {
  const info = await sharp(`${SRC}/${src}`)
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(`${OUT}/${out}`);
  console.log(`${out}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
}
