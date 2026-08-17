/** Formate une date ISO (YYYY-MM-DD) en français long. */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
