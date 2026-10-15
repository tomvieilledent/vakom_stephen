import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { useSeo } from './useSeo';

function Probe() {
  useSeo({ title: 'À propos', description: 'Ma description de test.', path: '/a-propos' });
  return null;
}

describe('useSeo', () => {
  it('met à jour le titre du document', () => {
    render(<Probe />);
    expect(document.title).toContain('À propos');
  });

  it('renseigne la meta description', () => {
    render(<Probe />);
    const meta = document.head.querySelector('meta[name="description"]');
    expect(meta?.getAttribute('content')).toBe('Ma description de test.');
  });

  it('définit l’URL canonique', () => {
    render(<Probe />);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toContain('/a-propos');
  });
});
