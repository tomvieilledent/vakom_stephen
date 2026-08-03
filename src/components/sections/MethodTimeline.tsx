import { METHOD_STEPS } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

export function MethodTimeline() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {METHOD_STEPS.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 0.1} className="relative h-full">
          <div className="flex h-full flex-col rounded-4xl border border-ink-100 bg-white p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl text-brand-500">{step.step}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent" />
            </div>
            <h3 className="mt-5 font-display text-xl text-ink-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
