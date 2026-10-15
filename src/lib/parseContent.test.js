import { describe, expect, it } from 'vitest';
import { parseContent } from './parseContent';
import contenuMd from '../../content/contenu.md?raw';

describe('parseContent', () => {
  it('lit les sections du fichier réel content/contenu.md', () => {
    const c = parseContent(contenuMd);
    expect(c.consultants.length).toBeGreaterThan(0);
    expect(c.consultants[0].paragraphs.length).toBeGreaterThan(0);
    expect(c.vakomRodez.length).toBeGreaterThan(0);
    expect(c.testimonials.length).toBeGreaterThan(0);
    expect(c.stats.length).toBeGreaterThan(0);
    for (const t of c.testimonials) {
      expect(t.quote).toBeTruthy();
      expect(t.author).toBeTruthy();
    }
  });

  it('ignore les notes et lit témoignages et chiffres', () => {
    const md = [
      '## Consultants',
      '### Ana',
      '- Photo : ana.png',
      '- Rôle : Consultante',
      '- LinkedIn : https://x.test/ana',
      '- Titre : Un **mot**',
      '',
      '> note',
      '',
      'Un.',
      '',
      'Deux.',
      '### Bob',
      '',
      'Trois.',
      '## Témoignages',
      '### Ana B.',
      '- Fonction : DG',
      '- Entreprise : ACME',
      '- Citation : Super.',
      '## Chiffres',
      '- 10 ans | d’expérience',
    ].join('\n');
    const c = parseContent(md);
    expect(c.consultants).toEqual([
      {
        firstName: 'Ana',
        photo: 'ana.png',
        role: 'Consultante',
        linkedin: 'https://x.test/ana',
        title: 'Un **mot**',
        paragraphs: ['Un.', 'Deux.'],
      },
      { firstName: 'Bob', photo: '', role: '', linkedin: '', title: '', paragraphs: ['Trois.'] },
    ]);
    expect(c.testimonials).toEqual([
      { quote: 'Super.', author: 'Ana B.', role: 'DG', company: 'ACME' },
    ]);
    expect(c.stats).toEqual([{ value: '10 ans', label: 'd’expérience' }]);
  });
});
