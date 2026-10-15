/**
 * Jeu d'icônes « line » cohérent (stroke 1.6), dessiné à la main pour éviter
 * une dépendance externe et garder un poids minimal. Toutes héritent de
 * `currentColor` et acceptent les props SVG standard (a11y via `aria-hidden`).
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const IconCompass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
);

export const IconUsers = (p) => (
  <svg {...base} {...p}>
    <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
    <circle cx="9" cy="7" r="3.2" />
    <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
    <path d="M16 3.6a4 4 0 0 1 0 7" />
  </svg>
);

export const IconTarget = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" />
  </svg>
);

export const IconSparkles = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
    <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </svg>
);

export const IconGrowth = (p) => (
  <svg {...base} {...p}>
    <path d="M3 20h18" />
    <path d="M6 20v-5" />
    <path d="M11 20V9" />
    <path d="M16 20v-8" />
    <path d="M21 20V5" />
    <path d="m14 6 3-3 0 0" />
  </svg>
);

export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="m4 12 5 5L20 6" />
  </svg>
);

export const IconQuote = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M9.5 6C6.5 7 5 9.3 5 12.9V18h5.2v-5.2H7.9c0-2.2 .9-3.5 2.6-4.1L9.5 6zm9 0c-3 1-4.5 3.3-4.5 6.9V18h5.2v-5.2h-2.3c0-2.2 .9-3.5 2.6-4.1L18.5 6z" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5c0 8 7 15 15 15l1.5-3.2-4-2-1.6 1.6a11 11 0 0 1-4.9-4.9l1.6-1.6-2-4L6.5 5H4z" />
  </svg>
);

export const IconMapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconLinkedin = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4z" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
