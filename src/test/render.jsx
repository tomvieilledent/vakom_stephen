import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/** Rend un composant dans un routeur mémoire (pour les liens React Router). */
export function renderWithRouter(ui, initialEntry = '/') {
  return render(
    <MemoryRouter
      initialEntries={[initialEntry]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {ui}
    </MemoryRouter>,
  );
}
