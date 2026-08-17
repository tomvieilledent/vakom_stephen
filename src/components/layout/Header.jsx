import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/config/site';
import { cn } from '@/lib/cn';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import { IconClose, IconMenu } from '@/components/ui/icons';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation.
  useEffect(() => setOpen(false), [location.pathname]);

  // Verrouille le scroll du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    cn(
      'relative px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'text-brand-600' : 'text-ink-600 hover:text-ink-900',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-100/70 bg-sand-50/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Aller au contenu
      </a>
      <div className="container flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contact" size="md" variant="primary">
            Prendre contact
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-900 ring-1 ring-inset ring-ink-200 lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-100 bg-sand-50 lg:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-white text-brand-600 shadow-soft'
                        : 'text-ink-700 hover:bg-white',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" size="lg" variant="primary" className="mt-2 w-full">
                Prendre contact
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
