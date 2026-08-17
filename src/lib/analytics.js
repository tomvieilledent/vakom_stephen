/**
 * Gestion du consentement et chargement conditionnel de l'analytics.
 *
 * Principe « privacy-first » :
 *  - aucun script tiers n'est chargé tant que l'utilisateur n'a pas consenti ;
 *  - l'analytics n'est proposé que s'il est configuré (VITE_ANALYTICS_DOMAIN) ;
 *  - le choix est mémorisé localement (localStorage), révocable.
 */

const STORAGE_KEY = 'vakom.cookie-consent';
const SCRIPT_ID = 'analytics-script';

const domain = import.meta.env.VITE_ANALYTICS_DOMAIN?.trim();
const scriptSrc = import.meta.env.VITE_ANALYTICS_SRC?.trim() || 'https://plausible.io/js/script.js';

/** L'analytics est-il configuré (donc un consentement a-t-il un sens) ? */
export function isAnalyticsConfigured() {
  return Boolean(domain);
}

function safeStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Événement déclenché pour rouvrir la bannière (depuis le pied de page). */
export const CONSENT_OPEN_EVENT = 'vakom:consent-open';

export function openConsentBanner() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function resetConsent() {
  safeStorage()?.removeItem(STORAGE_KEY);
}

export function getConsent() {
  const value = safeStorage()?.getItem(STORAGE_KEY);
  return value === 'granted' || value === 'denied' ? value : null;
}

export function setConsent(value) {
  safeStorage()?.setItem(STORAGE_KEY, value);
  if (value === 'granted') {
    loadAnalytics();
  }
}

/** Injecte le script d'analytics une seule fois. */
export function loadAnalytics() {
  if (!domain || typeof document === 'undefined') return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.defer = true;
  script.src = scriptSrc;
  script.setAttribute('data-domain', domain);
  document.head.appendChild(script);
}

/** À appeler au démarrage : recharge l'analytics si le consentement est déjà donné. */
export function initAnalytics() {
  if (isAnalyticsConfigured() && getConsent() === 'granted') {
    loadAnalytics();
  }
}
