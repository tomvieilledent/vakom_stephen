import '@testing-library/jest-dom/vitest';

// jsdom ne fournit pas matchMedia (utilisé par framer-motion useReducedMotion).
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom ne fournit pas scrollTo.
window.scrollTo = () => {};
