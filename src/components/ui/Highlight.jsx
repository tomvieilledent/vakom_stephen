import { cn } from '@/lib/cn';

/** Mot mis en valeur : coloré et souligné d'un trait dessiné à la main. */
export function Highlight({ children, tone = 'dark', className }) {
  return (
    <span
      className={cn(
        'relative whitespace-nowrap',
        tone === 'light' ? 'text-brand-300' : 'text-brand-600',
        className,
      )}
    >
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 12"
        className={cn(
          'absolute -bottom-1.5 left-0 h-2.5 w-full',
          tone === 'light' ? 'text-brand-400/70' : 'text-brand-300',
        )}
        preserveAspectRatio="none"
      >
        <path
          d="M2 8c60-6 120-6 180-3s90 3 116-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
