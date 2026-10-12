import type { Messages } from './types';

export const fr: Messages = {
  meta: {
    title: 'STEAM & FROST — Concept de boissons à emporter',
    description:
      'Concept de design pour une boutique de boissons chaudes et glacées à emporter. Nom, contenu et photos à titre de démonstration.'
  },
  banner: {
    strong: 'Concept de design',
    long: 'Le nom, le logo, la carte et les photos sont présentés à titre de démonstration et seront remplacés par les vraies informations de la boutique avant la mise en ligne.',
    short: 'Contenu et photos à titre de démo.',
    aria: 'Avis : concept de design'
  },
  skip: 'Aller à la carte',
  nav: {
    aria: 'Navigation principale',
    home: 'STEAM & FROST — retour en haut',
    menu: 'La carte',
    signature: 'Signatures',
    story: 'Notre idée',
    cta: 'La carte',
    hot: 'Chaud',
    cold: 'Froid',
    language: 'Langue'
  },
  hero: {
    tag: 'Identité provisoire de démonstration',
    line1: 'Chaud dans la main,',
    line2: 'frais en chemin.',
    lede: 'Des boissons chaudes et glacées préparées au moment de la commande, prêtes à emporter. Choisissez, récupérez, et continuez votre journée.',
    ctaMenu: 'Voir la carte',
    ctaSignature: 'Boissons signature',
    factsAria: 'Le concept de la boutique',
    facts: ['Chaud', 'Glacé', 'Uniquement à emporter']
  },
  split: {
    aria: 'Comparer le latte chaud et le latte glacé',
    valueText: (hot, iced) => `Chaud ${hot} %, glacé ${iced} %`,
    hot: 'Chaud',
    iced: 'Glacé',
    caption: 'Le même latte, deux humeurs. Faites glisser le séparateur ou utilisez les flèches.',
    showHot: 'Chaud',
    showIced: 'Glacé'
  },
  temp: { hot: 'Chaud', iced: 'Glacé' },
  menu: {
    eyebrow: 'La carte',
    title: 'Choisissez votre température.',
    lede: 'Passez du chaud au glacé : la carte se réorganise sous vos yeux.',
    switchAria: 'Choisir la température de la boisson',
    filters: { all: 'Tout', hot: 'Chaud', iced: 'Glacé' },
    count: (filter, n) =>
      filter === 'hot'
        ? `${n} boissons chaudes affichées`
        : filter === 'iced'
          ? `${n} boissons glacées affichées`
          : `Les ${n} boissons sont affichées`,
    listAria: 'Liste des boissons',
    note: 'Carte illustrative : noms, descriptions et photos provisoires ; les prix seront fournis par la boutique.'
  },
  signature: {
    eyebrow: 'Signatures',
    title: 'De la vapeur de cardamome à la fraîcheur de l’orange.',
    lede: 'Quatre tasses racontent toute l’idée. Faites défiler et regardez la page se rafraîchir avec vous.',
    strength: 'Intensité',
    sweetness: 'Douceur',
    scale: (max) => `sur ${max}`,
    profileNote: 'Profil gustatif illustratif',
    stories: {
      'cardamom-tea':
        'La vapeur qui s’élève du verre est le premier accueil. Un thé infusé avec patience, une cardamome qui embaume avant la première gorgée.',
      'cardamom-latte':
        'Le goût de la maison dans un gobelet : cardamome moulue sur l’espresso, et un lait moussé jusqu’à devenir soyeux.',
      'cold-brew': 'Un café qui prend son temps : infusé à froid, il devient doux, sombre et peu amer.',
      'orange-tonic':
        'Les bulles du tonic, le zeste d’orange et l’espresso qui flotte au-dessus — une tasse au goût de fin de journée chaude.'
    }
  },
  story: {
    eyebrow: 'L’idée',
    srTitle: 'Notre idée : le savoir-faire dans la tasse, la légèreté en chemin',
    quote: 'Ni chaises ni tables. Un comptoir et une seule idée : une boisson parfaitement préparée, pour que vous poursuiviez votre journée.',
    steps: [
      {
        title: 'Choisissez',
        text: 'Chaud quand il vous faut de la chaleur, glacé quand il vous faut de la fraîcheur. Une carte courte et claire.'
      },
      {
        title: 'Nous préparons',
        text: 'Chaque tasse est préparée au moment de votre commande : un shot précis, un lait à la bonne température, la glace à sa place.'
      },
      {
        title: 'Emportez-le',
        text: 'Un couvercle bien fermé et un gobelet qui tient bien en main. Pas besoin de table, juste de votre prochaine étape.'
      }
    ]
  },
  takeaway: {
    title: 'Prêt à emporter.',
    text: 'Pas d’attente pour une table, pas de longue liste. Choisissez votre boisson, récupérez-la au comptoir et laissez la route continuer l’histoire.',
    cta: 'Choisir ma boisson'
  },
  visit: {
    eyebrow: 'Nous trouver',
    title: 'Passez prendre votre tasse.',
    placeholderEyebrow: 'Espace réservé',
    placeholderTitle: 'Les informations de la boutique apparaîtront ici',
    placeholderText:
      'Pour ne rien afficher de fictif, cette section n’apparaît qu’une fois reçues les informations confirmées de la boutique :',
    slots: ['Adresse et lien vers le plan', 'Horaires d’ouverture', 'Commande : WhatsApp, téléphone ou lien de livraison', 'Prix et tailles de gobelets'],
    address: 'Adresse',
    hours: 'Horaires',
    order: 'Commander',
    orderNow: 'Commander',
    whatsapp: 'WhatsApp',
    call: 'Appeler'
  },
  footer: {
    notice:
      'Cette page est un concept de design destiné à présenter une idée au propriétaire de la boutique. Le nom, le logo, la carte, les textes et les photos sont provisoires ; il n’y a encore ni prix, ni offres, ni coordonnées réelles.',
    creditsSummary: 'Crédits photos et technologies',
    photosLead: 'Photos issues d’Unsplash, sous licence Unsplash :',
    tech: 'Animation : GSAP (licence GSAP Standard) et Lenis (MIT). Composants SloshGauge et Noise de React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Latte à la cardamome', desc: 'Espresso et lait moussé, avec une touche chaleureuse de cardamome.' },
    'iced-latte': { name: 'Latte glacé', desc: 'Espresso sur lait froid et glaçons : le classique qui ne déçoit jamais.' },
    'cardamom-tea': { name: 'Thé à la cardamome', desc: 'Thé noir infusé lentement à l’irakienne, avec de la cardamome.' },
    'cold-brew': { name: 'Cold brew', desc: 'Café infusé à froid, doux et peu amer.' },
    espresso: { name: 'Espresso', desc: 'Un shot concentré à la crema dorée, pour qui aime le café tel qu’il est.' },
    'orange-tonic': {
      name: 'Espresso tonic à l’orange',
      desc: 'Tonic pétillant, zeste d’orange et un shot d’espresso qui flotte sur la glace.'
    },
    cappuccino: { name: 'Cappuccino', desc: 'Une mousse de lait dense sur un espresso équilibré.' },
    'iced-matcha': { name: 'Matcha glacé', desc: 'Matcha fouetté sur lait froid, en deux couches, aux notes végétales douces.' },
    mocha: { name: 'Moka', desc: 'Chocolat noir, espresso et lait chaud.' },
    'iced-caramel': { name: 'Latte caramel glacé', desc: 'Caramel onctueux, espresso et lait froid sur glace.' },
    'matcha-latte': { name: 'Matcha latte', desc: 'Matcha fouetté avec du lait chaud et une mousse légère.' },
    'citrus-tea': { name: 'Thé glacé aux agrumes', desc: 'Thé froid aux tranches d’orange et de citron, frais et léger.' }
  }
};
