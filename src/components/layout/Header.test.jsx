import { describe, expect, it } from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '@/test/render';
import { Header } from './Header';
import { NAV_LINKS } from '@/config/site';

describe('Header', () => {
  it('affiche les liens de navigation et le CTA', () => {
    renderWithRouter(<Header />);
    const main = within(screen.getByRole('navigation', { name: 'Navigation principale' }));
    for (const link of NAV_LINKS) {
      expect(main.getByRole('link', { name: link.label })).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: /Prendre contact/i })).toBeInTheDocument();
  });

  it('affiche la sous-navigation par ancres sur l’accueil', () => {
    renderWithRouter(<Header />);
    const sub = within(screen.getByRole('navigation', { name: 'Sections de la page' }));
    expect(sub.getByRole('link', { name: 'Expertises' })).toHaveAttribute('href', '#expertises');
  });

  it('ouvre et ferme le menu mobile', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Header />);
    const toggle = screen.getByRole('button', { name: /Ouvrir le menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});
