import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ExpertiseGrid } from '@/components/sections/ExpertiseGrid';
import { MethodTimeline } from '@/components/sections/MethodTimeline';
import { CtaBand } from '@/components/sections/CtaBand';
import { Button } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/ui/icons';

const AUDIENCES = [
  {
    title: 'Dirigeants',
    text: 'Prendre du recul, clarifier votre vision et aligner votre équipe de direction autour d’un cap partagé.',
  },
  {
    title: 'Managers',
    text: 'Gagner en aisance et en cohérence dans votre posture, pour fédérer et faire grandir vos équipes.',
  },
  {
    title: 'Équipes RH',
    text: 'Fiabiliser vos recrutements, structurer vos parcours et professionnaliser vos pratiques.',
  },
  {
    title: 'Collaborateurs',
    text: 'Mieux se connaître, révéler ses talents et trouver la juste place où s’épanouir et contribuer.',
  },
];

export default function Expertise() {
  useSeo(PAGE_SEO.expertise);

  return (
    <>
      <PageHero
        eyebrow="Mes expertises"
        title={
          <>
            Des réponses concrètes à vos <span className="text-brand-600">enjeux humains</span>
          </>
        }
        description="Six domaines complémentaires pour accompagner l’ensemble du cycle de vie humain de votre organisation, du recrutement au développement des talents."
      >
        <Button to="/contact" variant="primary">
          Discuter de votre besoin
          <IconArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section spacing="lg">
        <ExpertiseGrid detailed />
      </Section>

      {/* Pour qui */}
      <Section className="bg-sand-100" spacing="lg">
        <SectionHeading
          eyebrow="Pour qui"
          title="Un accompagnement adapté à chaque interlocuteur"
          description="Quel que soit votre rôle, je m’adapte à votre réalité et à vos responsabilités."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="rounded-4xl border border-ink-100 bg-white p-7 shadow-soft"
            >
              <h3 className="font-display text-lg text-ink-900">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Méthode rappel */}
      <Section spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Comment j’interviens"
          title="Toujours la même exigence de méthode"
          className="mb-12"
        />
        <MethodTimeline />
      </Section>

      <div className="pb-24 sm:pb-32">
        <CtaBand
          title="Un enjeu en tête ? Parlons-en."
          description="Décrivez-moi votre situation : je vous dirai en toute transparence comment je peux vous aider, ou vers qui vous orienter."
        />
      </div>
    </>
  );
}
