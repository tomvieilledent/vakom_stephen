export type ClassValue = string | number | false | null | undefined;

/**
 * Concatène des classes conditionnelles.
 * Minimaliste et sans dépendance : suffisant pour nos besoins de composition.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
