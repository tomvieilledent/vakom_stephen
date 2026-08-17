import { TESTIMONIALS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { IconQuote } from '@/components/ui/icons';

function initials(name) {
  return name
    .split(' ')
    .map((p) => p.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-4xl border border-ink-100 bg-white p-8 shadow-soft">
      <IconQuote className="h-8 w-8 text-brand-200" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink-800">
        « {t.quote} »
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-white">
          {initials(t.author)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-ink-900">{t.author}</span>
          <span className="block text-ink-500">
            {t.role} · {t.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({ limit }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((t, i) => (
        <Reveal as="div" key={t.author} delay={(i % 2) * 0.1} className="h-full">
          <TestimonialCard t={t} />
        </Reveal>
      ))}
    </div>
  );
}
