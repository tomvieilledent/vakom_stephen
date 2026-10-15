/** Identifiant d'ancre d'un consultant (ex. « Stéphane » → « stephane »). */
export function consultantId(consultant) {
  return consultant.firstName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
}
