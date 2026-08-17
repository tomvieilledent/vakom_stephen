import { STATS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

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
            {stat.value}
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
