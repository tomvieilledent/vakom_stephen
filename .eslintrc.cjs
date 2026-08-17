/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', 'node_modules', '*.cjs', 'vite.config.js', 'tailwind.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      // Fichiers exécutés côté Node (outillage, tests E2E).
      files: ['scripts/**/*.js', 'e2e/**/*.js', 'playwright.config.js', 'vitest.config.js'],
      env: { node: true },
    },
  ],
};
