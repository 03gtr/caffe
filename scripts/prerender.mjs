// Inject the server-rendered markup into dist/index.html so the page works without JavaScript.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

// Usage: node scripts/prerender.mjs [outDir=dist] [copyTo]
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.argv[2] ?? 'dist';
const copyTo = process.argv[3];
const htmlPath = path.join(root, outDir, 'index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(htmlPath, 'utf8');
if (!template.includes('<!--app-html-->')) {
  throw new Error('prerender: placeholder <!--app-html--> not found in dist/index.html');
}

const markup = render();
// React places resource hints (image preloads for fetchPriority="high") first; hoist them into <head>.
const hints = markup.match(/^(?:<link [^>]*\/>)+/)?.[0] ?? '';
const body = markup.slice(hints.length);

const html = template
  .replace('<!--app-html-->', body)
  .replace('</head>', `    ${hints.replace(/\/>/g, ' />')}\n  </head>`);

await writeFile(htmlPath, html);
if (copyTo) {
  const target = path.join(root, copyTo);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);
  console.log(`prerender: copied to ${copyTo} (${(html.length / 1024).toFixed(0)} KB)`);
}
// Windows can briefly lock the just-imported bundle; cleanup is best-effort.
await rm(ssrDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }).catch((error) =>
  console.warn(`prerender: could not remove dist-ssr (${error.code}); it is git-ignored`)
);
console.log(
  `prerender: wrote ${path.relative(root, htmlPath)} (${(html.length / 1024).toFixed(1)} KB, ${
    hints.match(/<link /g)?.length ?? 0
  } preload hint(s) hoisted)`
);
