import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

/**
 * Bouton « Prendre contact » fixé en bas à gauche, visible du début de la
 * section `from` jusqu’à la fin de la section `to` (ids du DOM). Masqué tant qu'une section de `hideWhenVisible` est visible. Mobile uniquement.
 */
export function FloatingContact({ from, to, hideWhenVisible = [] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const start = document.getElementById(from);
      const end = document.getElementById(to);
      if (!start || !end) return;
      const h = window.innerHeight;
      const covered = hideWhenVisible.some((id) => {
        const r = document.getElementById(id)?.getBoundingClientRect();
        return r && r.bottom > 0 && r.top < h;
      });
      setVisible(
        !covered &&
          start.getBoundingClientRect().top <= h &&
          end.getBoundingClientRect().bottom > h * 0.5,
      );
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [from, to, hideWhenVisible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-40 lg:hidden"
        >
          <Button to="/contact" size="md" variant="primary" className="shadow-lift">
            Prendre contact
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
