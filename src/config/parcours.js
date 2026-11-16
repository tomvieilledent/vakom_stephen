/**
 * Parcours professionnel, par prénom de consultant (ordre chronologique).
 * Un bloc par entreprise ; `logo` : fichier dans `public/` (ex. `logos/nike.png`).
 * `current` : bloc mis en avant (poste actuel).
 */
export const PARCOURS = {
  Stephen: [
    {
      company: 'Nike Factory Store',
      logo: 'logos/nike.png',
      roles: [{ period: '2009 – 2011', title: 'BTS MUC (nouveau MCO)', place: 'Romans-sur-Isère' }],
    },
    {
      company: 'Casino',
      logo: 'logos/casino.png',
      roles: [
        { period: '2011 – 2012', title: 'Vendeur · alternant bachelor', place: 'Crest' },
        {
          period: '2013 – 2017',
          title: 'Responsable secteur',
          place: 'Chabeuil',
          detail: 'Équipe de 8 personnes · CA ≈ 5 M€',
        },
      ],
    },
    {
      company: 'Decathlon',
      logo: 'logos/decathlon.png',
      roles: [
        {
          period: '2017 – 2020',
          title: 'Responsable rayon et responsable d’exploitation',
          place: 'Valence',
          detail: 'Équipe de 8 personnes · CA ≈ 6 M€',
        },
        {
          period: '2020 – 2022',
          title: 'Directeur adjoint de magasin',
          place: 'Nîmes',
          detail: '90 personnes · CA ≈ 30 M€ (+1,3 M€ en 2 ans)',
        },
        {
          period: '2022 – 2026',
          title: 'Directeur de magasin',
          place: 'Rodez',
          detail: '40 personnes · CA ≈ 16 M€ (+2,7 M€ en 4 ans)',
        },
      ],
    },
    {
      company: 'Vakom Rodez',
      logo: 'logo-vakom-blanc.png',
      current: true,
      roles: [{ period: 'Aujourd’hui', title: 'Consultant Vakom', place: 'Rodez' }],
    },
  ],
};

/** « Mes valeurs » par prénom de consultant — TEXTE PROVISOIRE, à valider. */
export const MES_VALEURS = {
  Stephen: {
    intro:
      'Quinze ans passés à diriger des équipes m’ont appris que la performance durable repose sur la confiance. Voici ce qui guide chacun de mes accompagnements.',
    items: [
      {
        title: 'L’écoute avant tout',
        text: 'Je prends le temps de comprendre votre situation, vos contraintes et vos ambitions avant de proposer quoi que ce soit.',
      },
      {
        title: 'La franchise bienveillante',
        text: 'Je dis les choses simplement et avec respect, y compris quand elles dérangent, parce que c’est ainsi qu’on avance.',
      },
      {
        title: 'Le concret et l’engagement',
        text: 'Je m’implique à vos côtés jusqu’à la mise en action : des outils clairs, des décisions prises et des résultats que l’on peut mesurer.',
      },
    ],
  },
};
