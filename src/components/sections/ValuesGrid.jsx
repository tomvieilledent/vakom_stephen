import { VALUES } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

/** Liste éditoriale des valeurs : l'initiale de chaque valeur est mise en avant (APPARES). */
export function ValuesGrid() {
  return (
    <ol className="divide-y divide-ink-100 border-y border-ink-100">
      {VALUES.map((value, i) => (
        <Reveal as="li" key={value.title} delay={i * 0.04}>
          <div className="grid grid-cols-[2.5rem_1fr] items-center gap-x-5 gap-y-1 py-3 sm:grid-cols-[3rem_13rem_1fr] sm:gap-x-6 sm:py-2.5">
            <span
              aria-hidden
              className="row-span-2 font-display text-4xl font-bold leading-none text-brand-500 sm:row-span-1 sm:text-5xl"
            >
              {value.letter}
            </span>
            <h3 className="font-display text-xl text-ink-900">{value.title}</h3>
            <p className="text-sm leading-snug text-ink-600">{value.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
