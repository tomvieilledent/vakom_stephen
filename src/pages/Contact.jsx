import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { IconLinkedin, IconMail, IconPhone } from '@/components/ui/icons';
import { SITE } from '@/config/site';

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
        description="Un projet, une question ? Écrivez-moi, je vous réponds sous 48 heures ouvrées."
      />

      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Coordonnées */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-ink-900">Me joindre</h2>

              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-4 shadow-soft transition-colors hover:border-brand-200"
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
                    className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-4 shadow-soft transition-colors hover:border-brand-200"
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
                    className="group flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0a66c2] hover:shadow-lift"
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
