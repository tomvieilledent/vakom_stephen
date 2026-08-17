import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CONSENT_OPEN_EVENT, getConsent, isAnalyticsConfigured, setConsent } from '@/lib/analytics';

/**
 * Bannière de consentement — affichée uniquement si une solution d'analytics
 * est configurée ET qu'aucun choix n'a encore été enregistré.
 * Conforme à la politique de confidentialité (aucun traceur sans consentement).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isAnalyticsConfigured() && getConsent() === null) {
      setVisible(true);
    }
    // Permet de rouvrir la bannière depuis le pied de page (« Gérer mes cookies »).
    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  const decide = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-3xl border border-ink-100 bg-white/95 p-5 shadow-lift backdrop-blur-md sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-ink-600">
              J’utilise une mesure d’audience respectueuse de votre vie privée pour améliorer ce
              site. Aucun cookie publicitaire.{' '}
              <Link to="/confidentialite" className="font-medium text-brand-600 underline">
                En savoir plus
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => decide('denied')}
                className="h-10 rounded-full px-4 text-sm font-semibold text-ink-600 ring-1 ring-inset ring-ink-200 transition-colors hover:bg-ink-50"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decide('granted')}
                className="h-10 rounded-full bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
