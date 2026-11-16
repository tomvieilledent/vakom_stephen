import { parseContent } from '@/lib/parseContent';
import contenuMd from '../../content/contenu.md?raw';

/** Contenu éditorial original, inspiré de la philosophie Vakom (jamais copié). */

// Textes éditables à la main dans content/contenu.md
const CONTENT = parseContent(contenuMd);
export const CONSULTANTS = CONTENT.consultants;
export const VAKOM_RODEZ_PARAGRAPHS = CONTENT.vakomRodez;
export const TESTIMONIALS = CONTENT.testimonials;
export const STATS = CONTENT.stats;

/** Valeurs Vakom : leurs initiales forment le mot « APPARES ». */
export const VALUES = [
  {
    letter: 'A',
    title: 'Audace',
    description:
      'Sortir de sa zone de confort pour innover, entreprendre et s’engager avec optimisme.',
  },
  {
    letter: 'P',
    title: 'Plaisir',
    description:
      'Garder l’envie d’entreprendre, la curiosité, la joie de vivre et le désir de grandir.',
  },
  {
    letter: 'P',
    title: 'Professionnalisme',
    description: 'Viser l’efficacité, individuelle et collective, dans une performance durable.',
  },
  {
    letter: 'A',
    title: 'Agilité',
    description:
      'S’adapter à son environnement grâce à la proximité, la flexibilité, l’humanité et la simplicité.',
  },
  {
    letter: 'R',
    title: 'Respect',
    description: 'Être lucide sur soi-même pour renforcer la confiance collective.',
  },
  {
    letter: 'E',
    title: 'Esprit d’équipe',
    description:
      'Cultiver les différences avec bienveillance pour valoriser la cohésion, avec équité.',
  },
  {
    letter: 'S',
    title: 'Simplicité',
    description:
      'Être simple dans les relations, les prestations et l’organisation, pour être accessible à tous.',
  },
];
