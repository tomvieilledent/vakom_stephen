import '@testing-library/jest-dom/vitest';

// jsdom ne fournit pas matchMedia (utilisé par framer-motion useReducedMotion).
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}

// jsdom ne fournit pas scrollTo.
window.scrollTo = () => {};
