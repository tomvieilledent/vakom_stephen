import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { contactSchema, SUBJECT_OPTIONS } from '@/lib/contactSchema';
import { FieldWrap, Select, TextArea, TextInput } from './fields';
import { Button } from '@/components/ui/Button';
import { IconArrowRight, IconCheck } from '@/components/ui/icons';
import { SITE } from '@/config/site';

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/api/contact';

export function ContactForm() {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      reset();
    } catch {
      // Aucune API disponible (déploiement statique) : on bascule vers un
      // lien mailto pré-rempli pour ne jamais bloquer l'utilisateur.
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-4xl border border-ink-100 bg-white p-10 text-center shadow-soft"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink-900">Message envoyé, merci !</h3>
        <p className="mt-3 max-w-md text-ink-500">
          Je reviens vers vous sous 48&nbsp;heures ouvrées. À très vite pour échanger sur votre
          projet.
        </p>
        <Button className="mt-6" variant="ghost" onClick={() => setStatus('idle')} type="button">
          Envoyer un autre message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-4xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrap label="Nom complet" htmlFor="fullName" required error={errors.fullName?.message}>
          <TextInput
            id="fullName"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            placeholder="Votre nom"
            {...register('fullName')}
          />
        </FieldWrap>

        <FieldWrap label="E-mail" htmlFor="email" required error={errors.email?.message}>
          <TextInput
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            placeholder="vous@entreprise.fr"
            {...register('email')}
          />
        </FieldWrap>

        <FieldWrap label="Organisation" htmlFor="company" optional error={errors.company?.message}>
          <TextInput
            id="company"
            autoComplete="organization"
            placeholder="Votre entreprise"
            {...register('company')}
          />
        </FieldWrap>

        <FieldWrap label="Téléphone" htmlFor="phone" optional error={errors.phone?.message}>
          <TextInput
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 00 00 00 00"
            {...register('phone')}
          />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Votre sujet"
        htmlFor="subject"
        required
        error={errors.subject?.message}
        className="mt-5"
      >
        <Select
          id="subject"
          aria-invalid={!!errors.subject}
          defaultValue=""
          {...register('subject')}
        >
          <option value="" disabled>
            Choisissez un sujet…
          </option>
          {SUBJECT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </FieldWrap>

      <FieldWrap
        label="Votre message"
        htmlFor="message"
        required
        error={errors.message?.message}
        className="mt-5"
      >
        <TextArea
          id="message"
          aria-invalid={!!errors.message}
          placeholder="Décrivez votre contexte et votre besoin en quelques lignes…"
          {...register('message')}
        />
      </FieldWrap>

      {/* Honeypot anti-spam (masqué visuellement et aux lecteurs d'écran) */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
          aria-invalid={!!errors.consent}
          {...register('consent')}
        />
        <label htmlFor="consent" className="text-sm text-ink-500">
          J’accepte que mes données soient utilisées pour être recontacté(e). Elles ne seront ni
          cédées ni revendues.{' '}
          <a href="/confidentialite" className="text-brand-600 underline">
            En savoir plus
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1.5 text-sm text-brand-600" role="alert">
          {errors.consent.message}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer mon message'}
          {status !== 'submitting' && <IconArrowRight className="h-5 w-5" />}
        </Button>
        <p className="text-xs text-ink-400">Réponse sous 48&nbsp;h ouvrées.</p>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm text-brand-800"
            role="alert"
          >
            L’envoi automatique n’a pas abouti. Vous pouvez m’écrire directement à{' '}
            <a href={`mailto:${SITE.contact.email}`} className="font-semibold underline">
              {SITE.contact.email}
            </a>
            .
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
