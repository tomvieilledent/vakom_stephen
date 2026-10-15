import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { IconClock, IconLinkedin, IconMail, IconMapPin, IconPhone } from '@/components/ui/icons';
import { SITE } from '@/config/site';

const STEPS = [
  'Vous m’écrivez en quelques lignes',
  'Nous convenons d’un premier échange gratuit',
  'Je vous propose une démarche claire et chiffrée',
];

export default function Contact() {
  useSeo(PAGE_SEO.contact);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de vos <span className="text-brand-600">enjeux humains</span>
          </>
        }
        description="Un projet, une question, une simple envie d’échanger ? Écrivez-moi : je vous réponds personnellement sous 48 heures ouvrées."
      />

      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Coordonnées */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-ink-900">Me joindre directement</h2>
              <p className="mt-3 text-ink-500">
                Je privilégie un contact humain et personnalisé. Choisissez le canal qui vous
                convient.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition-colors hover:border-brand-200"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">
                        E-mail
                      </span>
                      <span className="font-medium text-ink-900">{SITE.contact.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.contact.phoneHref}
                    className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition-colors hover:border-brand-200"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">
                        Téléphone
                      </span>
                      <span className="font-medium text-ink-900">{SITE.contact.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0a66c2] hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a66c2] text-white">
                      <IconLinkedin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">
                        LinkedIn
                      </span>
                      <span className="font-medium text-ink-900">Suivre mon actualité</span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 rounded-3xl bg-sand-100 p-5 text-sm text-ink-600">
                <span className="inline-flex items-center gap-2">
                  <IconMapPin className="h-4 w-4 text-brand-500" />
                  {SITE.consultant.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconClock className="h-4 w-4 text-brand-500" />
                  Réponse sous 48&nbsp;h ouvrées
                </span>
              </div>

              <div className="mt-8 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg text-ink-900">Comment ça se passe ?</h3>
                <ol className="mt-4 space-y-3">
                  {STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-ink-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900 text-xs font-semibold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
