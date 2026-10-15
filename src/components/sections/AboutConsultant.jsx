import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { IconArrowRight, IconLinkedin } from '@/components/ui/icons';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { SITE } from '@/config/site';

/** Présentation du consultant : portrait + parcours. */
const BASE = import.meta.env.BASE_URL;

export function AboutConsultant() {
  return (
    <>
      <Section id="stephen" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <img
                src={`${BASE}stephen.png`}
                alt={`Portrait de ${SITE.consultant.firstName}`}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-5xl object-cover object-[50%_25%] shadow-lift"
              />
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-lift">
                <p className="text-sm font-semibold text-ink-900">{SITE.consultant.firstName}</p>
                <p className="text-xs text-brand-600">Consultant Vakom</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="À propos de moi"
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
                Aujourd’hui, en tant que consultant au sein du réseau Vakom, je mets une méthode
                reconnue et des outils d’évaluation éprouvés au service d’un accompagnement
                profondément personnalisé.
              </p>
              <p>
                Ma promesse est simple : vous apporter un regard lucide et bienveillant, et vous
                aider à passer du constat à l’action, durablement.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact" variant="primary">
                Faisons connaissance
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={SITE.contact.linkedin}
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
      </Section>

      {/* Valeurs — section sombre */}
      <section className="bg-ink-950 py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="Mes valeurs"
            title="Ce qui guide chacune de mes interventions"
            description="Quatre convictions qui font la cohérence de mon accompagnement, dans le droit fil des valeurs Vakom."
            className="mb-12"
          />
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
