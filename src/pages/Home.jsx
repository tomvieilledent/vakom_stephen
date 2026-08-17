import { Link } from 'react-router-dom';
import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { HomeHero } from '@/components/sections/HomeHero';
import { LogosMarquee } from '@/components/sections/LogosMarquee';
import { ExpertiseGrid } from '@/components/sections/ExpertiseGrid';
import { MethodTimeline } from '@/components/sections/MethodTimeline';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { StatsRow } from '@/components/sections/StatsRow';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { IconArrowRight } from '@/components/ui/icons';

export default function Home() {
  useSeo(PAGE_SEO.home);

  return (
    <>
      <HomeHero />

      <div className="container pb-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Ils me font confiance, dans tous les secteurs
        </p>
        <LogosMarquee />
      </div>

      {/* Positionnement */}
      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Ma raison d’être"
            title={
              <>
                La performance durable naît d’abord des{' '}
                <span className="text-brand-600">relations humaines</span>.
              </>
            }
            description="Derrière chaque enjeu d’organisation, il y a des femmes et des hommes. Mon métier consiste à créer les conditions pour qu’ils se comprennent, coopèrent et donnent le meilleur — sans opposer exigence et bienveillance."
          />
          <Reveal className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Un regard extérieur',
                text: 'Neutre et bienveillant, pour nommer ce qui se joue vraiment et sortir des angles morts.',
              },
              {
                title: 'Des outils reconnus',
                text: 'La méthode et les outils d’évaluation Vakom, éprouvés sur le terrain depuis plus de 35 ans.',
              },
              {
                title: 'Du sur-mesure',
                text: 'Aucune recette toute faite : je pars de votre culture, vos contraintes et vos ambitions.',
              },
              {
                title: 'Des résultats concrets',
                text: 'Un constat ne suffit pas. Nous transformons le diagnostic en actions mesurables.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <h3 className="font-display text-lg text-ink-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{card.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Expertises */}
      <Section className="bg-sand-100" spacing="lg">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Mes expertises"
            title="Six domaines d’accompagnement"
            description="Du dirigeant au collaborateur, j’interviens sur l’ensemble du cycle de vie humain de votre organisation."
          />
          <Button to="/expertises" variant="ghost" className="shrink-0">
            Toutes mes expertises
            <IconArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <ExpertiseGrid />
      </Section>

      {/* Méthode */}
      <Section spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Ma méthode"
          title="Une démarche claire, en quatre temps"
          description="Une approche structurée et rassurante, du premier échange à l’ancrage durable des changements."
          className="mb-12"
        />
        <MethodTimeline />
        <div className="mt-10 text-center">
          <Button to="/methodologie" variant="secondary">
            Explorer ma méthodologie
            <IconArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Valeurs — section sombre */}
      <section className="bg-ink-950 py-24 sm:py-32">
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
          <div className="mt-16 border-t border-ink-800 pt-12">
            <StatsRow tone="light" />
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <Section className="bg-sand-100" spacing="lg">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Témoignages"
            title="La confiance de celles et ceux que j’accompagne"
          />
          <Button to="/temoignages" variant="ghost" className="shrink-0">
            Tous les témoignages
            <IconArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <TestimonialGrid limit={2} />
      </Section>

      {/* À propos teaser */}
      <Section spacing="lg">
        <Reveal className="mx-auto max-w-3xl rounded-5xl border border-ink-100 bg-white p-8 text-center shadow-soft sm:p-12">
          <span className="eyebrow justify-center">Qui suis-je</span>
          <p className="mt-5 text-2xl leading-relaxed text-ink-800 sm:text-[1.7rem]">
            « Je crois profondément qu’une organisation ne performe durablement que lorsque chacun y
            trouve sa place et du sens. C’est cette conviction que je mets à votre service. »
          </p>
          <div className="mt-8">
            <Link to="/a-propos" className="link-underline">
              Découvrir mon parcours
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <div className="pb-24 sm:pb-32">
        <CtaBand />
      </div>
    </>
  );
}
