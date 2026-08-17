import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaqAccordion } from './FaqAccordion';
import { FAQ } from '@/config/content';

describe('FaqAccordion', () => {
  it('ouvre la première question par défaut', () => {
    render(<FaqAccordion />);
    const first = screen.getByRole('button', { name: FAQ[0].question });
    expect(first).toHaveAttribute('aria-expanded', 'true');
  });

  it('bascule l’ouverture au clic', async () => {
    render(<FaqAccordion />);
    const second = screen.getByRole('button', { name: FAQ[1].question });
    expect(second).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
  });
});
