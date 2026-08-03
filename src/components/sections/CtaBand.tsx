import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/ui/icons';
import { SITE } from '@/config/site';

interface CtaBandProps {
  title?: string;
  description?: string;
}

export function CtaBand({
  title = 'Et si nous prenions le temps d’en parler ?',
  description = 'Un premier échange, sans engagement, pour clarifier votre besoin et voir comment je peux vous être utile.',
}: CtaBandProps) {
  return (
    <div className="container">
      <Reveal className="relative overflow-hidden rounded-5xl bg-ink-900 px-7 py-14 sm:px-14 sm:py-20">
        {/* Halo décoratif */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-700/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm text-white">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-200">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" size="lg" variant="primary">
              Prendre contact
              <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href={`mailto:${SITE.contact.email}`}
              size="lg"
              variant="ghost"
              className="text-white ring-ink-700 hover:bg-white hover:text-ink-900"
            >
              {SITE.contact.email}
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
