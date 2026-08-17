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
    location: 'Nouvelle-Aquitaine · interventions partout en France',
  },
  contact: {
    email: 'contact@stephen-consultant.fr',
    phone: '+33 6 00 00 00 00',
    phoneHref: 'tel:+33600000000',
    linkedin: 'https://www.linkedin.com/',
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
  { label: 'À propos', to: '/a-propos' },
  { label: 'Expertises', to: '/expertises' },
  { label: 'Méthode', to: '/methodologie' },
  { label: 'Témoignages', to: '/temoignages' },
  { label: 'Ressources', to: '/ressources' },
];
