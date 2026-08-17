import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { IconArrowRight, IconShield, IconSparkles } from '@/components/ui/icons';
import { SITE } from '@/config/site';

/**
 * Héros de la page d'accueil. Le visuel est une composition graphique
 * (monogramme + cartes flottantes) pensée pour accueillir une vraie
 * photo du consultant — voir TODO.txt pour le remplacement de l'image.
 */
export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:theme(backgroundImage.grid-ink)] [background-size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="container relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Colonne texte */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {SITE.consultant.network}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-display-lg text-ink-900"
          >
            Révéler le{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              potentiel humain
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-300"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c60-6 120-6 180-3s90 3 116-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            de votre organisation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600"
          >
            J’accompagne dirigeants, managers et équipes à conjuguer performance et épanouissement.
            Un regard extérieur, des outils reconnus et une conviction :{' '}
            <span className="font-medium text-ink-900">votre force, c’est l’humain.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button to="/contact" size="lg" variant="primary">
              Échanger sur votre projet
              <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/expertises" size="lg" variant="ghost">
              Découvrir mes expertises
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500"
          >
            <li className="inline-flex items-center gap-2">
              <IconShield className="h-4 w-4 text-brand-500" />
              Méthode & outils Vakom
            </li>
            <li className="inline-flex items-center gap-2">
              <IconSparkles className="h-4 w-4 text-brand-500" />
              Accompagnement sur mesure
            </li>
          </motion.ul>
        </div>

        {/* Colonne visuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-5xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950 shadow-lift">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 [background-image:theme(backgroundImage.grid-ink)] [background-size:36px_36px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-brand-500/40 blur-3xl"
            />
            {/* Monogramme — remplacer par la photo du consultant */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[9rem] leading-none text-white/90">
                {SITE.consultant.firstName.charAt(0)}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/10 p-4 backdrop-blur-md">
              <p className="font-display text-xl text-white">{SITE.consultant.firstName}</p>
              <p className="text-sm text-ink-200">{SITE.consultant.role}</p>
            </div>
          </div>

          {/* Cartes flottantes */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-lift sm:block"
          >
            <p className="text-2xl font-display text-ink-900">94%</p>
            <p className="text-xs text-ink-500">de recommandation</p>
          </motion.div>
          <motion.div
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 bottom-16 hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-lift sm:block"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Le sens de l’Humain
            </p>
            <p className="mt-1 text-sm text-ink-700">Performance & bien-être</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
