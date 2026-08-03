import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '@/test/render';
import { Button } from './Button';

describe('Button', () => {
  it('rend un <button> par défaut et réagit au clic', async () => {
    const onClick = vi.fn();
    renderWithRouter(<Button onClick={onClick}>Envoyer</Button>);
    const btn = screen.getByRole('button', { name: 'Envoyer' });
    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('rend un lien de navigation quand `to` est fourni', () => {
    renderWithRouter(<Button to="/contact">Contact</Button>);
    const link = screen.getByRole('link', { name: 'Contact' });
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('rend une ancre quand `href` est fourni', () => {
    renderWithRouter(<Button href="mailto:test@example.com">Mail</Button>);
    expect(screen.getByRole('link', { name: 'Mail' })).toHaveAttribute(
      'href',
      'mailto:test@example.com',
    );
  });
});
