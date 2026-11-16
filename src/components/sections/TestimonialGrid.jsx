import { useState } from 'react';
import { TESTIMONIALS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { IconQuote } from '@/components/ui/icons';
import { SITE } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { IconArrowUpRight } from '@/components/ui/icons';
import { Stars } from '@/components/ui/Stars';

function initials(name) {
  return name
    .split(' ')
    .map((p) => p.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/** Au-delà de ce nombre de caractères, la citation est repliée avec « Lire la suite ». */
const LONG_QUOTE = 200;

function TestimonialCard({ t }) {
  const isLong = t.quote.length > LONG_QUOTE;
  const [open, setOpen] = useState(false);
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <IconQuote className="h-6 w-6 text-brand-200" />
        {t.rating > 0 && <Stars rating={t.rating} className="h-4 w-4" />}
      </div>
      <div className="mt-3 flex-1">
        <blockquote
          className={`text-sm leading-relaxed text-ink-800 ${isLong && !open ? 'line-clamp-5' : ''}`}
        >
          « {t.quote} »
        </blockquote>
        {isLong && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-2 text-sm font-semibold text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          >
            {open ? 'Réduire' : 'Lire la suite'}
          </button>
        )}
      </div>
      <figcaption className="mt-4 flex min-h-[5rem] items-center gap-3 border-t border-ink-100 pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-white">
          {initials(t.author)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-ink-900">{t.author}</span>
          <span className="block text-ink-500">
            {[t.role, t.company].filter(Boolean).join(' · ')}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({ limit }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((t, i) => (
          <Reveal as="div" key={t.author} delay={(i % 2) * 0.1} className="h-full">
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          href={SITE.contact.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          Lire tous les avis Google
          <IconArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
