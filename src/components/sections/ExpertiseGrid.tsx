import { EXPERTISES } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { IconArrowRight, IconCheck } from '@/components/ui/icons';
import type { Expertise } from '@/types';

interface ExpertiseGridProps {
  /** Limite le nombre de cartes (aperçu sur l'accueil). */
  limit?: number;
  /** Affiche la liste détaillée des résultats. */
  detailed?: boolean;
}

function ExpertiseCard({ item, detailed }: { item: Expertise; detailed: boolean }) {
  const Icon = item.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-4xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl text-ink-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.summary}</p>

      {detailed && (
        <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
          {item.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2.5 text-sm text-ink-700">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {o}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        En savoir plus
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
}

export function ExpertiseGrid({ limit, detailed = false }: ExpertiseGridProps) {
  const items = limit ? EXPERTISES.slice(0, limit) : EXPERTISES;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="div" key={item.slug} delay={(i % 3) * 0.08} className="h-full">
          <ExpertiseCard item={item} detailed={detailed} />
        </Reveal>
      ))}
    </div>
  );
}
