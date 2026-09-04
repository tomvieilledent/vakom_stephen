import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { BackToTop } from './BackToTop';
import { CookieConsent } from '@/components/PrivacyBanner';
import { initAnalytics } from '@/lib/analytics';

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-live="polite" aria-busy>
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-brand-500" />
      <span className="sr-only">Chargement…</span>
    </div>
  );
}

export function Layout() {
  // Recharge l'analytics si le consentement a déjà été accordé.
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
