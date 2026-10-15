/**
 * Source unique de vérité pour le contenu éditorial du site.
 *
 * Centraliser le contenu ici (plutôt que dans les composants) permet :
 *  - une relecture / mise à jour rapide sans toucher au code ;
 *  - une future migration vers un CMS headless sans réécriture des vues.
 *
 * ⚠️ Les informations personnelles (nom complet, e-mail, téléphone, SIREN,
 *    adresse) sont des valeurs à confirmer par le consultant — voir TODO.txt.
 */

export const SITE = {
  consultant: {
    firstName: 'Stephen',
    /** Nom complet — À CONFIRMER par le client. */
    fullName: 'Stephen',
    role: 'Consultant en performance humaine',
    network: 'Consultant indépendant au sein du réseau Vakom',
    tagline: 'Le sens de l’Humain, au service de votre performance',
    location: 'Rodez (Aveyron) · interventions partout en France',
  },
  contact: {
    email: 'contact@stephen-consultant.fr',
    phone: '+33 6 00 00 00 00',
    phoneHref: 'tel:+33600000000',
    linkedin: 'https://www.linkedin.com/in/stephen-keller-56aa90158/',
    calendarUrl: '', // lien de prise de RDV (Calendly, etc.) — optionnel
  },
  legal: {
    siren: '000 000 000',
    hostName: 'GitHub, Inc.',
    hostAddress: '88 Colin P Kelly Jr St, San Francisco, CA 94107, USA',
    publicationDirector: 'Stephen',
    updatedAt: '30 juillet 2026',
  },
  url: 'https://stephen-consultant.fr',
};

export const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Témoignages', to: '/temoignages' },
  { label: 'Réseau Vakom', href: 'https://vakom.fr' },
];

// Sous-navigation par ancres, affichée sous la barre principale selon la page.
// L'ordre doit suivre celui des sections dans la page.
export const SUBNAV = {
  '/': [
    { label: 'Ma raison d’être', id: 'raison-etre' },
    { label: 'Expertises', id: 'expertises' },
    { label: 'Méthode', id: 'methode' },
  ],
  '/a-propos': [
    { label: 'Stephen', id: 'stephen' },
    { label: 'Vakom Rodez', id: 'vakom-rodez' },
  ],
};
