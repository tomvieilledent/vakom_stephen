import { describe, expect, it } from 'vitest';
import { parseContent } from './parseContent';
import contenuMd from '../../content/contenu.md?raw';

describe('parseContent', () => {
  it('lit les sections du fichier réel content/contenu.md', () => {
    const c = parseContent(contenuMd);
    expect(c.stephen.length).toBeGreaterThan(0);
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
      '## Stephen',
      '',
      '> note',
      '',
      'Un.',
      '',
      'Deux.',
      '## Témoignages',
      '### Ana B.',
      '- Fonction : DG',
      '- Entreprise : ACME',
      '- Citation : Super.',
      '## Chiffres',
      '- 10 ans | d’expérience',
    ].join('\n');
    const c = parseContent(md);
    expect(c.stephen).toEqual(['Un.', 'Deux.']);
    expect(c.testimonials).toEqual([
      { quote: 'Super.', author: 'Ana B.', role: 'DG', company: 'ACME' },
    ]);
    expect(c.stats).toEqual([{ value: '10 ans', label: 'd’expérience' }]);
  });
});
