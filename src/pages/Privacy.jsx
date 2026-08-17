import { useSeo } from '@/lib/useSeo';
import { PAGE_SEO } from '@/config/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Prose } from '@/components/ui/Prose';
import { SITE } from '@/config/site';

export default function Privacy() {
  useSeo(PAGE_SEO.privacy);

  return (
    <>
      <PageHero eyebrow="Vos données" title="Politique de confidentialité" />
      <Prose>
        <p className="text-sm text-ink-400">Dernière mise à jour : {SITE.legal.updatedAt}.</p>

        <p>
          La protection de vos données personnelles est une priorité. Cette politique explique
          quelles données sont collectées, pourquoi et comment elles sont traitées, conformément au
          Règlement général sur la protection des données (RGPD).
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          {SITE.consultant.fullName}, {SITE.consultant.network}. Pour toute question relative à vos
          données : <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
        </p>

        <h2>Données collectées</h2>
        <p>
          Via le formulaire de contact, je collecte uniquement les données que vous choisissez de me
          transmettre : nom, adresse e-mail, et le cas échéant organisation, téléphone et contenu de
          votre message.
        </p>

        <h2>Finalité et base légale</h2>
        <p>
          Ces données sont utilisées dans le seul but de répondre à votre demande et d’assurer le
          suivi de notre éventuelle collaboration. La base légale est votre consentement, recueilli
          explicitement lors de l’envoi du formulaire.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Vos données sont conservées le temps nécessaire au traitement de votre demande, puis
          archivées ou supprimées au plus tard trois ans après notre dernier contact, sauf
          obligation légale contraire.
        </p>

        <h2>Destinataires</h2>
        <p>
          Vos données ne sont ni cédées, ni vendues, ni transmises à des tiers à des fins
          commerciales. Elles peuvent être traitées par des prestataires techniques (hébergement,
          messagerie) agissant pour mon compte et présentant des garanties conformes au RGPD.
        </p>

        <h2>Vos droits</h2>
        <p>Conformément à la réglementation, vous disposez des droits suivants :</p>
        <ul>
          <li>droit d’accès, de rectification et d’effacement de vos données ;</li>
          <li>droit à la limitation et à l’opposition au traitement ;</li>
          <li>droit à la portabilité de vos données ;</li>
          <li>droit de retirer votre consentement à tout moment.</li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez-moi à{' '}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>. Vous pouvez également
          introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr">www.cnil.fr</a>
          ).
        </p>

        <h2>Cookies & mesure d’audience</h2>
        <p>
          Ce site ne dépose aucun cookie publicitaire ni traceur tiers. Une mesure d’audience
          respectueuse de la vie privée peut être utilisée uniquement après votre consentement,
          recueilli via une bannière dédiée. Vous pouvez refuser sans conséquence sur votre
          navigation, et aucun script de suivi n’est chargé tant que vous n’avez pas accepté.
        </p>
        <p>
          Votre choix est conservé localement dans votre navigateur. Pour le modifier, effacez les
          données de site de votre navigateur : la bannière vous sera de nouveau proposée.
        </p>
      </Prose>
    </>
  );
}
