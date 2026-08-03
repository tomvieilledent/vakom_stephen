import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** En-tête éditorial commun aux pages intérieures. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-sand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:theme(backgroundImage.grid-ink)] [background-size:44px_44px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
      />
      <div className="container relative py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-display-md text-ink-900">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
