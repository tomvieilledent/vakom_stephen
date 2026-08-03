import type { Expertise, FaqItem, MethodStep, Stat, Testimonial, Value } from '@/types';
import {
  IconCompass,
  IconGrowth,
  IconHandshake,
  IconPuzzle,
  IconSearch,
  IconUsers,
} from '@/components/ui/icons';

/** Contenu éditorial original, inspiré de la philosophie Vakom (jamais copié). */

export const STATS: readonly Stat[] = [
  { value: '15 ans', label: 'au service des organisations' },
  { value: '+120', label: 'dirigeants & managers accompagnés' },
  { value: '30+', label: 'entreprises partenaires' },
  { value: '94 %', label: 'de recommandation' },
];

export const EXPERTISES: readonly Expertise[] = [
  {
    slug: 'management',
    icon: IconCompass,
    title: 'Management & leadership',
    summary:
      'Aider les managers à trouver leur juste posture : celle qui conjugue exigence, écoute et cohérence pour donner envie à chacun de s’engager.',
    outcomes: [
      'Prise de poste et montée en responsabilité',
      'Postures managériales et gestion des tensions',
      'Animation d’équipe et rituels de pilotage',
    ],
  },
  {
    slug: 'recrutement-evaluation',
    icon: IconSearch,
    title: 'Recrutement & évaluation',
    summary:
      'Sécuriser vos décisions humaines grâce à une lecture objective des comportements, des motivations et du potentiel relationnel de chaque candidat.',
    outcomes: [
      'Définition du profil et du contexte de poste',
      'Évaluation des aptitudes et des motivations',
      'Aide à la décision et intégration réussie',
    ],
  },
  {
    slug: 'cohesion-equipe',
    icon: IconUsers,
    title: 'Cohésion d’équipe',
    summary:
      'Transformer un groupe en collectif : révéler les complémentarités, apaiser les malentendus et construire une confiance qui dure.',
    outcomes: [
      'Séminaires et ateliers de cohésion',
      'Compréhension des différences de fonctionnement',
      'Cadre relationnel et règles du jeu partagées',
    ],
  },
  {
    slug: 'developpement-talents',
    icon: IconGrowth,
    title: 'Développement des talents',
    summary:
      'Accompagner chaque collaborateur à identifier ses forces et à les mettre en mouvement, au bon endroit, au bon moment.',
    outcomes: [
      'Bilans de potentiel et plans de développement',
      'Coaching individuel orienté résultats',
      'Mobilité interne et gestion des parcours',
    ],
  },
  {
    slug: 'transformation',
    icon: IconPuzzle,
    title: 'Conduite du changement',
    summary:
      'Donner du sens aux transformations pour qu’elles soient vécues, comprises et portées par les équipes plutôt que subies.',
    outcomes: [
      'Diagnostic humain et organisationnel',
      'Alignement du comité de direction',
      'Embarquement des équipes et communication',
    ],
  },
  {
    slug: 'qvct',
    icon: IconHandshake,
    title: 'Qualité de vie & engagement',
    summary:
      'Réconcilier performance et bien-être : agir sur les leviers concrets qui nourrissent la motivation et l’implication durable.',
    outcomes: [
      'Mesure de l’engagement et de l’implication',
      'Prévention des risques relationnels',
      'Plans d’action co-construits et suivis',
    ],
  },
];

export const METHOD_STEPS: readonly MethodStep[] = [
  {
    step: '01',
    title: 'Écouter & comprendre',
    description:
      'Tout commence par le terrain. J’observe, je questionne et je prends le temps de saisir votre réalité, vos enjeux et ce qui se joue vraiment entre les personnes.',
  },
  {
    step: '02',
    title: 'Éclairer',
    description:
      'À l’aide d’outils d’évaluation reconnus, je pose un diagnostic lucide et partagé des comportements, des motivations et des dynamiques en présence.',
  },
  {
    step: '03',
    title: 'Co-construire',
    description:
      'Un constat ne suffit pas pour avancer. Nous définissons ensemble des actions concrètes, réalistes et adaptées à votre culture et à vos moyens.',
  },
  {
    step: '04',
    title: 'Ancrer',
    description:
      'J’accompagne la mise en mouvement dans la durée et mesure les progrès, pour que les changements deviennent des habitudes et non des intentions.',
  },
];

export const VALUES: readonly Value[] = [
  {
    letter: 'H',
    title: 'Humanité',
    description:
      'Placer la personne avant la fonction. Chaque accompagnement part d’un respect sincère de ce que chacun est.',
  },
  {
    letter: 'L',
    title: 'Lucidité',
    description:
      'Dire les choses avec justesse et bienveillance, même lorsqu’elles dérangent, pour permettre d’avancer.',
  },
  {
    letter: 'E',
    title: 'Engagement',
    description:
      'M’impliquer pleinement dans vos réussites, avec la même exigence que si votre organisation était la mienne.',
  },
  {
    letter: 'S',
    title: 'Simplicité',
    description:
      'Rendre accessible ce qui est complexe. Des mots clairs, des outils concrets, des résultats mesurables.',
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Stephen a cette capacité rare à mettre des mots justes sur des situations complexes. Notre comité de direction n’a jamais été aussi aligné.',
    author: 'Claire M.',
    role: 'Directrice générale',
    company: 'PME industrielle · 140 collaborateurs',
  },
  {
    quote:
      'Un accompagnement humain et exigeant à la fois. Mes managers ont gagné en confiance et en cohérence en quelques mois.',
    author: 'Julien R.',
    role: 'DRH',
    company: 'Groupe de services',
  },
  {
    quote:
      'Grâce à son regard, nous avons recruté la bonne personne, pour les bonnes raisons. Un an après, le pari est gagné.',
    author: 'Sophie D.',
    role: 'Dirigeante',
    company: 'Cabinet de conseil',
  },
  {
    quote:
      'Il ne plaque pas de méthode toute faite : il part de nous. C’est ce qui a rendu la démarche crédible auprès des équipes.',
    author: 'Marc L.',
    role: 'Responsable d’exploitation',
    company: 'Réseau de distribution',
  },
];

export const PARTNERS: readonly string[] = [
  'Industrie',
  'Santé',
  'Services',
  'Collectivités',
  'Distribution',
  'BTP',
  'Numérique',
  'Agroalimentaire',
];

export const FAQ: readonly FaqItem[] = [
  {
    question: 'Êtes-vous salarié de Vakom ?',
    answer:
      'J’interviens en tant que consultant indépendant au sein du réseau Vakom. Je m’appuie sur sa méthode et ses outils reconnus, tout en construisant avec vous un accompagnement sur mesure et de proximité.',
  },
  {
    question: 'Avec quelles organisations travaillez-vous ?',
    answer:
      'TPE, PME, ETI, groupes ou collectivités : ce qui compte, c’est la volonté sincère de faire grandir les personnes. J’adapte systématiquement ma démarche à votre taille, votre culture et vos moyens.',
  },
  {
    question: 'Comment se déroule un premier échange ?',
    answer:
      'Un premier rendez-vous, sans engagement, permet de clarifier votre besoin et de vérifier que nous sommes faits pour travailler ensemble. Je vous propose ensuite une démarche claire, chiffrée et un calendrier réaliste.',
  },
  {
    question: 'Quels outils d’évaluation utilisez-vous ?',
    answer:
      'Je m’appuie sur des outils d’évaluation des comportements et des motivations validés scientifiquement, toujours restitués lors d’un entretien. L’outil éclaire la décision, il ne la remplace jamais.',
  },
];
