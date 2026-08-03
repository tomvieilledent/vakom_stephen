import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '@/test/render';
import { ContactForm } from './ContactForm';

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Nom complet/i), 'Marie Dupont');
  await user.type(screen.getByLabelText(/E-mail/i), 'marie@example.com');
  await user.selectOptions(screen.getByLabelText(/Votre sujet/i), 'management');
  await user.type(
    screen.getByLabelText(/Votre message/i),
    'Bonjour, je souhaite un accompagnement pour mes managers.',
  );
  await user.click(screen.getByLabelText(/J’accepte que mes données/i));
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('affiche des erreurs de validation quand le formulaire est vide', async () => {
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /Envoyer mon message/i }));
    expect(await screen.findByText(/Merci d’indiquer votre nom/i)).toBeInTheDocument();
    expect(screen.getByText(/Merci de choisir un sujet/i)).toBeInTheDocument();
  });

  it('envoie les données et affiche la confirmation en cas de succès', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 201 });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Envoyer mon message/i }));

    expect(await screen.findByText(/Message envoyé, merci/i)).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledOnce();
    const [, options] = fetchMock.mock.calls[0];
    expect(JSON.parse(options.body)).toMatchObject({
      fullName: 'Marie Dupont',
      email: 'marie@example.com',
      subject: 'management',
    });
  });

  it('propose un repli mailto si l’API échoue', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));

    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Envoyer mon message/i }));

    expect(await screen.findByText(/n’a pas abouti/i)).toBeInTheDocument();
  });
});
