import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { SITE } from '@/config/site';

/**
 * Signature du consultant. Le point magenta rappelle discrètement l'univers
 * Vakom tout en affirmant une marque personnelle (le prénom en display serif).
 */
export function Logo({ tone = 'dark', className }) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label={`${SITE.consultant.firstName} — accueil`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white transition-transform duration-300 group-hover:-rotate-6">
        <span className="font-display text-lg leading-none">S</span>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand-500 ring-2 ring-sand-50" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg tracking-tight',
            tone === 'light' ? 'text-white' : 'text-ink-900',
          )}
        >
          {SITE.consultant.firstName}
        </span>
        <span
          className={cn(
            'text-[0.62rem] font-semibold uppercase tracking-[0.16em]',
            tone === 'light' ? 'text-ink-300' : 'text-brand-600',
          )}
        >
          Consultant Vakom
        </span>
      </span>
    </Link>
  );
}
