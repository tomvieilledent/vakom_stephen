function u(n){const e={};let s=null;for(const t of n.split(`
`)){const i=t.match(/^##\s+(.+?)\s*$/);i&&!t.startsWith("###")?(s=i[1].trim(),e[s]=[]):s&&e[s].push(t)}return e}function c(n=[]){return n.join(`
`).split(/\n\s*\n/).map(e=>e.trim()).filter(e=>e&&!e.startsWith(">")&&!e.startsWith("#"))}function o(n,e){const s=new RegExp(`^-\\s*${e}\\s*:\\s*(.+)$`,"i");for(const t of n){const i=t.trim().match(s);if(i)return i[1].trim()}return""}function m(n=[]){const e=[];let s=null,t=[];const i=()=>{if(s===null)return;const a=o(t,"Citation");a&&e.push({quote:a,author:s,role:o(t,"Fonction"),company:o(t,"Entreprise")})};for(const a of n){const l=a.match(/^###\s+(.+?)\s*$/);l?(i(),s=l[1].trim(),t=[]):t.push(a)}return i(),e}function p(n=[]){return n.map(e=>e.trim().match(/^-\s*(.+?)\s*\|\s*(.+)$/)).filter(Boolean).map(e=>({value:e[1].trim(),label:e[2].trim()}))}function d(n){const e=u(n);return{stephen:c(e.Stephen),vakomRodez:c(e["Vakom Rodez"]),testimonials:m(e.Témoignages),stats:p(e.Chiffres)}}const g=`# Contenu du site — à modifier directement

Ce fichier alimente le site. Modifiez simplement les textes, enregistrez, et le site se met à jour
(en développement : immédiatement ; en ligne : au prochain déploiement).

Règles de format (à respecter pour que le site lise bien le fichier) :
- Les titres \`## ...\` ne doivent pas être renommés (ce sont les sections).
- Dans « Stephen » et « Vakom Rodez » : un paragraphe = un bloc de texte, séparé du suivant par une ligne vide.
- Dans « Témoignages » : un bloc \`### Prénom N.\` par personne. Gardez les 3 lignes qui suivent.
- Dans « Chiffres » : une ligne par chiffre, au format \`- valeur | description\`.
- Pour masquer un témoignage ou un chiffre, supprimez simplement son bloc ou sa ligne.

## Stephen

Mon parcours a commencé là où tout se joue : sur le terrain, à la tête d’équipes aux personnalités et aux attentes variées. J’y ai appris que les meilleures stratégies ne valent rien sans l’adhésion sincère des personnes qui les portent.

Cette conviction m’a naturellement conduit vers l’accompagnement humain. Aujourd’hui, en tant que consultant au sein du réseau Vakom, je mets une méthode reconnue et des outils d’évaluation éprouvés au service d’un accompagnement profondément personnalisé.

Ma promesse est simple : vous apporter un regard lucide et bienveillant, et vous aider à passer du constat à l’action, durablement.

## Vakom Rodez

Vakom est un réseau de cabinets de conseil en ressources et relations humaines, présent partout en France. Ses méthodes et ses outils d’évaluation, éprouvés depuis plus de 35 ans, aident dirigeants, managers et équipes à mieux se comprendre pour mieux travailler ensemble.

À Rodez, Vakom accompagne les entreprises et les personnes du territoire : conseil, formation, coaching, recrutement et évaluation, orientation professionnelle et conférences.

## Témoignages

> ⚠️ Les témoignages ci-dessous sont des EXEMPLES. Remplacez-les par de vrais retours clients (avec leur accord) avant la mise en ligne.

### Claire M.
- Fonction : Directrice générale
- Entreprise : PME industrielle · 140 collaborateurs
- Citation : Stephen a cette capacité rare à mettre des mots justes sur des situations complexes. Notre comité de direction n’a jamais été aussi aligné.

### Julien R.
- Fonction : DRH
- Entreprise : Groupe de services
- Citation : Un accompagnement humain et exigeant à la fois. Mes managers ont gagné en confiance et en cohérence en quelques mois.

### Sophie D.
- Fonction : Dirigeante
- Entreprise : Cabinet de conseil
- Citation : Grâce à son regard, nous avons recruté la bonne personne, pour les bonnes raisons. Un an après, le pari est gagné.

### Marc L.
- Fonction : Responsable d’exploitation
- Entreprise : Réseau de distribution
- Citation : Il ne plaque pas de méthode toute faite : il part de nous. C’est ce qui a rendu la démarche crédible auprès des équipes.

## Chiffres

> ⚠️ Chiffres d’EXEMPLE : remplacez-les par vos vrais chiffres, ou supprimez les lignes.

- 15 ans | au service des organisations
- +120 | dirigeants & managers accompagnés
- 30+ | entreprises partenaires
- 94 % | de recommandation
`,r=d(g),f=r.stephen,h=r.vakomRodez,v=r.testimonials,b=r.stats,E=[{letter:"H",title:"Humanité",description:"Placer la personne avant la fonction. Chaque accompagnement part d’un respect sincère de ce que chacun est."},{letter:"L",title:"Lucidité",description:"Dire les choses avec justesse et bienveillance, même lorsqu’elles dérangent, pour permettre d’avancer."},{letter:"E",title:"Engagement",description:"M’impliquer pleinement dans vos réussites, avec la même exigence que si votre organisation était la mienne."},{letter:"S",title:"Simplicité",description:"Rendre accessible ce qui est complexe. Des mots clairs, des outils concrets, des résultats mesurables."}];export{f as S,v as T,E as V,h as a,b};
