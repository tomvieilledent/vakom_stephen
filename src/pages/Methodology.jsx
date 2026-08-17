import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { MethodTimeline } from '@/components/sections/MethodTimeline';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { IconCheck } from '@/components/ui/icons';

const PRINCIPLES = [
  {
    title: 'Partir du réel',
    text: 'Aucune théorie plaquée : j’observe vos situations concrètes avant de proposer quoi que ce soit.',
  },
  {
    title: 'Objectiver sans juger',
    text: 'Les outils d’évaluation éclairent les comportements et les motivations, jamais pour étiqueter, toujours pour comprendre.',
  },
  {
    title: 'Co-construire',
    text: 'Vous êtes acteur de la démarche. Les solutions que nous bâtissons ensemble sont les vôtres.',
  },
  {
    title: 'Mesurer les effets',
    text: 'Nous définissons dès le départ des indicateurs de réussite pour objectiver les progrès.',
  },
];

const TOOLS = [
  'Évaluation des comportements et des motivations',
  'Analyse des dynamiques et complémentarités d’équipe',
  'Diagnostic des pratiques managériales et RH',
  'Bilans de potentiel et plans de développement',
];

export default function Methodology() {
  useSeo(PAGE_SEO.methodology);

  return (
    <>
      <PageHero
        eyebrow="Ma méthodologie"
        title={
          <>
            Une méthode <span className="text-brand-600">rigoureuse</span>, un accompagnement humain
          </>
        }
        description="Parce qu’un constat ne suffit pas pour avancer, ma démarche relie diagnostic lucide et passage à l’action, du premier échange jusqu’à l’ancrage durable."
      />

      {/* Étapes */}
      <Section spacing="lg">
        <SectionHeading
          eyebrow="La démarche"
          title="Quatre temps pour transformer durablement"
          className="mb-12"
        />
        <MethodTimeline />
      </Section>

      {/* Principes */}
      <Section className="bg-sand-100" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Mes principes"
            title="Ce qui fait la différence dans mon approche"
            description="Quatre partis pris qui garantissent un accompagnement à la fois sérieux et profondément humain."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="div" key={p.title} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-4xl border border-ink-100 bg-white p-7 shadow-soft">
                  <h3 className="font-display text-lg text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Outils */}
      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="rounded-5xl bg-ink-900 p-8 sm:p-10">
              <h3 className="font-display text-2xl text-white">
                Des outils au service de l’humain
              </h3>
              <p className="mt-4 text-ink-300">
                Je m’appuie sur les outils d’évaluation du réseau Vakom, validés et éprouvés. Ils
                sont toujours restitués lors d’un entretien : l’outil éclaire la décision, il ne la
                remplace jamais.
              </p>
              <ul className="mt-8 space-y-3">
                {TOOLS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Éthique & confidentialité"
              title="Un cadre clair et sécurisant"
              description="Chaque intervention repose sur des engagements fermes, garants d’une relation de confiance."
            />
            <ul className="mt-6 space-y-4 text-ink-600">
              <li>
                <strong className="text-ink-900">Confidentialité absolue</strong> — ce qui se dit
                dans le cadre de l’accompagnement reste strictement confidentiel.
              </li>
              <li>
                <strong className="text-ink-900">Consentement éclairé</strong> — aucune évaluation
                sans restitution ni accord de la personne concernée.
              </li>
              <li>
                <strong className="text-ink-900">Liberté de la personne</strong> — mon rôle est
                d’éclairer, jamais de décider à votre place.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Valeurs sombres */}
      <section className="bg-ink-950 py-24 sm:py-28">
        <div className="container">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="Mes valeurs"
            title="L’humain, toujours au centre"
            className="mb-12"
          />
          <ValuesGrid />
        </div>
      </section>

      {/* FAQ */}
      <Section spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Questions fréquentes"
          title="Vous vous posez sûrement ces questions"
          className="mb-12"
        />
        <FaqAccordion />
      </Section>

      <div className="pb-24 sm:pb-32">
        <CtaBand />
      </div>
    </>
  );
}
