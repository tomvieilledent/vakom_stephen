import { useEffect } from 'react';

/**
 * Injecte un bloc de données structurées (schema.org) dans le <head>.
 *
 * Le type `application/ld+json` est un bloc de données (non exécuté) : il est
 * autorisé par la CSP sans `unsafe-inline`. Le script est retiré au démontage
 * pour éviter les doublons lors des changements de route.
 */
export function JsonLd({ data }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}
