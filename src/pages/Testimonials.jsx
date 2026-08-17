import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { StatsRow } from '@/components/sections/StatsRow';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

const RESULTS = [
  {
    metric: 'Comité de direction',
    text: 'Alignement d’un CODIR de 8 personnes autour d’une feuille de route partagée en 3 séances.',
  },
  {
    metric: 'Recrutement clé',
    text: 'Sécurisation d’un recrutement stratégique confirmé à un an, avec une intégration réussie.',
  },
  {
    metric: 'Cohésion d’équipe',
    text: 'Baisse notable des tensions et regain d’engagement mesuré après un séminaire de cohésion.',
  },
];

export default function Testimonials() {
  useSeo(PAGE_SEO.testimonials);

  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title={
          <>
            Ils m’ont fait <span className="text-brand-600">confiance</span>
          </>
        }
        description="La meilleure preuve de la valeur d’un accompagnement, ce sont les personnes qui l’ont vécu. Voici quelques-uns de leurs retours."
      />

      <Section spacing="lg">
        <TestimonialGrid />
      </Section>

      {/* Résultats */}
      <Section className="bg-sand-100" spacing="lg">
        <SectionHeading
          eyebrow="Quelques résultats"
          title="Des accompagnements qui portent leurs fruits"
          description="Exemples représentatifs d’interventions (anonymisés par respect de la confidentialité)."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {RESULTS.map((r, i) => (
            <Reveal as="div" key={r.metric} delay={i * 0.08}>
              <div className="h-full rounded-4xl border border-ink-100 bg-white p-7 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {r.metric}
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container">
          <StatsRow tone="light" />
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <CtaBand
          title="Envie d’écrire la suite ensemble ?"
          description="Rejoignez celles et ceux qui ont fait de l’humain leur meilleur atout."
        />
      </div>
    </>
  );
}
