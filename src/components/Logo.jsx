import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { SITE } from '@/config/site';

const BASE = import.meta.env.BASE_URL;

/** Logo Vakom : version rose sur fond clair, blanche (`tone="light"`) sur fond sombre. */
export function Logo({ tone = 'dark', className }) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-3', className)}
      aria-label={`Vakom, ${SITE.consultant.firstName} — accueil`}
    >
      <img
        src={`${BASE}${tone === 'light' ? 'logo-vakom-blanc.png' : 'logo-vakom-rose.png'}`}
        alt=""
        className="h-11 w-auto"
      />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-xl font-medium tracking-tight',
            tone === 'light' ? 'text-white' : 'text-ink-900',
          )}
        >
          Vakom Rodez
        </span>
        <span
          className={cn(
            'text-[0.8rem] font-medium',
            tone === 'light' ? 'text-ink-300' : 'text-ink-500',
          )}
        >
          Stephen Keller
        </span>
      </span>
    </Link>
  );
}
