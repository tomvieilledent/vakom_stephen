import { Highlight } from '@/components/ui/Highlight';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const POINTS = [
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
    title: 'Des résultats concrets et durables',
    text: 'Un constat ne suffit pas. Nous transformons le diagnostic en actions mesurables.',
  },
];

/** « Ma raison d'être » : mise en page éditoriale, énoncé fort + liste numérotée. */
export function RaisonDEtre() {
  return (
    <Section id="raison-etre" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-36 lg:self-start">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden />
            Ma raison d’être
          </span>
          <h2 className="mt-5 text-display-sm text-ink-900">
            La performance durable naît d’abord des <Highlight>relations humaines</Highlight>.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600">
            Derrière chaque enjeu d’organisation, il y a des femmes et des hommes. Mon métier
            consiste à créer les conditions pour qu’ils se comprennent, coopèrent et donnent le
            meilleur — sans opposer exigence et bienveillance.
          </p>
        </Reveal>

        <ol className="border-b border-ink-200">
          {POINTS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08}>
              <div className="group relative grid grid-cols-[3.25rem_1fr] items-baseline gap-x-4 sm:grid-cols-[4.5rem_1fr] border-t border-ink-200 py-7 transition-colors duration-300 hover:border-brand-500 sm:gap-x-8">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:1.5px_theme(colors.brand.400)] group-hover:text-brand-500 sm:text-6xl"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="font-display text-xl text-ink-900 sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-500">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
