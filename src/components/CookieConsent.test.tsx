import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/render';
import { CookieConsent } from './CookieConsent';
import { CONSENT_OPEN_EVENT } from '@/lib/analytics';

describe('CookieConsent', () => {
  it('ne s’affiche pas quand l’analytics n’est pas configuré', () => {
    renderWithRouter(<CookieConsent />);
    expect(screen.queryByRole('dialog', { name: /cookies/i })).toBeNull();
  });

  it('se rouvre lorsque l’événement « gérer mes cookies » est déclenché', async () => {
    renderWithRouter(<CookieConsent />);
    act(() => {
      window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
    });
    expect(await screen.findByRole('dialog', { name: /cookies/i })).toBeInTheDocument();
  });
});
