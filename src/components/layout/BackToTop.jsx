import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconArrowRight } from '@/components/ui/icons';

/**
 * Bouton « revenir en haut » qui apparaît après un défilement significatif.
 * Accessible (label explicite) et discret (masqué tant qu'inutile).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Revenir en haut de la page"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-lift transition-colors hover:bg-brand-500"
        >
          <IconArrowRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
