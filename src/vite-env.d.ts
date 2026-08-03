/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** Domaine suivi par l'outil d'analytics (ex. Plausible). Vide = désactivé. */
  readonly VITE_ANALYTICS_DOMAIN?: string;
  /** URL du script d'analytics (défaut : Plausible auto-hébergé ou cloud). */
  readonly VITE_ANALYTICS_SRC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
