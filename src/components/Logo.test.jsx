import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/render';
import { Logo } from './Logo';

describe('Logo', () => {
  it('pointe vers l’accueil et est nommé Vakom', () => {
    renderWithRouter(<Logo />);
    const link = screen.getByRole('link', { name: /Vakom/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
