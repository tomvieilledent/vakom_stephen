import { Highlight } from '@/components/ui/Highlight';
import { VAKOM_RODEZ_PARAGRAPHS } from '@/config/content';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const BASE = import.meta.env.BASE_URL;

/** Présentation de l'entreprise : Vakom Rodez. */
export function AboutVakomRodez() {
  return (
    <Section id="vakom-rodez" className="bg-sand-100" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Vakom Rodez"
            title={
              <>
                Le sens de <Highlight>l’humain</Highlight>, au plus près de vous
              </>
            }
          />
          <div className="prose-clean mt-6 max-w-xl text-ink-600">
            {VAKOM_RODEZ_PARAGRAPHS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <Reveal>
          <img
            src={`${BASE}hero.jpg`}
            alt="Trois randonneurs face au lever du soleil au-dessus des nuages"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-5xl object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </Section>
  );
}
