import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '@/config/site';
import { Logo } from '@/components/brand/Logo';
import { IconLinkedin, IconMail, IconMapPin } from '@/components/ui/icons';
import { isAnalyticsConfigured, openConsentBanner, resetConsent } from '@/lib/analytics';

const LEGAL_LINKS = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/confidentialite' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-200">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-ink-300">
              {SITE.consultant.network}. J’accompagne les dirigeants et les équipes à révéler leur
              potentiel humain, pour une performance durable et sereine.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:bg-brand-500 hover:text-white"
                aria-label="Profil LinkedIn"
              >
                <IconLinkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:bg-brand-500 hover:text-white"
                aria-label="Envoyer un e-mail"
              >
                <IconMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ink-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="inline-flex items-center gap-2 text-ink-200 transition-colors hover:text-white"
                >
                  <IconMail className="h-4 w-4 text-brand-400" />
                  {SITE.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-200">
                <IconMapPin className="h-4 w-4 text-brand-400" />
                {SITE.consultant.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-800 pt-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.consultant.firstName} · {SITE.consultant.network}. Marque Vakom citée
            avec l’aimable autorisation du réseau.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            {isAnalyticsConfigured() && (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    resetConsent();
                    openConsentBanner();
                  }}
                  className="transition-colors hover:text-white"
                >
                  Gérer mes cookies
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
