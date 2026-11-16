import { Highlight } from '@/components/ui/Highlight';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { IconArrowRight, IconLinkedin } from '@/components/ui/icons';
import { Parcours } from '@/components/sections/Parcours';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { consultantId } from '@/lib/consultant';
import { SITE } from '@/config/site';
import { cn } from '@/lib/cn';

/** Présentation d'un consultant : portrait + parcours. `reverse` inverse les colonnes. */
const BASE = import.meta.env.BASE_URL;

/** Met en valeur les passages entre `**…**` dans un titre. */
function renderTitle(title) {
  return title
    .split(/\*\*(.+?)\*\*/)
    .map((part, i) => (i % 2 ? <Highlight key={part}>{part}</Highlight> : part));
}

export function AboutConsultant({ consultant, reverse = false }) {
  const { firstName, photo, role, linkedin, title, paragraphs } = consultant;
  return (
    <Section id={consultantId(consultant)} spacing="lg">
      <div
        className={cn(
          'grid gap-12 lg:items-center',
          reverse ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]',
        )}
      >
        <Reveal className={cn(reverse && 'lg:order-last')}>
          <div className="relative mx-auto w-full max-w-sm">
            <img
              src={`${BASE}${photo}`}
              alt={`Portrait de ${firstName}`}
              loading="lazy"
              decoding="async"
              width={640}
              height={640}
              className="aspect-[4/5] w-full rounded-5xl object-cover object-[50%_25%] shadow-lift"
            />
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-lift">
              <p className="text-sm font-semibold text-ink-900">{firstName}</p>
              <p className="text-xs text-brand-600">{role}</p>
            </div>
          </div>
        </Reveal>

        <div className={cn(reverse && 'lg:order-first')}>
          <SectionHeading eyebrow={`À propos de ${firstName}`} title={renderTitle(title)} />
          <div className="prose-clean mt-6 max-w-xl text-ink-600">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/contact" variant="primary">
              Faisons connaissance
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={linkedin || SITE.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0a66c2] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b5cad] hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a66c2] focus-visible:ring-offset-2"
            >
              <IconLinkedin className="h-5 w-5" />
              Me suivre sur LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Parcours firstName={firstName} />
    </Section>
  );
}

/** Valeurs Vakom (APPARES) — section sombre. */
export function AboutValues() {
  return (
    <section className="overflow-hidden py-10 sm:py-14">
      <div className="container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Nos valeurs</span>
          <h2 className="mt-3 font-display text-2xl text-ink-900 sm:text-3xl">
            Vakom, des valeurs
          </h2>
          <p
            aria-label="APPARES"
            className="mt-1 bg-gradient-to-r from-brand-500 via-brand-500 to-brand-700 bg-clip-text font-display text-5xl font-bold leading-none tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            APPARES
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-600">
            Un mot voulu, pas une faute de frappe. Ses sept lettres sont les initiales de nos
            valeurs, et elles doivent se voir : des valeurs qui apparaissent dans la manière dont on
            travaille ensemble.
          </p>
        </Reveal>

        <ValuesGrid />
      </div>
    </section>
  );
}
