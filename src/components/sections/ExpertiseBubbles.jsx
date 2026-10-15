import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
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
    color: 'bg-[#e8873c]',
    icon: IconUsers,
    href: 'https://vakom.fr/activites/formations-nos-activites/',
  },
  {
    title: 'Conseil',
    span: 'lg:col-span-2',
    radius: 'rounded-[2rem] rounded-tl-[5rem]',
    big: false,
    text: 'Pour impliquer les équipes et faire de vos projets des réalités',
    color: 'bg-[#aed154]',
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
    span: 'lg:col-span-2 lg:row-span-2',
    radius: 'rounded-[2rem] rounded-bl-[6rem]',
    big: true,
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
    color: 'bg-[#3b88c3]',
    icon: IconGrowth,
    href: 'https://vakom.fr/activites/coaching/',
  },
  {
    title: 'Conférence',
    span: 'lg:col-span-2',
    radius: 'rounded-[2rem] rounded-bl-[5rem]',
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
  const reduce = useReducedMotion();
  return (
    <div className="grid auto-rows-[minmax(13rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[12rem]">
      {BUBBLES.map((b, i) => (
        <Reveal as="div" key={b.title} delay={i * 0.07} className={`${b.span} h-full`}>
          <motion.a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            animate={reduce ? undefined : { y: [0, i % 2 ? -6 : 6, 0] }}
            transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.03 }}
            className={`group relative flex h-full flex-col overflow-hidden p-6 text-white shadow-soft transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 ${b.radius} ${b.color} ${b.big ? 'sm:p-8' : ''}`}
          >
            <b.icon
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <b.icon className="h-5 w-5" />
            </span>
            <h3
              className={`relative mt-auto font-display text-white font-semibold leading-tight ${b.big ? 'text-3xl' : 'text-xl'}`}
            >
              {b.title}
            </h3>
            <p
              className={`relative mt-2 max-w-[22ch] text-sm leading-relaxed text-white/90 ${b.big ? 'sm:max-w-[28ch] sm:text-base' : ''}`}
            >
              {b.text}
            </p>
            <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12">
              <IconArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        </Reveal>
      ))}
    </div>
  );
}
