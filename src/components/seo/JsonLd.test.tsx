import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { JsonLd } from './JsonLd';

function ldScripts() {
  return document.head.querySelectorAll('script[type="application/ld+json"]');
}

describe('JsonLd', () => {
  it('injecte les données structurées puis les retire au démontage', () => {
    const before = ldScripts().length;
    const { unmount } = render(<JsonLd data={{ '@type': 'Article', headline: 'Test' }} />);

    const scripts = ldScripts();
    expect(scripts.length).toBe(before + 1);
    const injected = scripts[scripts.length - 1];
    expect(injected.textContent).toContain('"headline":"Test"');

    unmount();
    expect(ldScripts().length).toBe(before);
  });
});
