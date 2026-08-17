import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { StatsRow } from '@/components/sections/StatsRow';
import { Button } from '@/components/ui/Button';
import { IconArrowRight, IconCheck } from '@/components/ui/icons';
import { SITE } from '@/config/site';

const JOURNEY = [
  {
    year: '2010',
    title: 'Premiers pas dans le management',
    text: 'Manager opérationnel, je découvre sur le terrain que la réussite d’une équipe tient d’abord à la qualité des relations.',
  },
  {
    year: '2015',
    title: 'Le tournant des ressources humaines',
    text: 'Je me spécialise dans l’accompagnement humain : recrutement, développement des compétences et conduite du changement.',
  },
  {
    year: '2019',
    title: 'Certification aux outils d’évaluation',
    text: 'Je me forme aux approches comportementales et aux outils d’évaluation des motivations et du potentiel relationnel.',
  },
  {
    year: '2024',
    title: 'Consultant au sein du réseau Vakom',
    text: 'Je rejoins le réseau Vakom pour conjuguer une méthode éprouvée et un accompagnement de proximité, au plus près de mes clients.',
  },
];

const CONVICTIONS = [
  'La bienveillance n’exclut jamais l’exigence.',
  'Un désaccord bien posé vaut mieux qu’un consensus mou.',
  'On ne change pas les gens : on crée les conditions pour qu’ils évoluent.',
  'La confiance se construit dans la durée, par la constance.',
];

export default function About() {
  useSeo(PAGE_SEO.about);

  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Un partenaire humain pour vos <span className="text-brand-600">enjeux humains</span>
          </>
        }
        description={`${SITE.consultant.firstName}, consultant au sein du réseau Vakom. Depuis quinze ans, j’aide les organisations à faire de l’humain leur premier levier de performance.`}
      >
        <Button to="/contact" variant="primary">
          Faisons connaissance
          <IconArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      {/* Portrait + intro */}
      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-5xl bg-gradient-to-br from-ink-800 to-ink-950 shadow-lift">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] text-white/90">
                    {SITE.consultant.firstName.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-lift">
                <p className="text-sm font-semibold text-ink-900">{SITE.consultant.firstName}</p>
                <p className="text-xs text-brand-600">Consultant Vakom</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Mon histoire"
              title="Du management de terrain à l’accompagnement humain"
            />
            <div className="prose-clean mt-6 max-w-xl text-ink-600">
              <p>
                Mon parcours a commencé là où tout se joue : sur le terrain, à la tête d’équipes aux
                personnalités et aux attentes variées. J’y ai appris que les meilleures stratégies
                ne valent rien sans l’adhésion sincère des personnes qui les portent.
              </p>
              <p>
                Cette conviction m’a naturellement conduit vers l’accompagnement humain.
                Aujourd’hui, en tant que consultant indépendant au sein du réseau Vakom, je mets une
                méthode reconnue et des outils d’évaluation éprouvés au service d’un accompagnement
                profondément personnalisé.
              </p>
              <p>
                Ma promesse est simple : vous apporter un regard lucide et bienveillant, et vous
                aider à passer du constat à l’action, durablement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Parcours timeline */}
      <Section className="bg-sand-100" spacing="lg">
        <SectionHeading eyebrow="Mon parcours" title="Quelques étapes clés" className="mb-12" />
        <ol className="relative grid gap-8 sm:grid-cols-2">
          {JOURNEY.map((item, i) => (
            <Reveal as="li" key={item.year} delay={(i % 2) * 0.1}>
              <div className="flex gap-5 rounded-4xl border border-ink-100 bg-white p-7 shadow-soft">
                <span className="font-display text-2xl text-brand-500">{item.year}</span>
                <div>
                  <h3 className="font-display text-lg text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Convictions */}
      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Mes convictions"
            title="Ce en quoi je crois"
            description="Quelques principes simples qui guident ma manière de travailler avec vous et vos équipes."
          />
          <Reveal>
            <ul className="space-y-4">
              {CONVICTIONS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-4 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-ink-800">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container">
          <StatsRow tone="light" />
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <CtaBand />
      </div>
    </>
  );
}
