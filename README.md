# Stephen — Site personnel · Consultant au sein du réseau Vakom

Site vitrine premium d'un consultant en performance humaine, cohérent avec
l'univers Vakom (« le sens de l'Humain ») tout en affirmant une identité propre.
Création originale — aucun contenu, code ou visuel n'est copié du site Vakom.

![Aperçu](public/og-image.png)

## ✨ Points clés

- **Design** sobre, lumineux et humain — palette encre nuit / crème, accent
  magenta (rappel Vakom), typographie éditoriale (Fraunces + Inter).
- **9 pages + articles** : Accueil, À propos, Expertises, Méthodologie,
  Témoignages, Ressources (3 articles complets sous `/ressources/:slug`),
  Contact, Mentions légales, Politique de confidentialité (+ 404).
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
- **Sécurité** : en-têtes durcis (CSP, X-Frame-Options, nosniff, Referrer-Policy,
  Permissions-Policy) côté Nginx / Vercel / Netlify.
- **Qualité** : TypeScript strict, ESLint 0 warning, **27 tests Vitest** +
  **6 tests pytest**, CI GitHub Actions.
- **Backend optionnel** FastAPI + SQLAlchemy (SQLite en dev, PostgreSQL en
  prod), rate-limiting, notification e-mail SMTP, tests inclus.

## 🧱 Stack

| Frontend | Backend (optionnel) | Outillage |
| --- | --- | --- |
| Vite · React 18 · TypeScript strict | FastAPI · SQLAlchemy 2 | ESLint · Prettier |
| Tailwind CSS · Framer Motion | Pydantic v2 · SlowAPI | Docker · docker-compose |
| React Router · React Hook Form · Zod | PostgreSQL / SQLite | Vercel · Netlify · Railway |

## 🚀 Démarrage rapide (frontend)

```bash
npm install
cp .env.example .env      # ajuste VITE_CONTACT_ENDPOINT si besoin
npm run dev               # http://localhost:5173
```

Scripts disponibles :

```bash
npm run dev        # serveur de développement
npm run build      # build de production (tsc + vite) -> dist/
npm run preview    # prévisualise le build
npm run lint       # ESLint (0 warning toléré)
npm run typecheck  # vérification TypeScript
npm test           # tests unitaires (Vitest)
npm run e2e        # tests end-to-end (Playwright)
npm run prerender  # (re)génère le SSG + sitemap dans dist/ (lancé auto au build)
npm run format     # Prettier
```

> **SEO — pré-rendu statique (SSG).** Après `vite build`, le script
> `scripts/prerender.ts` génère un `index.html` par route avec ses propres
> métadonnées (title, description, OG, canonical) et régénère `sitemap.xml`
> depuis une source unique (`src/config/seo.ts` + articles). Chaque URL renvoie
> ainsi un HTML correct pour les moteurs et les aperçus sociaux, sans exécuter
> de JS.

## 🛠 Backend (formulaire de contact)

Nécessaire uniquement si vous souhaitez **stocker** les messages et/ou recevoir
une **notification e-mail**. Sans backend, le formulaire propose un repli
`mailto` automatique.

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
cp .env.example .env
alembic upgrade head               # applique les migrations (schéma DB)
uvicorn app.main:app --reload      # http://localhost:8000  (docs: /docs)
pytest                             # lance les tests
```

Endpoints : `POST /api/contact`, `GET /api/health`.

## 🐳 Docker

```bash
# Stack complète : Postgres + API + site (Nginx)
docker compose up --build
# Site      -> http://localhost:8080
# API       -> http://localhost:8000/docs
```

## ☁️ Déploiement

- **Vercel / Netlify** (frontend statique) : configuration fournie
  (`vercel.json`, `netlify.toml`), fallback SPA + en-têtes de sécurité + cache.
  Build : `npm run build`, dossier de sortie : `dist`.
- **Railway** (backend) : `backend/railway.json` (Dockerfile + healthcheck).
  Ajoutez un service PostgreSQL et renseignez `DATABASE_URL` + `CORS_ORIGINS`.
- Pointez `VITE_CONTACT_ENDPOINT` du frontend vers l'URL publique de l'API.

## 📁 Structure

```
├── public/                 # favicon, robots, sitemap, og-image, manifest, _redirects
├── src/
│   ├── components/
│   │   ├── brand/          # logo / signature
│   │   ├── forms/          # formulaire de contact + champs
│   │   ├── layout/         # header, footer, layout, scroll-to-top
│   │   ├── sections/       # sections réutilisables (hero, grilles, CTA…)
│   │   ├── ui/             # primitives (Button, Section, Reveal, icônes…)
│   │   └── CookieConsent   # bannière de consentement RGPD
│   ├── config/             # site.ts, content.ts, articles.ts (contenu éditorial)
│   ├── lib/                # helpers (cn, useSeo, format, analytics, schéma Zod)
│   ├── pages/              # une page par route (+ Article dynamique)
│   ├── test/               # setup Vitest + helper de rendu
│   └── types/              # types partagés
├── backend/                # API FastAPI (optionnelle)
├── Dockerfile · nginx.conf · docker-compose.yml
└── vercel.json · netlify.toml
```

## ✏️ Personnalisation du contenu

Tout le contenu éditorial est centralisé :

- `src/config/site.ts` — identité, coordonnées, mentions légales.
- `src/config/content.ts` — expertises, méthode, valeurs, témoignages, FAQ,
  ressources, statistiques.

Aucune donnée en dur dans les composants : la mise à jour ne demande pas de
toucher au code des vues.

## ⚖️ Marque Vakom

« Vakom » est une marque déposée, citée pour indiquer l'appartenance du
consultant au réseau, avec l'autorisation de ce dernier. Ce site est un site
personnel indépendant et n'est pas le site officiel du réseau Vakom.

---

> Voir `TODO.txt` pour la liste des informations réelles à renseigner avant la
> mise en ligne (nom complet, coordonnées, photo, mentions légales…).
