import { Link } from 'react-router-dom';
import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { formatDate } from '@/lib/format';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHero } from '@/components/sections/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ARTICLES } from '@/config/articles';
import { IconArrowUpRight, IconClock } from '@/components/ui/icons';

export default function Resources() {
  useSeo(PAGE_SEO.resources);

  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title={
          <>
            Réflexions & <span className="text-brand-600">repères</span>
          </>
        }
        description="Quelques idées et convictions partagées au fil de mes accompagnements, pour nourrir votre réflexion sur l’humain au travail."
      />

      <Section spacing="lg">
        {/* Article en avant */}
        <Reveal>
          <Link
            to={`/ressources/${featured.slug}`}
            className="group grid overflow-hidden rounded-5xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2"
          >
            <div className="relative min-h-[220px] bg-gradient-to-br from-ink-800 to-ink-950 p-8">
              <div
                aria-hidden
                className="absolute inset-0 opacity-25 [background-image:theme(backgroundImage.grid-ink)] [background-size:32px_32px]"
              />
              <span className="relative inline-flex rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs text-ink-400">
                <span>{formatDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <IconClock className="h-3.5 w-3.5" />
                  {featured.readingTime}
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-ink-900">{featured.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-500">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Lire l’article
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Autres articles */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((r, i) => (
            <Reveal as="article" key={r.slug} delay={(i % 2) * 0.08}>
              <Link
                to={`/ressources/${r.slug}`}
                className="group flex h-full flex-col rounded-4xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-3 text-xs text-ink-400">
                  <span className="font-semibold text-brand-600">{r.category}</span>
                  <span>·</span>
                  <span>{formatDate(r.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-ink-900">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{r.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Lire l’article
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          De nouveaux articles sont publiés régulièrement. Revenez bientôt.
        </p>
      </Section>

      <div className="pb-24 sm:pb-32">
        <CtaBand />
      </div>
    </>
  );
}
