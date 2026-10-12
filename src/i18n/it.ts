import type { Messages } from './types';

export const it: Messages = {
  meta: {
    title: 'STEAM & FROST — Concept di bevande da asporto',
    description:
      'Concept grafico per un locale di bevande calde e fredde da asporto. Nome, contenuti e foto sono solo dimostrativi.'
  },
  banner: {
    strong: 'Concept grafico',
    long: 'Nome, logo, menù e foto sono solo dimostrativi e saranno sostituiti con i dati reali del locale prima del lancio.',
    short: 'Contenuti e foto solo dimostrativi.',
    aria: 'Avviso: concept grafico'
  },
  skip: 'Vai al menù',
  nav: {
    aria: 'Navigazione principale',
    home: 'STEAM & FROST — torna su',
    menu: 'Menù',
    signature: 'Signature',
    story: "L'idea",
    cta: 'Menù',
    hot: 'Caldo',
    cold: 'Freddo',
    language: 'Lingua'
  },
  hero: {
    tag: 'Identità dimostrativa temporanea',
    line1: 'Caldo in mano,',
    line2: 'fresco per strada.',
    lede: 'Bevande calde e fredde preparate al momento, pronte da portare via. Scegli, ritira e continua la tua giornata.',
    ctaMenu: 'Sfoglia il menù',
    ctaSignature: 'Bevande signature',
    factsAria: "Che cos'è il locale",
    facts: ['Caldo', 'Freddo', 'Solo da asporto']
  },
  split: {
    aria: 'Confronta il latte caldo e quello freddo',
    valueText: (hot, iced) => `Caldo ${hot}%, freddo ${iced}%`,
    hot: 'Caldo',
    iced: 'Freddo',
    caption: 'Lo stesso latte, due stati d’animo. Trascina il divisore o usa le frecce della tastiera.',
    showHot: 'Caldo',
    showIced: 'Freddo'
  },
  temp: { hot: 'Caldo', iced: 'Freddo' },
  menu: {
    eyebrow: 'Menù',
    title: 'Scegli la tua temperatura.',
    lede: 'Passa da caldo a freddo: il menù si riordina da solo.',
    switchAria: 'Scegli la temperatura della bevanda',
    filters: { all: 'Tutto', hot: 'Caldo', iced: 'Freddo' },
    count: (filter, n) =>
      filter === 'hot'
        ? `${n} bevande calde`
        : filter === 'iced'
          ? `${n} bevande fredde`
          : `Tutte le ${n} bevande`,
    listAria: 'Elenco delle bevande',
    note: 'Menù illustrativo: nomi, descrizioni e foto sono provvisori; i prezzi li fornirà il locale.'
  },
  signature: {
    eyebrow: 'Signature',
    title: 'Dal vapore al cardamomo al gelo all’arancia.',
    lede: 'Quattro bicchieri raccontano tutta l’idea. Scorri e guarda la pagina raffreddarsi con te.',
    strength: 'Intensità',
    sweetness: 'Dolcezza',
    scale: (max) => `su ${max}`,
    profileNote: 'Profilo di gusto illustrativo',
    stories: {
      'cardamom-tea':
        'Il vapore che sale dal bicchiere è il primo benvenuto. Tè preparato con pazienza e cardamomo che si sente prima del primo sorso.',
      'cardamom-latte':
        'Un sapore di casa in un bicchiere da asporto: cardamomo macinato sull’espresso e latte montato fino a diventare seta.',
      'cold-brew': 'Un caffè che si prende il suo tempo: in infusione a freddo, esce morbido, scuro e poco amaro.',
      'orange-tonic':
        'Bollicine di tonica, scorza d’arancia e un espresso che galleggia sopra: un bicchiere che sa di fine di una giornata calda.'
    }
  },
  story: {
    eyebrow: "L'idea",
    srTitle: 'La nostra idea: cura nel bicchiere, semplicità per strada',
    quote: 'Niente sedie, niente tavoli. Un bancone e un’idea: la tua bevanda fatta bene, così vai avanti con la tua giornata.',
    steps: [
      { title: 'Scegli', text: 'Caldo quando ti serve calore, freddo quando ti serve una spinta. Un menù breve e chiaro, senza dubbi.' },
      {
        title: 'Lo prepariamo',
        text: 'Ogni bicchiere è preparato al momento: un estratto preciso, latte alla giusta temperatura, ghiaccio dove serve.'
      },
      {
        title: 'Prendi e vai',
        text: 'Un coperchio sicuro e un bicchiere che sta bene in mano. Non ci serve un tavolo, solo la tua prossima tappa.'
      }
    ]
  },
  takeaway: {
    title: 'Fatto per andare.',
    text: 'Niente attese per un tavolo, niente liste lunghe. Scegli la tua bevanda, ritirala al bancone e lascia che la strada racconti il resto.',
    cta: 'Scegli la tua bevanda'
  },
  visit: {
    eyebrow: 'Vieni a trovarci',
    title: 'Passa a prendere il tuo bicchiere.',
    placeholderEyebrow: 'Spazio riservato',
    placeholderTitle: 'I dati del locale appariranno qui appena disponibili',
    placeholderText:
      'Per non mostrare nulla che non sia reale, questa sezione apparirà solo dopo aver ricevuto i dati confermati del locale:',
    slots: [
      'Indirizzo e link alla mappa',
      'Orari di apertura',
      'Ordini: WhatsApp, numero di telefono o link per la consegna',
      'Prezzi e formati dei bicchieri'
    ],
    address: 'Indirizzo',
    hours: 'Orari',
    order: 'Ordina',
    orderNow: 'Ordina ora',
    whatsapp: 'WhatsApp',
    call: 'Chiama'
  },
  footer: {
    notice:
      'Questa pagina è un concept grafico per presentare un’idea al proprietario del locale. Nome, logo, menù, testi e foto sono provvisori; non ci sono ancora prezzi, offerte o contatti reali.',
    creditsSummary: 'Crediti foto e tecnologia',
    photosLead: 'Foto da Unsplash con Licenza Unsplash:',
    tech: 'Animazioni: GSAP (GSAP Standard License) e Lenis (MIT). Componenti SloshGauge e Noise da React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Latte al cardamomo', desc: 'Espresso e latte montato con un tocco caldo di cardamomo.' },
    'iced-latte': { name: 'Latte freddo', desc: 'Espresso su latte freddo e ghiaccio: il classico che non delude mai.' },
    'cardamom-tea': { name: 'Tè al cardamomo', desc: 'Tè nero preparato lentamente all’irachena, con cardamomo.' },
    'cold-brew': { name: 'Cold brew', desc: 'Caffè in infusione a freddo: morbido e poco amaro.' },
    espresso: { name: 'Espresso', desc: 'Un estratto concentrato con crema dorata, per chi ama il caffè com’è.' },
    'orange-tonic': {
      name: 'Espresso tonic all’arancia',
      desc: 'Tonica frizzante e scorza d’arancia, con un espresso che galleggia sul ghiaccio.'
    },
    cappuccino: { name: 'Cappuccino', desc: 'Schiuma di latte densa su un espresso equilibrato.' },
    'iced-matcha': { name: 'Matcha freddo', desc: 'Matcha montato su latte freddo: due strati, delicatamente erbaceo.' },
    mocha: { name: 'Mocaccino', desc: 'Cioccolato fondente, espresso e latte caldo.' },
    'iced-caramel': { name: 'Latte freddo al caramello', desc: 'Caramello burroso, espresso e latte freddo su ghiaccio.' },
    'matcha-latte': { name: 'Matcha latte', desc: 'Matcha montato con latte caldo e schiuma leggera.' },
    'citrus-tea': { name: 'Tè freddo agli agrumi', desc: 'Tè freddo con fette d’arancia e limone: fresco e leggero.' }
  }
};
