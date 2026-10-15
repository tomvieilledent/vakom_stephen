import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/ui/icons';

const BASE = import.meta.env.BASE_URL;

/**
 * Héros de la page d'accueil : photo plein cadre avec un grand arc de cercle
 * rose à gauche portant le logo Vakom et le message d'accroche.
 */
export function HomeHero() {
  return (
    <section
      className="relative isolate min-h-[34rem] overflow-hidden bg-ink-900 bg-cover bg-center lg:min-h-[40rem]"
      style={{ backgroundImage: `url(${BASE}rodez.jpg)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand-600/90 to-brand-500/80 lg:hidden"
      />
      <div
        aria-hidden
        className="absolute right-[42%] top-1/2 hidden aspect-square h-[220%] -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-600/90 to-brand-500/80 lg:block"
      />
      <div className="container relative flex min-h-[34rem] items-center py-16 lg:min-h-[40rem]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-white"
        >
          <img
            src={`${BASE}logo-vakom-blanc.png`}
            alt="Vakom, le sens de l’humain"
            className="h-24 w-auto sm:h-28"
          />
          <h1 className="mt-10 font-display text-white text-3xl font-bold uppercase [text-shadow:0_2px_12px_rgb(0_0_0/0.25)] leading-tight sm:text-4xl lg:text-5xl">
            Votre partenaire en ressources &amp; relations humaines
          </h1>
          <p className="mt-6 text-lg font-normal text-white">
            Conseil, Formation, Coaching, Conférence, Recrutement, Évaluation, Orientation
            professionnelle.
          </p>
          <div className="mt-8">
            <Button href="#contact" size="lg" variant="secondary">
              Échanger sur votre projet
              <IconArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
