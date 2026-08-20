/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Local dev server
   Zero-dependency Node static server that mirrors the
   clean-URL behaviour of vercel.json:
     /             → index.html
     /doctor       → doctor.html
     /blog/        → blog/index.html
     /blog/:slug   → blog/post.html  (slug read from path by blog.js)
     /admin/       → admin/index.html
   Run:  node dev-server.js  (defaults to port 3000)
   ═══════════════════════════════════════════════════ */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || process.argv[2] || 3000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.sql': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

function safeResolve(rel) {
  const full = path.resolve(ROOT, '.' + rel);
  if (full !== ROOT && !full.startsWith(ROOT + path.sep)) return null;
  return full;
}

function exists(file) {
  try { return fs.statSync(file).isFile(); } catch (e) { return false; }
}

function contentType(file) {
  return MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
}

function serve(res, file) {
  fs.readFile(file, (err, buf) => {
    if (err) return notFound(res);
    res.writeHead(200, { 'Content-Type': contentType(file) });
    res.end(buf);
  });
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 — Not Found</h1><p>This page does not exist.</p>');
}

// Resolve a request path (decoded, no query) to a real file on disk.
function resolvePath(p) {
  const clean = p.replace(/\/+$/, '') || '/';

  // Literal file
  const literal = safeResolve(clean);
  if (literal && exists(literal)) return literal;

  // Clean URL → <path>.html  (e.g. /doctor → doctor.html)
  const asHtml = safeResolve(clean + '.html');
  if (asHtml && exists(asHtml)) return asHtml;

  // Directory index (e.g. /admin → admin/index.html, /blog → blog/index.html)
  const asIndex = safeResolve(clean + '/index.html');
  if (asIndex && exists(asIndex)) return asIndex;

  // Blog post rewrite (e.g. /blog/some-slug → blog/post.html)
  const blogMatch = clean.match(/^\/blog\/([^/]+)$/);
  if (blogMatch && blogMatch[1]) {
    const post = safeResolve('/blog/post.html');
    if (post && exists(post)) return post;
  }

  return null;
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = decodeURIComponent(url.pathname);
  const file = resolvePath(p);
  if (file) serve(res, file);
  else notFound(res);
}).listen(PORT, () => {
  console.log('Digital Dental Zone dev server:');
  console.log('  http://127.0.0.1:' + PORT + '/');
  console.log('  http://127.0.0.1:' + PORT + '/services');
  console.log('  http://127.0.0.1:' + PORT + '/gallery');
  console.log('  http://127.0.0.1:' + PORT + '/doctor');
  console.log('  http://127.0.0.1:' + PORT + '/blog/');
  console.log('  http://127.0.0.1:' + PORT + '/admin/');
});