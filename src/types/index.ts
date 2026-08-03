import type { ComponentType, SVGProps } from 'react';

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Expertise {
  readonly slug: string;
  readonly icon: IconType;
  readonly title: string;
  readonly summary: string;
  readonly outcomes: readonly string[];
}

export interface MethodStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface Value {
  readonly letter: string;
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
}

export interface Resource {
  readonly slug: string;
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly readingTime: string;
}

/** Bloc de contenu d'un article (rendu typé, sans HTML brut). */
export type ArticleBlock =
  | { readonly type: 'paragraph'; readonly text: string }
  | { readonly type: 'heading'; readonly text: string }
  | { readonly type: 'list'; readonly items: readonly string[] }
  | { readonly type: 'quote'; readonly text: string };

export interface Article extends Resource {
  /** Chapô affiché en tête d'article. */
  readonly lead: string;
  readonly content: readonly ArticleBlock[];
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}
