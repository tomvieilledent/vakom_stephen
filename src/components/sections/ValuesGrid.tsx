import { VALUES } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

export function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {VALUES.map((value, i) => (
        <Reveal as="div" key={value.title} delay={i * 0.08} className="h-full">
          <div className="flex h-full flex-col rounded-4xl border border-ink-800 bg-ink-900 p-7">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 font-display text-2xl text-brand-300">
              {value.letter}
            </span>
            <h3 className="mt-5 font-display text-xl text-white">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">{value.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
