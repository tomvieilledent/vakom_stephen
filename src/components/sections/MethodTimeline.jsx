import { useState } from 'react';
import { METHOD_STEPS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

function MethodCard({ step }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative h-full min-h-[260px] [perspective:1400px]">
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${step.title} — afficher le détail`}
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        className="group h-full w-full text-left [transform-style:preserve-3d] transition-transform duration-500 ease-smooth"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Face avant */}
        <div className="absolute inset-0 flex flex-col rounded-4xl border border-ink-100 bg-white p-7 shadow-soft [backface-visibility:hidden]">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-brand-500">{step.step}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent" />
          </div>
          <h3 className="mt-5 font-display text-xl text-ink-900">{step.title}</h3>
          <span className="mt-auto pt-6 text-xs font-medium uppercase tracking-wide text-ink-400">
            Survoler pour en savoir plus
          </span>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 flex flex-col rounded-4xl border border-brand-200 bg-ink-900 p-7 shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-display text-2xl text-brand-400">{step.step}</span>
          <p className="mt-3 text-sm leading-relaxed text-ink-100">{step.description}</p>
        </div>
      </button>
    </div>
  );
}

export function MethodTimeline() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {METHOD_STEPS.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 0.1} className="relative h-full">
          <MethodCard step={step} />
        </Reveal>
      ))}
    </ol>
  );
}
