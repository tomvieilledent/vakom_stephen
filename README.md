# Stephen — Site personnel · Consultant au sein du réseau Vakom

Site vitrine premium d'un consultant en performance humaine, cohérent avec
l'univers Vakom (« le sens de l'Humain ») tout en affirmant une identité propre.
Création originale — aucun contenu, code ou visuel n'est copié du site Vakom.

![Aperçu](public/og-image.png)

## ✨ Points clés

- **Design** sobre, lumineux et humain — palette encre nuit / crème, accent
  magenta (rappel Vakom), typographie éditoriale (Fraunces + Inter).
- **6 pages** : Accueil (sections par ancres), À propos, Témoignages, Contact,
  Mentions légales, Politique de confidentialité (+ 404).
- **Accessibilité** WCAG AA : navigation clavier, focus visibles, `aria-*`,
  respect de `prefers-reduced-motion`, skip-link, contrastes soignés.
- **SEO** : meta par page, Open Graph / Twitter (image PNG 1200×630), JSON-LD,
  `sitemap.xml`, `robots.txt`, canonical, favicon SVG/ICO, icônes PWA, manifest.
- **Performance** : code-splitting par route, lazy-loading, chunks vendors,
  CSS ~7 kB gzip.
- **Formulaire de contact** validé (Zod + React Hook Form), anti-spam
  (honeypot), RGPD (consentement), avec repli `mailto` si l'API est absente.
- **RGPD & confidentialité** : bannière de consentement + analytics opt-in
  (Plausible), désactivés par défaut — aucun traceur sans accord explicite.
- **Qualité** : ESLint 0 warning, **37 tests Vitest**, 4 tests e2e Playwright,
  CI GitHub Actions.

## 🧱 Stack

Vite · React 18 · JavaScript · Tailwind CSS · Framer Motion · React Router ·
React Hook Form · Zod · ESLint · Prettier

## 🚀 Démarrage rapide

```bash
npm install
cp .env.example .env      # ajuste VITE_CONTACT_ENDPOINT si besoin
npm run dev                # http://localhost:5173
```

Scripts disponibles :

```bash
npm run dev          # serveur de développement
npm run build        # build de production -> dist/
npm run preview      # prévisualise le build
npm run lint         # ESLint (0 warning toléré)
npm test             # tests unitaires (Vitest)
npm run e2e          # tests end-to-end (Playwright)
npm run prerender    # (re)génère le SSG + sitemap dans dist/ (lancé auto au build)
npm run format       # Prettier
```

> **SEO — pré-rendu statique (SSG).** Après `vite build`, le script
> `scripts/prerender.js` génère un `index.html` par route avec ses propres
> métadonnées (title, description, OG, canonical) et régénère `sitemap.xml`
> depuis une source unique (`src/config/seo.js` + articles), ainsi qu'un
> `404.html` (repli SPA pour GitHub Pages). Chaque URL renvoie ainsi un HTML
> correct pour les moteurs et les aperçus sociaux, sans exécuter de JS.

## 🛠 Formulaire de contact

Aucun backend n'est requis : le formulaire tente un `POST` vers
`VITE_CONTACT_ENDPOINT` (`/api/contact` par défaut) et propose automatiquement
un repli `mailto` pré-rempli si aucune API ne répond — le site fonctionne donc
entièrement en statique.

## ☁️ Déploiement

Le site est déployé en statique sur **GitHub Pages** (project page), sous
`/vakom_stephen/` :

```bash
npm run build
npx gh-pages -d dist
```

Le `base` de `vite.config.js` (`/vakom_stephen/`) et le `.nojekyll` (dans
`public/`) sont nécessaires pour que GitHub Pages serve correctement les
assets sous ce sous-chemin.

## 📁 Structure

```
├── public/                 # favicon, robots, sitemap, og-image, manifest, .nojekyll
├── src/
│   ├── components/
│   │   ├── forms/          # formulaire de contact + champs
│   │   ├── layout/          # header, footer, layout, scroll-to-top
│   │   ├── sections/        # sections réutilisables (hero, grilles, CTA…)
│   │   ├── ui/               # primitives (Button, Section, Reveal, icônes…)
│   │   ├── CookieConsent.jsx # bannière de consentement RGPD
│   │   ├── Logo.jsx          # signature du consultant
│   │   └── JsonLd.jsx        # données structurées schema.org
│   ├── config/              # site.js, content.js, seo.js, articles.js (contenu éditorial)
│   ├── lib/                 # helpers (cn, useSeo, format, analytics, schéma Zod)
│   ├── pages/                # une page par route (+ Article dynamique)
│   └── test/                 # setup Vitest + helper de rendu
├── scripts/prerender.js     # SSG léger + sitemap (exécuté au build)
└── e2e/                     # tests Playwright
```

## ✏️ Personnalisation du contenu

Tout le contenu éditorial est centralisé :

- `src/config/site.js` — identité, coordonnées, mentions légales.
- `src/config/content.js` — valeurs, témoignages, statistiques.

Aucune donnée en dur dans les composants : la mise à jour ne demande pas de
toucher au code des vues.

## ⚖️ Marque Vakom

« Vakom » est une marque déposée, citée pour indiquer l'appartenance du
consultant au réseau, avec l'autorisation de ce dernier. Ce site est un site
personnel indépendant et n'est pas le site officiel du réseau Vakom.

---

> Voir `TODO.txt` pour la liste des informations réelles à renseigner avant la
> mise en ligne (nom complet, coordonnées, photo, mentions légales…).
