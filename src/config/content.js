import { parseContent } from '@/lib/parseContent';
import contenuMd from '../../content/contenu.md?raw';

/** Contenu éditorial original, inspiré de la philosophie Vakom (jamais copié). */

// Textes éditables à la main dans content/contenu.md
const CONTENT = parseContent(contenuMd);
export const CONSULTANTS = CONTENT.consultants;
export const VAKOM_RODEZ_PARAGRAPHS = CONTENT.vakomRodez;
export const TESTIMONIALS = CONTENT.testimonials;
export const STATS = CONTENT.stats;

export const VALUES = [
  {
    letter: 'H',
    title: 'Humanité',
    description:
      'Placer la personne avant la fonction. Chaque accompagnement part d’un respect sincère de ce que chacun est.',
  },
  {
    letter: 'L',
    title: 'Lucidité',
    description:
      'Dire les choses avec justesse et bienveillance, même lorsqu’elles dérangent, pour permettre d’avancer.',
  },
  {
    letter: 'E',
    title: 'Engagement',
    description:
      'M’impliquer pleinement dans vos réussites, avec la même exigence que si votre organisation était la mienne.',
  },
  {
    letter: 'S',
    title: 'Simplicité',
    description:
      'Rendre accessible ce qui est complexe. Des mots clairs, des outils concrets, des résultats mesurables.',
  },
];
