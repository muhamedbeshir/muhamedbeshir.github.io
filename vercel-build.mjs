/**
 * Vercel build step.
 *
 * This site is a static mirror of a Next.js export, so it ships a `_next/`
 * directory. Vercel's deploy pipeline reserves `_next/` for Next.js projects and
 * fails the build with an internal error when a non-Next static project contains
 * it (`An unexpected error occurred when running this build`).
 *
 * Fix: rename `_next/` to `nextassets/` in the build output and rewrite the
 * `/_next/` URL prefix in the text files, so every asset still resolves.
 * The repo itself keeps `_next/` untouched for GitHub Pages.
 */
import { readdir, readFile, writeFile, rename, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = process.cwd();
const FROM = "_next";
const TO = "nextassets";
const TEXT = new Set([".html", ".css", ".js", ".mjs", ".rsc", ".json", ".svg", ".xml", ".txt", ".md", ".webmanifest"]);

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === ".vercel" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

if (await exists(join(ROOT, FROM))) {
  await rename(join(ROOT, FROM), join(ROOT, TO));
  console.log(`[vercel] renamed ${FROM}/ -> ${TO}/`);
}

let rewritten = 0;
for (const file of await walk(ROOT)) {
  if (!TEXT.has(extname(file).toLowerCase())) continue;
  const before = await readFile(file, "utf8");
  if (!before.includes(`/${FROM}/`)) continue;
  const after = before.split(`/${FROM}/`).join(`/${TO}/`);
  if (after !== before) {
    await writeFile(file, after, "utf8");
    rewritten++;
  }
}

console.log(`[vercel] rewrote /${FROM}/ references in ${rewritten} file(s)`);
