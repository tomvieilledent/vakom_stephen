import { useEffect } from 'react';
import { SITE } from '@/config/site';

function setMeta(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Gère le SEO par page côté client (title, description, OG, canonical).
 * Léger et suffisant pour une SPA ; pour un SEO indexé au rendu, envisager
 * un pré-rendu statique (vite-plugin-ssg).
 */
export function useSeo({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = `${title} · Vakom Rodez`;
    const url = `${SITE.url}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setCanonical(url);
  }, [title, description, path]);
}
