import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SUBNAV } from '@/config/site';
import { CONSULTANTS } from '@/config/content';
import { consultantId } from '@/lib/consultant';
import { cn } from '@/lib/cn';

/**
 * Seconde barre de navigation : ancres vers les sections de la page courante.
 * Fond en dégradé de la marque, avec mise en évidence de la section visible.
 */
export function SubNav() {
  const { pathname } = useLocation();
  // Sur « À propos », un lien par consultant précède les ancres fixes.
  const items =
    pathname === '/a-propos'
      ? [
          ...CONSULTANTS.map((c) => ({ label: c.firstName, id: consultantId(c) })),
          ...SUBNAV[pathname],
        ]
      : SUBNAV[pathname];
  const [active, setActive] = useState(null);

  // Repère la section en cours : la dernière dont le haut a dépassé 40 % de la
  // hauteur de l'écran (elle reste active jusqu'en bas de page).
  useEffect(() => {
    setActive(null);
    if (!items) return undefined;
    const update = () => {
      const line = window.innerHeight * 0.4;
      let current = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Pages chargées à la demande : on recalcule quand le contenu change de taille.
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(document.body);
    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items]);

  if (!items) return null;

  return (
    <motion.nav
      key={pathname}
      aria-label="Sections de la page"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-r from-brand-600/95 via-[#a8267f]/95 to-[#771f8b]/95 shadow-soft backdrop-blur-md"
    >
      <ul className="container flex gap-1 overflow-x-auto py-2 sm:justify-center">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'group relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                active === item.id ? 'text-brand-700' : 'text-white/85 hover:text-white',
              )}
            >
              {active === item.id && (
                <motion.span
                  layoutId="subnav-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {active !== item.id && (
                <span className="absolute inset-0 rounded-full bg-white/0 transition-colors group-hover:bg-white/15" />
              )}
              <span className="relative">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
