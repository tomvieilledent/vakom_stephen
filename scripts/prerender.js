/**
 * Pré-rendu statique léger (post-build).
 *
 * Vite produit un unique `dist/index.html` (SPA). Ce script en dérive une page
 * HTML par route avec les métadonnées SEO correctes (title, description, OG,
 * Twitter, canonical) directement dans le HTML servi — sans exécution de JS.
 *
 * Résultat : chaque URL renvoie un HTML avec ses propres métadonnées pour les
 * moteurs et les aperçus sociaux, tout en conservant l'hydratation React côté
 * client. Le sitemap.xml est également généré à partir de la même source, ce
 * qui élimine tout risque de dérive.
 *
 * Exécuté via Node (voir script npm `postbuild`).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGE_SEO_LIST } from '../src/config/seo.js';
import { SITE } from '../src/config/site.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8');

const fullTitle = (title) => `${title} · ${SITE.consultant.firstName} — Consultant Vakom`;

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/** Applique les métadonnées d'une route au template HTML. */
function render(html, meta) {
  const title = escapeAttr(fullTitle(meta.title));
  const desc = escapeAttr(meta.description);
  const url = escapeAttr(meta.url);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[\s\S]*?(")/, `$1${desc}$2`)
    .replace(/(<link rel="canonical" href=")[\s\S]*?(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[\s\S]*?(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[\s\S]*?(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=")[\s\S]*?(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[\s\S]*?(")/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[\s\S]*?(")/, `$1${desc}$2`);
}

const routes = [
  ...PAGE_SEO_LIST.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    priority: p.priority,
    changefreq: p.changefreq,
  })),
];

let written = 0;
for (const route of routes) {
  const url = `${SITE.url}${route.path === '/' ? '/' : route.path}`;
  const html = render(template, { title: route.title, description: route.description, url });

  const outPath =
    route.path === '/'
      ? resolve(dist, 'index.html')
      : resolve(dist, `.${route.path}`, 'index.html');

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  written += 1;
}

// GitHub Pages sert 404.html pour toute URL sans fichier correspondant
// (lien direct/refresh sur une route non pré-rendue) : on lui donne la
// coquille SPA pour que React Router affiche la page NotFound côté client.
writeFileSync(resolve(dist, '404.html'), template, 'utf-8');

// Sitemap généré depuis la même source (aucune dérive possible).
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => {
    const loc = `${SITE.url}${r.path === '/' ? '/' : r.path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap, 'utf-8');

console.log(`✓ Pré-rendu : ${written} routes + sitemap.xml (${routes.length} URLs).`);
