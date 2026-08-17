import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getConsent, isAnalyticsConfigured, loadAnalytics, setConsent } from './analytics';

describe('analytics (non configuré par défaut)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.getElementById('analytics-script')?.remove();
  });

  it('n’est pas configuré sans VITE_ANALYTICS_DOMAIN', () => {
    expect(isAnalyticsConfigured()).toBe(false);
  });

  it('ne renvoie aucun consentement au départ', () => {
    expect(getConsent()).toBeNull();
  });

  it('mémorise le refus et l’acceptation', () => {
    setConsent('denied');
    expect(getConsent()).toBe('denied');
    setConsent('granted');
    expect(getConsent()).toBe('granted');
  });

  it('n’injecte aucun script quand l’analytics n’est pas configuré', () => {
    loadAnalytics();
    expect(document.getElementById('analytics-script')).toBeNull();
  });
});

describe('analytics (configuré via env)', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
    localStorage.clear();
    document.getElementById('analytics-script')?.remove();
  });

  it('injecte le script après consentement', async () => {
    vi.stubEnv('VITE_ANALYTICS_DOMAIN', 'exemple.fr');
    vi.resetModules();
    const mod = await import('./analytics');

    expect(mod.isAnalyticsConfigured()).toBe(true);
    mod.setConsent('granted');

    const script = document.getElementById('analytics-script');
    expect(script).not.toBeNull();
    expect(script?.getAttribute('data-domain')).toBe('exemple.fr');
  });
});
