import {
  IconArrowUpRight,
  IconCompass,
  IconGrowth,
  IconSearch,
  IconSparkles,
  IconTarget,
  IconUsers,
} from '@/components/ui/icons';

const BUBBLES = [
  {
    title: 'Formation',
    span: 'lg:col-span-2 lg:row-span-2',
    radius: 'rounded-[2rem] rounded-br-[6rem]',
    big: true,
    text: 'Pour faire grandir vos équipes aux rythmes de vos projets et de vos valeurs',
    textMax: 'max-w-none',
    color: 'bg-[#e8873c]',
    icon: IconUsers,
    href: 'https://vakom.fr/activites/formations-nos-activites/',
  },
  {
    title: 'Conseil',
    span: 'order-first lg:order-none lg:col-span-2 lg:row-span-2',
    radius: 'rounded-[2rem] rounded-tl-[6rem]',
    big: true,
    text: 'Pour impliquer les équipes et faire de vos projets des réalités',
    color: 'bg-[#a3c93f]',
    icon: IconSearch,
    href: 'https://vakom.fr/activites/conseil/',
  },
  {
    title: 'Orientation professionnelle',
    span: 'lg:col-span-2 lg:row-span-2',
    radius: 'rounded-[2rem] rounded-tr-[6rem]',
    big: true,
    text: 'Pour sécuriser mes parcours professionnels',
    color: 'bg-[#5bbaaf]',
    icon: IconCompass,
    href: 'https://vakom.fr/activites/orientation-professionnelle/',
  },
  {
    title: 'Recrutement & évaluation',
    span: 'lg:col-span-2',
    radius: 'rounded-[2rem] rounded-bl-[5rem]',
    pad: 'pb-7 pl-9 sm:pl-10',
    big: false,
    text: 'Pour attirer, identifier et faire grandir les talents !',
    color: 'bg-[#d9308a]',
    icon: IconTarget,
    href: 'https://vakom.fr/activites/recrutement-evaluation/',
  },
  {
    title: 'Coaching',
    span: 'lg:col-span-2',
    radius: 'rounded-[2rem] rounded-tr-[5rem]',
    big: false,
    text: 'Pour révéler le potentiel des hommes et des femmes dans l’action.',
    textMax: 'max-w-[36ch]',
    color: 'bg-[#3b88c3]',
    icon: IconGrowth,
    href: 'https://vakom.fr/activites/coaching/',
  },
  {
    title: 'Conférence & séminaire',
    span: 'lg:col-span-2',
    radius: 'rounded-[2rem] rounded-bl-[5rem]',
    pad: 'pb-7 pl-9 sm:pl-10',
    big: false,
    text: 'Pour vivre et faire vivre des moments privilégiés.',
    color: 'bg-[#771f8b]',
    icon: IconSparkles,
    href: 'https://vakom.fr/activites/conference/',
  },
];

/**
 * Bulles colorées des domaines d'expertise, en grille « bento » asymétrique.
 * Chaque bulle renvoie vers la page correspondante de vakom.fr.
 */
export function ExpertiseBubbles() {
  return (
    <div className="grid auto-rows-[minmax(19rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[12rem]">
      {BUBBLES.map((b) => (
        <div key={b.title} className={`${b.span} h-full`}>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex h-full flex-col overflow-hidden p-6 text-white shadow-soft transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 ${b.radius} ${b.color} ${b.big ? 'sm:p-8' : ''} ${b.pad ?? ''}`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/15"
            >
              <b.icon className="h-full w-full" />
            </span>
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <b.icon className="h-5 w-5" />
            </span>
            <h3
              className={`relative mt-auto font-display text-white font-semibold leading-tight ${b.big ? 'text-3xl' : 'text-xl'}`}
            >
              {b.title}
            </h3>
            <p
              className={`relative mt-2 ${b.textMax ?? 'max-w-[22ch]'} text-sm leading-relaxed text-white/90 ${b.big ? `${b.textMax ? '' : 'sm:max-w-[28ch] '}sm:text-base` : ''}`}
            >
              {b.text}
            </p>
            <span
              aria-hidden
              className="absolute right-5 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900"
            >
              <IconArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
