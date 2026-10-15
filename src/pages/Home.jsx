import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { Highlight } from '@/components/ui/Highlight';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { RaisonDEtre } from '@/components/sections/RaisonDEtre';
import { HomeHero } from '@/components/sections/HomeHero';
import { ExpertiseBubbles } from '@/components/sections/ExpertiseBubbles';
import { MethodSolutions } from '@/components/sections/MethodSolutions';
import { CtaBand } from '@/components/sections/CtaBand';
import { IconArrowRight } from '@/components/ui/icons';

export default function Home() {
  useSeo(PAGE_SEO.home);

  return (
    <>
      <HomeHero />

      <RaisonDEtre />

      {/* Expertises */}
      <Section id="expertises" className="bg-sand-100" spacing="lg">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Mes expertises"
            title={
              <>
                Six domaines d’<Highlight>accompagnement</Highlight>
              </>
            }
            description="Du dirigeant au collaborateur, j’interviens sur l’ensemble du cycle de vie humain de votre organisation."
          />
        </div>
        <ExpertiseBubbles />
      </Section>

      {/* Méthode */}
      <Section id="methode" spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Ma méthode"
          title={
            <>
              Les <Highlight>solutions RH</Highlight> Vakom
            </>
          }
          description="Basés sur les dernières découvertes, les experts métiers et 30 années d’expérience, les outils RH et méthodes Vakom vous aident à mieux comprendre les situations et les relations en entreprise afin de prendre les meilleures décisions et agir."
          className="mb-12"
        />
        <MethodSolutions />
      </Section>

      <div className="pb-14 sm:pb-20">
        <CtaBand />
      </div>
    </>
  );
}
