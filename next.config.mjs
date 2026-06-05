import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` emits a fully static site to ./out — no Node
  // server needed. Host it on any static host (Netlify, Cloudflare Pages,
  // Vercel, GitHub Pages, S3). To return to a server-rendered app later, remove
  // this `output` line (and re-add the contact API route).
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,

  // Pin the workspace root to this project. Without this, a stray lockfile
  // higher up (e.g. C:\Users\Dell\package-lock.json) makes Next infer the wrong
  // root for output file tracing.
  outputFileTracingRoot: __dirname,

  images: {
    // Static export has no image-optimisation server, so images are served
    // as-is. We pre-process the logo with sharp (npm run process-logo); add
    // job photos already compressed/sized. (next/image still prevents CLS.)
    unoptimized: true,
  },

  eslint: {
    // Lint is a dev/CI step (`npm run lint`), not a hard build gate — a style
    // nit shouldn't block a production deploy of a static marketing site.
    // Type-checking (tsc) is still enforced during the build.
    ignoreDuringBuilds: true,
  },

  // NOTE: HTTP security headers can't be set by a static export (no server).
  // They're configured at the host instead — see public/_headers (Netlify /
  // Cloudflare Pages format). Most static hosts also let you set headers in
  // their dashboard or a platform config file.
};

export default nextConfig;
