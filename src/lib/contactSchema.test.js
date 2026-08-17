import { describe, expect, it } from 'vitest';
import { contactSchema } from './contactSchema';

const valid = {
  fullName: 'Marie Dupont',
  email: 'marie@example.com',
  subject: 'management',
  message: 'Bonjour, je souhaite un accompagnement pour mes managers.',
  consent: true,
};

describe('contactSchema', () => {
  it('accepte une soumission valide', () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it('accepte les champs facultatifs vides', () => {
    const res = contactSchema.safeParse({ ...valid, company: '', phone: '' });
    expect(res.success).toBe(true);
  });

  it('refuse un e-mail invalide', () => {
    const res = contactSchema.safeParse({ ...valid, email: 'pas-un-email' });
    expect(res.success).toBe(false);
  });

  it('exige le consentement', () => {
    const res = contactSchema.safeParse({ ...valid, consent: false });
    expect(res.success).toBe(false);
  });

  it('refuse un message trop court', () => {
    const res = contactSchema.safeParse({ ...valid, message: 'court' });
    expect(res.success).toBe(false);
  });

  it('refuse un sujet inconnu', () => {
    const res = contactSchema.safeParse({ ...valid, subject: 'inconnu' });
    expect(res.success).toBe(false);
  });

  it('rejette un honeypot rempli', () => {
    const res = contactSchema.safeParse({ ...valid, website: 'http://spam' });
    expect(res.success).toBe(false);
  });

  it('refuse un numéro de téléphone non numérique', () => {
    const res = contactSchema.safeParse({ ...valid, phone: 'abcXYZ' });
    expect(res.success).toBe(false);
  });
});
