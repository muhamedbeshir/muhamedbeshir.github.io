// Local static server for the mirrored site.
// Serves the Next.js App Router routes and its RSC payloads so client-side
// navigation keeps working offline.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4743);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".rsc": "text/x-component; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".txt": "text/plain; charset=utf-8",
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const rel = clean.replace(/^\/+/, "");
  const abs = path.join(ROOT, rel);
  if (!abs.startsWith(ROOT)) return null; // path traversal guard

  const candidates = [];
  if (rel === "") {
    candidates.push(path.join(ROOT, "index.html"));
  } else if (clean.endsWith("/")) {
    candidates.push(path.join(ROOT, rel, "index.html"));
  } else {
    candidates.push(abs);
    candidates.push(path.join(ROOT, rel + ".html"));
    candidates.push(path.join(ROOT, rel, "index.html"));
  }
  for (const c of candidates) {
    try {
      if (fs.statSync(c).isFile()) return c;
    } catch {
      /* keep looking */
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const isRsc = url.searchParams.has("_rsc") || req.headers["rsc"] === "1";

  // next/image optimizer emulation: /_next/image?url=...&w=...&q=...
  // The originals are already optimal, so serve the source file as-is.
  if (url.pathname === "/_next/image") {
    const inner = url.searchParams.get("url");
    if (inner) {
      const innerFile = resolveFile(inner);
      if (innerFile) {
        const ext = path.extname(innerFile).toLowerCase();
        res.writeHead(200, {
          "content-type": MIME[ext] || "application/octet-stream",
          "cache-control": "public, max-age=31536000, immutable",
        });
        fs.createReadStream(innerFile).pipe(res);
        return;
      }
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("image not found");
    return;
  }

  // RSC payload for client-side navigation / prefetch
  if (isRsc) {
    const rel = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
    const rscFile = path.join(ROOT, rel, "index.rsc");
    try {
      const body = fs.readFileSync(rscFile);
      res.writeHead(200, {
        "content-type": MIME[".rsc"],
        "cache-control": "no-store",
        "vary": "RSC, Next-Router-Prefetch",
      });
      res.end(body);
      return;
    } catch {
      // fall through to normal handling N+1 style
    }
  }

  const file = resolveFile(url.pathname);
  if (!file) {
    const notFound = path.join(ROOT, "index.html");
    res.writeHead(404, { "content-type": MIME[".html"] });
    res.end(
      `<!doctype html><meta charset="utf-8"><title>404</title>` +
        `<body style="font-family:system-ui;padding:40px"><h1>404</h1>` +
        `<p>Not found: <code>${url.pathname}</code></p>` +
        `<p><a href="/">Go home</a></p>`
    );
    return;
  }

  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  // Files here are edited in place (even hashed chunks), so never mark them immutable:
  // always revalidate, and answer 304 when nothing changed.
  const st = fs.statSync(file);
  const etag = `W/"${st.size.toString(16)}-${Math.floor(st.mtimeMs).toString(16)}"`;
  const headers = {
    "content-type": type,
    "cache-control": "no-cache",
    etag,
    "last-modified": st.mtime.toUTCString(),
    "access-control-allow-origin": "*",
  };
  if (req.headers["if-none-match"] === etag) {
    res.writeHead(304, headers);
    res.end();
    return;
  }
  res.writeHead(200, headers);
  fs.createReadStream(file).pipe(res);
});

// no host argument = dual stack, so both localhost (::1) and 127.0.0.1 work
server.listen(PORT, () => {
  console.log(`\n  Site running:  http://localhost:${PORT}/\n`);
  console.log(`  (Ctrl+C to stop)\n`);
});
