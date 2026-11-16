import { MES_VALEURS, PARCOURS } from '@/config/parcours';
import { SectionHeading } from '@/components/ui/Section';
import { Highlight } from '@/components/ui/Highlight';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const BASE = import.meta.env.BASE_URL;

/** Frise compacte du parcours professionnel d'un consultant. */
export function Parcours({ firstName }) {
  const steps = PARCOURS[firstName];
  const valeurs = MES_VALEURS[firstName];
  if (!steps?.length) return null;

  return (
    <div className="mt-14 grid gap-12 border-t border-ink-100 pt-12 lg:grid-cols-2 lg:gap-14">
      <div className="order-2 lg:order-1">
        <SectionHeading
          eyebrow={`Le parcours de ${firstName}`}
          title={
            <>
              Quinze ans de <Highlight>terrain</Highlight>, du rayon à la direction
            </>
          }
        />

        <ol className="relative mt-8 space-y-3 pl-7">
          <span
            aria-hidden
            className="absolute bottom-3 left-[0.4rem] top-3 w-0.5 rounded-full bg-gradient-to-b from-brand-200 via-brand-500 to-brand-600"
          />
          {steps.map((s) => (
            <Reveal as="li" key={s.company} className="relative">
              <span
                aria-hidden
                className={cn(
                  'absolute -left-7 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white',
                  s.current
                    ? 'bg-brand-600 ring-4 ring-brand-200'
                    : 'bg-brand-400 ring-2 ring-brand-100',
                )}
              />
              <div
                className={cn(
                  'grid items-center gap-x-5 gap-y-2 rounded-2xl border px-4 py-3 sm:grid-cols-[6rem_1fr]',
                  s.current
                    ? 'border-transparent bg-gradient-to-r from-brand-600 to-brand-500 text-white'
                    : 'border-ink-100 bg-white',
                )}
              >
                <img
                  src={`${BASE}${s.logo}`}
                  alt={s.company}
                  loading="lazy"
                  className="max-h-10 w-auto max-w-full rounded-sm object-contain"
                />
                <ul className="space-y-1.5">
                  {s.roles.map((r) => (
                    <li
                      key={r.period}
                      className="grid gap-x-4 sm:grid-cols-[6.25rem_1fr] sm:items-baseline"
                    >
                      <span
                        className={cn(
                          'whitespace-nowrap font-display text-base',
                          s.current ? 'text-white' : 'text-brand-600',
                        )}
                      >
                        {r.period}
                      </span>
                      <span className="text-sm leading-snug">
                        <span
                          className={cn('font-semibold', s.current ? 'text-white' : 'text-ink-900')}
                        >
                          {r.title}
                        </span>
                        <span className={s.current ? 'text-white/85' : 'text-ink-500'}>
                          {' '}
                          · {r.place}
                        </span>
                        {r.detail && (
                          <span
                            className={cn(
                              'block text-xs',
                              s.current ? 'text-white/90' : 'text-brand-700',
                            )}
                          >
                            {r.detail}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {valeurs && (
        <Reveal className="order-1 flex flex-col lg:order-2">
          <SectionHeading
            eyebrow="Mes valeurs"
            title={
              <>
                Ce qui <Highlight>m’anime</Highlight>
                <br className="hidden lg:block" /> au quotidien
              </>
            }
          />
          <p className="mt-6 text-ink-600">{valeurs.intro}</p>
          <ul className="mt-6 flex flex-1 flex-col gap-4">
            {valeurs.items.map((v) => (
              <li
                key={v.title}
                className="flex flex-1 flex-col justify-center rounded-2xl border border-ink-100 bg-white px-5 py-3"
              >
                <h3 className="font-display text-lg text-ink-900">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}
