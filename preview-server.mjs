// Zero-dependency static server for the exported ./out folder.
// Mimics how a static host resolves clean URLs (/about -> out/about.html).
// Used for local preview/screenshots; not part of the deployed site.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = join(process.cwd(), "out");
const PORT = Number(process.env.PORT) || 4321;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {}
  return null;
}

async function resolvePath(pathname) {
  // Prevent path traversal.
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const base = join(ROOT, safe);
  return (
    (await tryFile(base)) ||
    (await tryFile(base + ".html")) ||
    (await tryFile(join(base, "index.html")))
  );
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let file = await resolvePath(url.pathname === "/" ? "/index.html" : url.pathname);
  let status = 200;

  if (!file) {
    status = 404;
    file = await tryFile(join(ROOT, "404.html"));
  }
  if (!file) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not found");
    return;
  }

  const body = await readFile(file);
  res.writeHead(status, { "content-type": MIME[extname(file)] || "application/octet-stream" });
  res.end(body);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Preview server ready on http://0.0.0.0:${PORT}`);
});
