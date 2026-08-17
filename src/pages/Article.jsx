import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSeo } from '@/lib/useSeo';
import { formatDate } from '@/lib/format';
import { ARTICLES, getArticle } from '@/config/articles';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { IconArrowRight, IconClock } from '@/components/ui/icons';
import { SITE } from '@/config/site';

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="mt-10 font-display text-2xl text-ink-900">{block.text}</h2>;
    case 'paragraph':
      return <p className="mt-4 leading-relaxed text-ink-600">{block.text}</p>;
    case 'list':
      return (
        <ul className="mt-4 space-y-2 pl-5 text-ink-600 [&>li]:list-disc">
          {block.items.map((item) => (
            <li key={item} className="pl-1 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="mt-8 border-l-4 border-brand-400 bg-sand-100 py-5 pl-6 pr-4 font-display text-xl italic text-ink-900">
          « {block.text} »
        </blockquote>
      );
    default:
      return null;
  }
}

export default function Article() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  useSeo({
    title: article ? article.title : 'Article introuvable',
    description: article ? article.excerpt : 'Cet article n’existe pas ou a été déplacé.',
    path: article ? `/ressources/${article.slug}` : '/ressources',
  });

  const jsonLd = useMemo(() => {
    if (!article) return null;
    const url = `${SITE.url}/ressources/${article.slug}`;
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        datePublished: article.date,
        articleSection: article.category,
        inLanguage: 'fr-FR',
        author: { '@type': 'Person', name: SITE.consultant.firstName },
        publisher: { '@type': 'Organization', name: 'Vakom' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ressources', item: `${SITE.url}/ressources` },
          { '@type': 'ListItem', position: 2, name: article.title, item: url },
        ],
      },
    ];
  }, [article]);

  if (!article) {
    return <Navigate to="/ressources" replace />;
  }

  const index = ARTICLES.findIndex((a) => a.slug === article.slug);
  const next = ARTICLES[(index + 1) % ARTICLES.length];

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      <article>
        {/* En-tête */}
        <header className="relative overflow-hidden border-b border-ink-100 bg-sand-100">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
          />
          <div className="container relative max-w-3xl py-16 sm:py-20">
            <Reveal>
              <nav className="mb-6 text-sm text-ink-400" aria-label="Fil d’Ariane">
                <Link to="/ressources" className="transition-colors hover:text-brand-600">
                  Ressources
                </Link>
                <span className="mx-2" aria-hidden>
                  /
                </span>
                <span className="text-ink-600">{article.category}</span>
              </nav>
              <h1 className="text-display-sm text-ink-900">{article.title}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-500">
                <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
                  {article.category}
                </span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span className="inline-flex items-center gap-1">
                  <IconClock className="h-4 w-4" />
                  {article.readingTime} de lecture
                </span>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{article.lead}</p>
            </Reveal>
          </div>
        </header>

        {/* Corps */}
        <div className="container max-w-3xl py-14 sm:py-16">
          <Reveal>
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </Reveal>

          {/* Signature */}
          <div className="mt-12 flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-lg text-white">
              S
            </span>
            <p className="text-sm text-ink-500">
              <span className="font-semibold text-ink-900">Stephen</span> — Consultant au sein du
              réseau Vakom. J’accompagne dirigeants et équipes à révéler leur potentiel humain.
            </p>
          </div>

          {/* Article suivant */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              À lire ensuite
            </p>
            <Link
              to={`/ressources/${next.slug}`}
              className="group mt-3 flex items-center justify-between gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span>
                <span className="text-sm font-semibold text-brand-600">{next.category}</span>
                <span className="mt-1 block font-display text-lg text-ink-900">{next.title}</span>
              </span>
              <IconArrowRight className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>

      <div className="pb-24 sm:pb-32">
        <CtaBand />
      </div>
    </>
  );
}
