import type { Messages } from './types';

/**
 * Spoken (colloquial) Lishana Surith in Latin letters, as written in chats and on phones.
 * Everyday words (Shlama, Bshina, Chay, Qahwa, Halwa, Hamza, Shita, Helya, Ida, Hata, Zora, Tali, Ylla…)
 * follow the client's Nineveh Plains spoken dictionary. Draft: must be reviewed by a native speaker.
 */
export const sur: Messages = {
  meta: {
    title: 'STEAM & FROST — Tupsa d-dukkana d-shtaya',
    description:
      'Tupsa (concept) d-dukkana d-shtaya hamza w shita, l-shqala bas. Shimma, ktawa w surate ina qa khzaya bas.'
  },
  banner: {
    strong: 'Tupsa (concept)',
    long: 'Shimma, logo, menu w surate ina qa khzaya bas, w bid shakhlpi am malumat sharire d-dukkana qam d-patkha.',
    short: 'Ktawa w surate qa khzaya bas.',
    aria: 'Malumat: tupsa (concept)'
  },
  skip: 'Azil l-menu',
  nav: {
    aria: 'Urkha d-pata',
    home: 'STEAM & FROST — l-resha',
    menu: 'Menu',
    signature: 'Gubaya dilan',
    story: 'Fikra dilan',
    cta: 'Menu',
    hot: 'Hamza',
    cold: 'Shita',
    language: 'Lishana'
  },
  hero: {
    tag: 'Shimma qa khzaya bas',
    line1: 'Hamza b-idukh,',
    line2: 'shita b-urkhukh.',
    lede: 'Chay, qahwa w shtaya hamza w shita — kul kasa hata, l-shqala. Gbi, shqul, w ylla!',
    ctaMenu: 'Khzi menu',
    ctaSignature: 'Gubaya dilan',
    factsAria: 'Ma ile dukkana?',
    facts: ['Hamza', 'Shita', 'L-shqala bas']
  },
  split: {
    aria: 'Latte hamza w latte shita',
    valueText: (hot, iced) => `Hamza ${hot}%, shita ${iced}%`,
    hot: 'Hamza',
    iced: 'Shita',
    caption: 'Kha latte, trey gone. Grush l-palga, aw mkhi l-arrow keys.',
    showHot: 'Hamza',
    showIced: 'Shita'
  },
  temp: { hot: 'Hamza', iced: 'Shita' },
  menu: {
    eyebrow: 'Menu',
    title: 'Ma bshatit? Hamza aw shita?',
    lede: 'Gbi hamza aw shita, w menu ki shakhil ammukh.',
    switchAria: 'Gbi hamza aw shita',
    filters: { all: 'Kulle', hot: 'Hamza', iced: 'Shita' },
    count: (filter, n) =>
      filter === 'hot' ? `${n} shtaya hamza` : filter === 'iced' ? `${n} shtaya shita` : `Kulle: ${n} shtaya`,
    listAria: 'Shtaya',
    note: 'Menu d-tupsa: shimmahe w surate qa khzaya bas. B-maqda? Parra bid athi min dukkana.'
  },
  signature: {
    eyebrow: 'Gubaya dilan',
    title: 'Min tnana d-hel hal glida d-purtaqal.',
    lede: 'Arba kase ki mkhawi kul fikra. Khut l-takhta w khzi: pata ki pasha shita ammukh.',
    strength: 'Khayla',
    sweetness: 'Helyuta',
    scale: (max) => `min ${max}`,
    profileNote: 'Taama qa khzaya',
    stories: {
      'cardamom-tea': 'Tnana d-sliq min kasa ile Bshina d-qamaya. Chay helya w hamza, w hel d-ki marikhit qam d-shatit.',
      'cardamom-latte': 'Taama d-beyta b-kasa d-shqala: hel al espresso, w halwa hamza w rakikha.',
      'cold-brew': 'Qahwa d-la ajala: mtuyba b-shita — rakikha, kuma, w la marira.',
      'orange-tonic': 'Tonic, purtaqal w espresso al glida — kasa d-taameh dakh shulama d-yuma hamza.'
    }
  },
  story: {
    eyebrow: 'Fikra',
    srTitle: 'Fikra dilan: kasa tawa, w urkha psheta',
    quote: 'Layt karse, layt pature. Kha dukkana w kha fikra: shtaya dilukh tawa, w ylla l-urkhukh.',
    steps: [
      { title: 'Gbi', text: 'Hamza ema d-baet khamimuta, shita ema d-baet khayla. Menu zora w psheta.' },
      { title: 'Mtaybakh', text: 'Kul kasa hata: espresso trisa, halwa b-khamimuta trista, w glida b-dukteh.' },
      { title: 'Shqul w ylla', text: 'Kasa tawa b-idukh. La sniqakh l-patura — bas urkhukh.' }
    ]
  },
  takeaway: {
    title: 'Shqul w ylla.',
    text: 'Layt sekaya qa patura, layt menu yarikha. Gbi shtaya dilukh, shqul min dukkana, w ylla.',
    cta: 'Gbi shtaya dilukh'
  },
  visit: {
    eyebrow: 'Tali',
    title: 'Tali, shqul kasa dilukh.',
    placeholderEyebrow: 'Dukta qa malumat',
    placeholderTitle: 'Malumat d-dukkana bid athi l-ekha',
    placeholderText:
      'Qa d-la mkhawakh mindi d-la ile sharira, aha bid pasha khzita bas bathar d-mate lan malumat sharire d-dukkana:',
    slots: [
      'Dukta w map',
      'Sae d-patkha',
      'Talab: WhatsApp, telephone aw link qa delivery',
      'B-maqda? Parra w kase gora w zora'
    ],
    address: 'Dukta',
    hours: 'Sae d-patkha',
    order: 'Talab',
    orderNow: 'Tlub hasha',
    whatsapp: 'WhatsApp',
    call: 'Qri'
  },
  footer: {
    notice:
      'Aha pata ila tupsa qa mkhawa fikra l-mara d-dukkana. Shimma, logo, menu, ktawa w surate ina qa khzaya bas; layt parra, offers aw malumat sharire hal hasha.',
    creditsSummary: 'Surate w technology',
    photosLead: 'Surate min Unsplash (Unsplash License):',
    tech: 'Zawa: GSAP (GSAP Standard License) w Lenis (MIT). SloshGauge w Noise min React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Latte am hel', desc: 'Espresso w halwa hamza am hel.' },
    'iced-latte': { name: 'Latte shita', desc: 'Espresso al halwa shita w glida.' },
    'cardamom-tea': { name: 'Chay am hel', desc: 'Chay kuma, mtuyba b-nikhuta, am hel — dakh d-beyta.' },
    'cold-brew': { name: 'Cold brew', desc: 'Qahwa mtuyba b-shita — rakikha w la marira.' },
    espresso: { name: 'Espresso', desc: 'Qahwa khaylanta w zora, dakh d-ila.' },
    'orange-tonic': { name: 'Espresso tonic am purtaqal', desc: 'Tonic w purtaqal, w espresso al glida.' },
    cappuccino: { name: 'Cappuccino', desc: 'Espresso am halwa hamza w abya.' },
    'iced-matcha': { name: 'Matcha shita', desc: 'Matcha yuroqa al halwa shita w glida.' },
    mocha: { name: 'Mocha', desc: 'Shokolata, espresso w halwa hamza.' },
    'iced-caramel': { name: 'Caramel latte shita', desc: 'Caramel, espresso w halwa shita al glida.' },
    'matcha-latte': { name: 'Matcha latte', desc: 'Matcha am halwa hamza.' },
    'citrus-tea': { name: 'Chay shita am purtaqal', desc: 'Chay shita am purtaqal w limon — hata w qalila.' }
  }
};
