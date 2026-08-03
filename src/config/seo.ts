/**
 * Métadonnées SEO par route — source unique partagée entre :
 *  - les pages (hook useSeo, côté client) ;
 *  - le script de pré-rendu (scripts/prerender.ts, au build) qui injecte ces
 *    métadonnées dans le HTML statique de chaque route.
 *
 * Centraliser ici garantit qu'il n'y a aucune dérive entre le SEO client et le
 * SEO pré-rendu.
 */

export interface PageSeo {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  /** Priorité sitemap (0.0–1.0). */
  readonly priority: number;
  /** Fréquence de mise à jour pour le sitemap. */
  readonly changefreq: 'weekly' | 'monthly' | 'yearly';
}

export const PAGE_SEO = {
  home: {
    title: 'Consultant en performance humaine',
    description:
      'Consultant au sein du réseau Vakom, j’accompagne dirigeants et équipes : management, recrutement, cohésion et développement des talents. Le sens de l’Humain au service de votre performance.',
    path: '/',
    priority: 1.0,
    changefreq: 'monthly',
  },
  about: {
    title: 'À propos',
    description:
      'Parcours, convictions et approche de Stephen, consultant en performance humaine au sein du réseau Vakom.',
    path: '/a-propos',
    priority: 0.8,
    changefreq: 'monthly',
  },
  expertise: {
    title: 'Expertises',
    description:
      'Management, recrutement, cohésion d’équipe, développement des talents, conduite du changement et qualité de vie au travail : mes domaines d’accompagnement.',
    path: '/expertises',
    priority: 0.9,
    changefreq: 'monthly',
  },
  methodology: {
    title: 'Méthodologie',
    description:
      'Une démarche en quatre temps — écouter, éclairer, co-construire, ancrer — appuyée sur des outils d’évaluation reconnus. Découvrez ma méthode d’accompagnement.',
    path: '/methodologie',
    priority: 0.8,
    changefreq: 'monthly',
  },
  testimonials: {
    title: 'Témoignages',
    description:
      'Ce que disent les dirigeants, DRH et managers accompagnés : retours d’expérience et résultats concrets.',
    path: '/temoignages',
    priority: 0.7,
    changefreq: 'monthly',
  },
  resources: {
    title: 'Ressources',
    description:
      'Articles et réflexions sur le management, le recrutement et la cohésion d’équipe. Des repères concrets pour faire grandir vos équipes.',
    path: '/ressources',
    priority: 0.6,
    changefreq: 'weekly',
  },
  contact: {
    title: 'Contact',
    description:
      'Contactez Stephen, consultant au sein du réseau Vakom, pour échanger sur vos enjeux humains. Premier échange gratuit et sans engagement.',
    path: '/contact',
    priority: 0.9,
    changefreq: 'yearly',
  },
  legalNotice: {
    title: 'Mentions légales',
    description: 'Mentions légales du site de Stephen, consultant au sein du réseau Vakom.',
    path: '/mentions-legales',
    priority: 0.2,
    changefreq: 'yearly',
  },
  privacy: {
    title: 'Politique de confidentialité',
    description:
      'Politique de confidentialité et gestion des données personnelles (RGPD) du site de Stephen, consultant Vakom.',
    path: '/confidentialite',
    priority: 0.2,
    changefreq: 'yearly',
  },
} satisfies Record<string, PageSeo>;

export const PAGE_SEO_LIST: readonly PageSeo[] = Object.values(PAGE_SEO);
