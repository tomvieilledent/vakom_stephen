import { STATS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { Stars } from '@/components/ui/Stars';
import { cn } from '@/lib/cn';

/** « 4,5/5 (17) » → { rating: 4.5, count: '17' } ; sinon null. */
function parseRating(value) {
  const m = value.match(/^(\d+(?:[.,]\d+)?)\s*\/\s*5(?:\s*\((\d+)\))?$/);
  return m ? { rating: Number(m[1].replace(',', '.')), count: m[2] } : null;
}

export function StatsRow({ tone = 'dark' }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {STATS.map((stat, i) => (
        <Reveal as="div" key={stat.label} delay={i * 0.08}>
          <dt
            className={cn(
              'font-display text-4xl sm:text-5xl',
              tone === 'light' ? 'text-white' : 'text-ink-900',
            )}
          >
            {(() => {
              const r = parseRating(stat.value);
              return r ? (
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Stars rating={r.rating} className="h-6 w-6 sm:h-7 sm:w-7" />
                  {r.count && <span className="font-sans text-sm font-medium">{r.count} avis</span>}
                </span>
              ) : (
                stat.value
              );
            })()}
          </dt>
          <dd
            className={cn(
              'mt-2 text-sm leading-snug',
              tone === 'light' ? 'text-ink-300' : 'text-ink-500',
            )}
          >
            {stat.label}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
