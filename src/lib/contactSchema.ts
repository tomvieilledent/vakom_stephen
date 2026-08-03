import { z } from 'zod';

/** Schéma de validation du formulaire de contact (partagé UI ↔ résolveur). */
export const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Merci d’indiquer votre nom.').max(80, 'Nom trop long.'),
  email: z.string().trim().email('Adresse e-mail invalide.'),
  company: z.string().trim().max(120, 'Nom d’organisation trop long.').optional().or(z.literal('')),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+0-9 ().-]*$/, 'Numéro de téléphone invalide.')
    .optional()
    .or(z.literal('')),
  subject: z.enum(['management', 'recrutement', 'cohesion', 'talents', 'autre'], {
    errorMap: () => ({ message: 'Merci de choisir un sujet.' }),
  }),
  message: z
    .string()
    .trim()
    .min(20, 'Décrivez votre besoin en quelques mots (20 caractères minimum).')
    .max(2000, 'Message trop long (2000 caractères maximum).'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Votre consentement est nécessaire pour vous recontacter.' }),
  }),
  /** Champ piège anti-spam : doit rester vide. */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const SUBJECT_OPTIONS = [
  { value: 'management', label: 'Management & leadership' },
  { value: 'recrutement', label: 'Recrutement & évaluation' },
  { value: 'cohesion', label: 'Cohésion d’équipe' },
  { value: 'talents', label: 'Développement des talents' },
  { value: 'autre', label: 'Autre sujet' },
] as const;
