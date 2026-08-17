import { describe, expect, it } from 'vitest';
import { ARTICLES, getArticle } from './articles';

describe('articles', () => {
  it('expose au moins un article', () => {
    expect(ARTICLES.length).toBeGreaterThan(0);
  });

  it('a des slugs uniques', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('retrouve un article par slug', () => {
    const first = ARTICLES[0];
    expect(getArticle(first.slug)?.title).toBe(first.title);
  });

  it('renvoie undefined pour un slug inconnu', () => {
    expect(getArticle('slug-inexistant')).toBeUndefined();
  });

  it('a un contenu non vide pour chaque article', () => {
    for (const article of ARTICLES) {
      expect(article.content.length).toBeGreaterThan(0);
      expect(article.lead.length).toBeGreaterThan(0);
    }
  });
});
