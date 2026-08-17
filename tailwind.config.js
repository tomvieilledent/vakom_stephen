/**
 * Design system — Consultant Vakom.
 *
 * Cohérence avec l'univers Vakom (magenta « le sens de l'Humain ») tout en
 * affirmant une identité propre : base sobre et lumineuse (crème / encre nuit),
 * accent magenta comme signal de marque, touche chaude pour l'humain.
 */
const config = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        // Accent de marque (rappel Vakom)
        brand: {
          50: '#fff0f8',
          100: '#ffe0f1',
          200: '#ffc0e3',
          300: '#ff8fce',
          400: '#fb50ad',
          500: '#e5007d', // magenta signature
          600: '#c30069',
          700: '#9e0056',
          800: '#820549',
          900: '#6c0a40',
          950: '#420022',
        },
        // Encre nuit — identité premium du consultant
        ink: {
          50: '#f4f5fa',
          100: '#e7e9f3',
          200: '#c9cee2',
          300: '#9aa3c6',
          400: '#6572a3',
          500: '#455286',
          600: '#343e6c',
          700: '#2b3358',
          800: '#1e2442',
          900: '#131936',
          950: '#0b0f24',
        },
        // Base lumineuse
        sand: {
          50: '#fdfbf9',
          100: '#faf6f1',
          200: '#f3ebe1',
          300: '#e8dccd',
          400: '#d8c6b0',
        },
        // Touche chaude — le sens de l'humain
        warm: {
          400: '#f4a259',
          500: '#ef8f3c',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': [
          'clamp(2.75rem, 6vw, 4.75rem)',
          { lineHeight: '1.03', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          'clamp(2.1rem, 4.4vw, 3.4rem)',
          { lineHeight: '1.06', letterSpacing: '-0.018em' },
        ],
        'display-sm': [
          'clamp(1.65rem, 3vw, 2.35rem)',
          { lineHeight: '1.12', letterSpacing: '-0.014em' },
        ],
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,25,54,0.04), 0 8px 30px -12px rgba(19,25,54,0.15)',
        lift: '0 24px 60px -24px rgba(19,25,54,0.28)',
        glow: '0 20px 60px -20px rgba(229,0,125,0.35)',
      },
      backgroundImage: {
        'grid-ink':
          'linear-gradient(to right, rgba(19,25,54,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(19,25,54,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
