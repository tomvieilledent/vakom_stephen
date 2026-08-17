import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Prose } from '@/components/ui/Prose';
import { SITE } from '@/config/site';

export default function LegalNotice() {
  useSeo(PAGE_SEO.legalNotice);

  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <Prose>
        <p className="text-sm text-ink-400">Dernière mise à jour : {SITE.legal.updatedAt}.</p>

        <h2>Éditeur du site</h2>
        <p>
          Ce site est édité par {SITE.consultant.fullName}, {SITE.consultant.network}.
          <br />
          SIREN : {SITE.legal.siren}.
          <br />
          Contact : <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
        </p>
        <p className="text-sm text-ink-400">
          (Informations à compléter par le consultant : adresse, forme juridique, numéro de TVA le
          cas échéant.)
        </p>

        <h2>Directeur de la publication</h2>
        <p>{SITE.legal.publicationDirector}.</p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par {SITE.legal.hostName}, {SITE.legal.hostAddress}.
        </p>

        <h2>Marque Vakom</h2>
        <p>
          « Vakom » est une marque déposée. Elle est citée sur ce site pour indiquer l’appartenance
          du consultant au réseau Vakom, avec l’aimable autorisation de ce dernier. Ce site est un
          site personnel indépendant et n’est pas le site officiel du réseau Vakom.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus (textes, éléments graphiques, structure) présents sur ce site est
          la propriété de leur auteur, sauf mention contraire. Toute reproduction ou représentation,
          totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site sont fournies à titre indicatif. L’éditeur
          s’efforce d’en assurer l’exactitude mais ne saurait être tenu responsable des erreurs,
          omissions ou d’une indisponibilité temporaire du site.
        </p>

        <h2>Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. L’éditeur n’exerce aucun contrôle
          sur ces sites et décline toute responsabilité quant à leur contenu.
        </p>
      </Prose>
    </>
  );
}
