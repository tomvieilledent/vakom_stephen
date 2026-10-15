import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SUBNAV } from '@/config/site';
import { cn } from '@/lib/cn';

/**
 * Seconde barre de navigation : ancres vers les sections de la page courante.
 * Fond en dégradé de la marque, avec mise en évidence de la section visible.
 */
export function SubNav() {
  const { pathname } = useLocation();
  const items = SUBNAV[pathname];
  const [active, setActive] = useState(null);

  // Repère la section présente au centre de l'écran.
  useEffect(() => {
    setActive(null);
    if (!items || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
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
                'relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
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
                <span className="absolute inset-0 rounded-full bg-white/0 transition-colors hover:bg-white/15" />
              )}
              <span className="relative">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
