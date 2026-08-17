import { useSeo } from '@/lib/useSeo';
import { Button } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/ui/icons';

export default function NotFound() {
  useSeo({
    title: 'Page introuvable',
    description: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    path: '/404',
  });

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:theme(backgroundImage.grid-ink)] [background-size:48px_48px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="container relative text-center">
        <p className="font-display text-[7rem] leading-none text-brand-500 sm:text-[10rem]">404</p>
        <h1 className="mt-2 text-display-sm text-ink-900">Cette page a pris un autre chemin</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-500">
          La page que vous cherchez n’existe pas ou a été déplacée. Revenons sur la bonne voie
          ensemble.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg">
            Retour à l’accueil
            <IconArrowRight className="h-5 w-5" />
          </Button>
          <Button to="/contact" size="lg" variant="ghost">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
