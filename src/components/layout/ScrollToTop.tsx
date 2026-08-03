import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remet le scroll en haut à chaque changement de route (hors ancres).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
