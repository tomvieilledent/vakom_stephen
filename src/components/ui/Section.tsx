import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Densité verticale. */
  spacing?: 'sm' | 'md' | 'lg';
}

const SPACING = {
  sm: 'py-14 sm:py-16',
  md: 'py-20 sm:py-24',
  lg: 'py-24 sm:py-32',
};

export function Section({ children, id, className, spacing = 'md' }: SectionProps) {
  return (
    <section id={id} className={cn(SPACING[spacing], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  tone?: 'dark' | 'light';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  tone = 'dark',
}: SectionHeadingProps) {
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
