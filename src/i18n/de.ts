import type { Messages } from './types';

export const de: Messages = {
  meta: {
    title: 'STEAM & FROST — Konzept für Getränke to go',
    description:
      'Designkonzept für einen Laden mit heißen und kalten Getränken zum Mitnehmen. Name, Inhalte und Fotos dienen nur zur Demonstration.'
  },
  banner: {
    strong: 'Designkonzept',
    long: 'Name, Logo, Karte und Fotos dienen nur zur Demonstration und werden vor dem Start durch die echten Angaben des Ladens ersetzt.',
    short: 'Inhalte und Fotos nur zur Demo.',
    aria: 'Hinweis: Designkonzept'
  },
  skip: 'Zur Karte springen',
  nav: {
    aria: 'Hauptnavigation',
    home: 'STEAM & FROST — nach oben',
    menu: 'Karte',
    signature: 'Signature',
    story: 'Die Idee',
    cta: 'Karte',
    hot: 'Heiß',
    cold: 'Kalt',
    language: 'Sprache'
  },
  hero: {
    tag: 'Vorläufige Demo-Identität',
    line1: 'Warm in der Hand,',
    line2: 'kühl unterwegs.',
    lede: 'Heiße und kalte Getränke, frisch zubereitet und bereit zum Mitnehmen. Auswählen, abholen, weiter durch den Tag.',
    ctaMenu: 'Zur Karte',
    ctaSignature: 'Signature-Drinks',
    factsAria: 'Was der Laden ist',
    facts: ['Heiß', 'Eiskalt', 'Nur zum Mitnehmen']
  },
  split: {
    aria: 'Heißen und eiskalten Latte vergleichen',
    valueText: (hot, iced) => `Heiß ${hot} %, eiskalt ${iced} %`,
    hot: 'Heiß',
    iced: 'Eiskalt',
    caption: 'Derselbe Latte, zwei Stimmungen. Ziehe den Trenner oder nutze die Pfeiltasten.',
    showHot: 'Heiß',
    showIced: 'Eiskalt'
  },
  temp: { hot: 'Heiß', iced: 'Eiskalt' },
  menu: {
    eyebrow: 'Karte',
    title: 'Wähl deine Temperatur.',
    lede: 'Wechsle zwischen heiß und eiskalt – die Karte ordnet sich selbst neu.',
    switchAria: 'Getränketemperatur wählen',
    filters: { all: 'Alle', hot: 'Heiß', iced: 'Eiskalt' },
    count: (filter, n) =>
      filter === 'hot'
        ? `${n} heiße Getränke`
        : filter === 'iced'
          ? `${n} eiskalte Getränke`
          : `Alle ${n} Getränke`,
    listAria: 'Getränkeliste',
    note: 'Beispielkarte: Namen, Beschreibungen und Fotos sind Platzhalter; die Preise kommen vom Laden.'
  },
  signature: {
    eyebrow: 'Signature',
    title: 'Vom Kardamom-Dampf zum Orangen-Frost.',
    lede: 'Vier Becher erzählen die ganze Idee. Scrolle nach unten und sieh, wie die Seite mit dir abkühlt.',
    strength: 'Stärke',
    sweetness: 'Süße',
    scale: (max) => `von ${max}`,
    profileNote: 'Beispielhaftes Geschmacksprofil',
    stories: {
      'cardamom-tea':
        'Der Dampf, der aus dem Glas steigt, ist die erste Begrüßung. Geduldig gebrühter Tee und Kardamom, den man vor dem ersten Schluck riecht.',
      'cardamom-latte':
        'Ein Stück Zuhause im To-go-Becher: gemahlener Kardamom auf Espresso und Milch, aufgeschäumt bis sie wie Seide ist.',
      'cold-brew': 'Kaffee, der sich Zeit nimmt: kalt angesetzt, dadurch weich, dunkel und wenig bitter.',
      'orange-tonic':
        'Tonic-Perlen, Orangenzeste und ein Espresso obenauf – ein Becher, der nach dem Ende eines heißen Tages schmeckt.'
    }
  },
  story: {
    eyebrow: 'Die Idee',
    srTitle: 'Unsere Idee: Handwerk im Becher, Leichtigkeit unterwegs',
    quote: 'Keine Stühle, keine Tische. Eine Theke und eine Idee: dein Getränk richtig gemacht, damit du weiterkommst.',
    steps: [
      { title: 'Wählen', text: 'Heiß, wenn du Wärme brauchst, eiskalt, wenn du Schwung brauchst. Eine kurze, klare Karte – ohne Rätselraten.' },
      {
        title: 'Wir machen es',
        text: 'Jeder Becher wird frisch zubereitet: ein präziser Shot, Milch mit der richtigen Temperatur, Eis genau dort, wo es hingehört.'
      },
      {
        title: 'Mitnehmen & los',
        text: 'Ein sicherer Deckel und ein Becher, der gut in der Hand liegt. Wir brauchen keinen Tisch – nur deinen nächsten Halt.'
      }
    ]
  },
  takeaway: {
    title: 'Gemacht für unterwegs.',
    text: 'Kein Warten auf einen Tisch, keine lange Liste. Getränk wählen, an der Theke abholen und den Weg die Geschichte erzählen lassen.',
    cta: 'Getränk wählen'
  },
  visit: {
    eyebrow: 'Besuch',
    title: 'Komm vorbei und hol dir deinen Becher.',
    placeholderEyebrow: 'Reservierter Bereich',
    placeholderTitle: 'Die Angaben zum Laden erscheinen hier, sobald sie vorliegen',
    placeholderText:
      'Damit nichts Unechtes gezeigt wird, erscheint dieser Bereich erst, wenn wir die bestätigten Angaben des Ladens haben:',
    slots: [
      'Adresse und Kartenlink',
      'Öffnungszeiten',
      'Bestellen: WhatsApp, Telefonnummer oder Lieferlink',
      'Preise und Bechergrößen'
    ],
    address: 'Adresse',
    hours: 'Öffnungszeiten',
    order: 'Bestellen',
    orderNow: 'Jetzt bestellen',
    whatsapp: 'WhatsApp',
    call: 'Anrufen'
  },
  footer: {
    notice:
      'Diese Seite ist ein Designkonzept, um dem Ladeninhaber eine Idee zu zeigen. Name, Logo, Karte, Texte und Fotos sind vorläufig; es gibt noch keine echten Preise, Angebote oder Kontaktdaten.',
    creditsSummary: 'Foto- und Technik-Nachweise',
    photosLead: 'Fotos von Unsplash unter der Unsplash-Lizenz:',
    tech: 'Animation: GSAP (GSAP Standard License) und Lenis (MIT). Komponenten SloshGauge und Noise aus React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Kardamom-Latte', desc: 'Espresso und aufgeschäumte Milch mit einer warmen Note Kardamom.' },
    'iced-latte': { name: 'Iced Latte', desc: 'Espresso auf kalter Milch und Eis – der Klassiker, der nie enttäuscht.' },
    'cardamom-tea': { name: 'Kardamom-Tee', desc: 'Schwarzer Tee, langsam nach irakischer Art gebrüht, mit Kardamom.' },
    'cold-brew': { name: 'Cold Brew', desc: 'Kalt angesetzter Kaffee – weich und wenig bitter.' },
    espresso: { name: 'Espresso', desc: 'Ein konzentrierter Shot mit goldener Crema, für alle, die Kaffee pur mögen.' },
    'orange-tonic': {
      name: 'Orangen-Espresso-Tonic',
      desc: 'Prickelndes Tonic und Orangenzeste, darauf ein Espresso über dem Eis.'
    },
    cappuccino: { name: 'Cappuccino', desc: 'Dichter Milchschaum auf einem ausgewogenen Espresso.' },
    'iced-matcha': { name: 'Iced Matcha', desc: 'Geschlagener Matcha auf kalter Milch – zwei Schichten, leicht grasig.' },
    mocha: { name: 'Mocha', desc: 'Dunkle Schokolade, Espresso und heiße Milch.' },
    'iced-caramel': { name: 'Iced Caramel Latte', desc: 'Buttriges Karamell, Espresso und kalte Milch auf Eis.' },
    'matcha-latte': { name: 'Matcha Latte', desc: 'Geschlagener Matcha mit warmer Milch und leichtem Schaum.' },
    'citrus-tea': { name: 'Zitrus-Eistee', desc: 'Kalter Tee mit Orangen- und Zitronenscheiben – frisch und leicht.' }
  }
};
