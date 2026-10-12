import type { Messages } from './types';

export const en: Messages = {
  meta: {
    title: 'STEAM & FROST — Takeaway drinks concept',
    description:
      'Design concept for a takeaway hot & iced drinks shop. Name, content and photos are for demonstration only.'
  },
  banner: {
    strong: 'Design concept',
    long: "Name, logo, menu and photos are for demonstration only and will be replaced with the shop's real details before launch.",
    short: 'Content and photos are for demo only.',
    aria: 'Notice: design concept'
  },
  skip: 'Skip to menu',
  nav: {
    aria: 'Main navigation',
    home: 'STEAM & FROST — back to top',
    menu: 'Menu',
    signature: 'Signature',
    story: 'Our idea',
    cta: 'Menu',
    hot: 'Hot',
    cold: 'Cold',
    language: 'Language'
  },
  hero: {
    tag: 'Temporary demo identity',
    line1: 'Warm in your hand,',
    line2: 'cool on your way.',
    lede: 'Hot and iced drinks made the moment you order, ready to go. Pick, collect, carry on with your day.',
    ctaMenu: 'Browse the menu',
    ctaSignature: 'Signature drinks',
    factsAria: 'What the shop is',
    facts: ['Hot', 'Iced', 'Takeaway only']
  },
  split: {
    aria: 'Compare the hot and iced latte',
    valueText: (hot, iced) => `Hot ${hot}%, iced ${iced}%`,
    hot: 'Hot',
    iced: 'Iced',
    caption: 'Same latte, two moods. Drag the divider or use the arrow keys.',
    showHot: 'Hot',
    showIced: 'Iced'
  },
  temp: { hot: 'Hot', iced: 'Iced' },
  menu: {
    eyebrow: 'Menu',
    title: 'Pick your temperature.',
    lede: 'Switch between hot and iced — the menu rearranges itself.',
    switchAria: 'Choose drink temperature',
    filters: { all: 'All', hot: 'Hot', iced: 'Iced' },
    count: (filter, n) =>
      filter === 'hot'
        ? `Showing ${n} hot drinks`
        : filter === 'iced'
          ? `Showing ${n} iced drinks`
          : `Showing all ${n} drinks`,
    listAria: 'Drinks list',
    note: 'Illustrative menu: names, descriptions and photos are placeholders; prices will come from the shop.'
  },
  signature: {
    eyebrow: 'Signature',
    title: 'From cardamom steam to orange frost.',
    lede: 'Four cups tell the whole idea. Scroll down and watch the page cool down with you.',
    strength: 'Strength',
    sweetness: 'Sweetness',
    scale: (max) => `of ${max}`,
    profileNote: 'Illustrative taste profile',
    stories: {
      'cardamom-tea':
        'The steam rising from the glass is the first welcome. Tea brewed patiently, cardamom you can smell before the first sip.',
      'cardamom-latte':
        'A taste of home in a to-go cup: ground cardamom over espresso, and milk steamed until it turns to silk.',
      'cold-brew': 'Coffee that takes its time: steeped cold, so it comes out smooth, dark and low in bitterness.',
      'orange-tonic':
        'Tonic bubbles, orange zest and espresso floating on top — a cup that tastes like the end of a hot day.'
    }
  },
  story: {
    eyebrow: 'The idea',
    srTitle: 'Our idea: craft in the cup, ease on the go',
    quote: 'No chairs, no tables. One counter and one idea: your drink made right, so you can get on with your day.',
    steps: [
      { title: 'Pick', text: 'Hot when you need warmth, iced when you need a lift. A short, clear menu — no guesswork.' },
      {
        title: 'We make it',
        text: 'Every cup is made the moment you order: a precise shot, milk at the right temperature, ice where it belongs.'
      },
      {
        title: 'Take it & go',
        text: "A secure lid and a cup that sits right in your hand. We don't need a table — just your next stop."
      }
    ]
  },
  takeaway: {
    title: 'Made to go.',
    text: 'No waiting for a table, no long list. Choose your drink, pick it up at the counter, and let the road carry the story.',
    cta: 'Choose your drink'
  },
  visit: {
    eyebrow: 'Visit',
    title: 'Drop by and grab your cup.',
    placeholderEyebrow: 'Reserved space',
    placeholderTitle: 'Shop details will appear here once available',
    placeholderText:
      "To avoid showing anything that isn't real, this section appears only after we receive the shop's confirmed details:",
    slots: ['Address and map link', 'Opening hours', 'Ordering: WhatsApp, phone number or delivery link', 'Prices and cup sizes'],
    address: 'Address',
    hours: 'Opening hours',
    order: 'Order',
    orderNow: 'Order now',
    whatsapp: 'WhatsApp',
    call: 'Call'
  },
  footer: {
    notice:
      'This page is a design concept to present an idea to the shop owner. The name, logo, menu, copy and photos are temporary; there are no real prices, offers or contact details yet.',
    creditsSummary: 'Photo & technology credits',
    photosLead: 'Photos from Unsplash under the Unsplash License:',
    tech: 'Motion: GSAP (GSAP Standard License) and Lenis (MIT). SloshGauge and Noise components from React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Cardamom Latte', desc: 'Espresso and steamed milk with a warm touch of cardamom.' },
    'iced-latte': { name: 'Iced Latte', desc: 'Espresso over cold milk and ice — the classic that never disappoints.' },
    'cardamom-tea': { name: 'Cardamom Tea', desc: 'Black tea slow-brewed the Iraqi way, with cardamom.' },
    'cold-brew': { name: 'Cold Brew', desc: 'Coffee steeped cold — smooth and low in bitterness.' },
    espresso: { name: 'Espresso', desc: 'A concentrated shot with golden crema, for those who like coffee as it is.' },
    'orange-tonic': {
      name: 'Orange Espresso Tonic',
      desc: 'Sparkling tonic and orange zest, with an espresso shot floating over the ice.'
    },
    cappuccino: { name: 'Cappuccino', desc: 'Dense milk foam over a balanced espresso.' },
    'iced-matcha': { name: 'Iced Matcha', desc: 'Whisked matcha over cold milk — two layers, softly grassy.' },
    mocha: { name: 'Mocha', desc: 'Dark chocolate, espresso and hot milk.' },
    'iced-caramel': { name: 'Iced Caramel Latte', desc: 'Buttery caramel, espresso and cold milk over ice.' },
    'matcha-latte': { name: 'Matcha Latte', desc: 'Whisked matcha with warm milk and light foam.' },
    'citrus-tea': { name: 'Citrus Iced Tea', desc: 'Cold tea with orange and lemon slices — fresh and light.' }
  }
};
