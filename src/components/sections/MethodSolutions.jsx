import { Reveal } from '@/components/ui/Reveal';
import { IconArrowUpRight } from '@/components/ui/icons';

// Logos : public/solutions/ (visuels officiels vakom.fr).
const BASE = import.meta.env.BASE_URL;

const SOLUTIONS = [
  {
    logo: 'evt.jpg',
    alt: 'Envol des talents',
    text: 'Identification des capacités, des aptitudes et de leur utilisation. Compréhension des attitudes à avoir pour en faire un ou des talents.',
    href: 'https://content.vakom.fr/landing-envol-des-talents',
  },
  {
    logo: 'mde.jpg',
    alt: 'Méthode de l’engagement',
    text: 'Visualisation du niveau d’implication de chaque membre d’une équipe autour d’un projet et développement de son engagement.',
    href: 'http://content.vakom.fr/landing-carte-de-l-implication',
  },
  {
    logo: 'opr.jpg',
    alt: 'Optimisation du potentiel relationnel',
    text: 'Démarche de management, de vente, de gestion des ressources humaines et de relation interpersonnelle par les comportements.',
    href: 'http://content.vakom.fr/landing-methode-opr',
  },
  {
    logo: 'bpm.jpg',
    alt: 'Baromètre des postures managériales',
    text: 'Analyse de vos compétences managériales par un feedback de vos collaborateurs et de votre hiérarchie.',
    href: 'https://content.vakom.fr/landing-bpm',
  },
  {
    logo: 'bprh.jpg',
    alt: 'Baromètre performance RH',
    text: 'État des lieux de l’entreprise et de ses pratiques RH en lien avec ses orientations stratégiques.',
    href: 'http://content.vakom.fr/landing-bprh',
  },
  {
    logo: 'hope.jpg',
    alt: 'HOPE',
    text: 'Évaluation du potentiel humain et organisationnel de votre entreprise, ses chances et ses risques pour en tirer un plan d’action vers le succès.',
    href: 'https://vakom.fr/hope/',
  },
  {
    logo: 'me.jpg',
    alt: 'Diagnostic marque employeur',
    text: 'Estimation de votre attractivité par secteurs et des chantiers d’amélioration prioritaires.',
    href: 'https://content.vakom.fr/lb-marque-employeur',
  },
  {
    logo: 'pm3.jpg',
    alt: 'Profession Manager 3.0',
    text: 'Formation à distance individualisée en management avec accompagnement personnalisé d’un tuteur expert.',
    href: 'https://vakom.fr/formation/profession-manager-3-0/',
  },
  {
    logo: 'collab.jpg',
    alt: 'Collabor’acteur',
    text: 'Formation à distance personnalisée autour du rôle de collaborateur/acteur. Suivi individuel et en groupe par un tuteur.',
    href: 'https://vakom.fr/formation/collaborateurs-4-0/',
  },
];

/** Solutions RH Vakom : cartes renvoyant vers les pages dédiées. */
export function MethodSolutions() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((s, i) => {
        const Tag = s.href ? 'a' : 'div';
        const link = s.href ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' } : {};
        return (
          <Reveal as="div" key={s.logo} delay={(i % 3) * 0.07} className="h-full">
            <Tag
              {...link}
              className="group relative flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex flex-1 items-center py-4">
                <div className="w-full">
                  <img
                    src={`${BASE}solutions/${s.logo}`}
                    alt={s.alt}
                    loading="lazy"
                    className="mx-auto h-24 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-sm leading-relaxed text-ink-500">{s.text}</p>
              {s.href && (
                <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <IconArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </Tag>
          </Reveal>
        );
      })}
    </div>
  );
}
