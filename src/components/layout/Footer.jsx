import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '@/config/site';
import { Logo } from '@/components/Logo';
import { IconArrowUpRight, IconLinkedin, IconMail, IconMapPin } from '@/components/ui/icons';
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
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0a66c2] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b5cad] hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a66c2] focus-visible:ring-offset-2"
              >
                <IconLinkedin className="h-5 w-5" />
                Me suivre sur LinkedIn
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to ?? link.href}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-ink-200 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">
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

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-800 pt-6 text-xs text-ink-300 md:flex-row md:items-center md:justify-between">
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
