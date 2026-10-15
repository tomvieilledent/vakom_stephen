import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

const SPACING = {
  sm: 'py-14 sm:py-16',
  md: 'py-12 sm:py-16',
  lg: 'py-14 sm:py-20',
};

export function Section({ children, id, className, spacing = 'md' }) {
  return (
    <section id={id} className={cn(SPACING[spacing], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  tone = 'dark',
}) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className={cn('eyebrow', tone === 'light' && 'text-brand-300')}>
          <span className="h-px w-6 bg-current opacity-60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className={cn('mt-4 text-display-sm', tone === 'light' ? 'text-white' : 'text-ink-900')}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            tone === 'light' ? 'text-ink-200' : 'text-ink-500',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
