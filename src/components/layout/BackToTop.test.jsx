import { afterEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BackToTop } from './BackToTop';

function setScrollY(value) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true });
}

describe('BackToTop', () => {
  afterEach(() => setScrollY(0));

  it('n’apparaît pas en haut de page', () => {
    setScrollY(0);
    render(<BackToTop />);
    expect(screen.queryByRole('button', { name: /haut/i })).toBeNull();
  });

  it('apparaît après un défilement significatif', () => {
    setScrollY(800);
    render(<BackToTop />);
    expect(screen.getByRole('button', { name: /haut/i })).toBeInTheDocument();
  });
});
