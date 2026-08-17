import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // GitHub Pages sert ce projet sous /vakom_stephen/ (project page).
  // `vite preview` sert le dossier déjà buildé (chemins /vakom_stephen/ figés
  // dans le HTML) : il doit donc utiliser le même base que le build.
  base: command === 'build' || isPreview ? '/vakom_stephen/' : '/',
  server: {
    host: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
  },
}));
