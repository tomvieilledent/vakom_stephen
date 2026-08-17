/**
 * Concatène des classes conditionnelles.
 * Minimaliste et sans dépendance : suffisant pour nos besoins de composition.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
