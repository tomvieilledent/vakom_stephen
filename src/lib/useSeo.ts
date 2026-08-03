import { useEffect } from 'react';
import { SITE } from '@/config/site';

interface SeoOptions {
  title: string;
  description: string;
  /** Chemin canonique (ex. "/expertises"). */
  path?: string;
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
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
 * un pré-rendu statique (vite-plugin-ssg) — voir TODO.txt.
 */
export function useSeo({ title, description, path = '' }: SeoOptions): void {
  useEffect(() => {
    const fullTitle = `${title} · ${SITE.consultant.firstName} — Consultant Vakom`;
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
