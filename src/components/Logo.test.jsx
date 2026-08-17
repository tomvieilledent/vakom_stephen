import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/render';
import { Logo } from './Logo';
import { SITE } from '@/config/site';

describe('Logo', () => {
  it('pointe vers l’accueil et affiche le prénom du consultant', () => {
    renderWithRouter(<Logo />);
    const link = screen.getByRole('link', { name: new RegExp(SITE.consultant.firstName, 'i') });
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('Consultant Vakom')).toBeInTheDocument();
  });
});
