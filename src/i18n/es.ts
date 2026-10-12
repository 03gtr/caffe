import type { Messages } from './types';

export const es: Messages = {
  meta: {
    title: 'STEAM & FROST — Concepto de bebidas para llevar',
    description:
      'Concepto de diseño para una tienda de bebidas calientes y frías para llevar. El nombre, el contenido y las fotos son solo de demostración.'
  },
  banner: {
    strong: 'Concepto de diseño',
    long: 'El nombre, el logo, la carta y las fotos son solo de demostración y se sustituirán por los datos reales de la tienda antes del lanzamiento.',
    short: 'Contenido y fotos solo de demostración.',
    aria: 'Aviso: concepto de diseño'
  },
  skip: 'Saltar a la carta',
  nav: {
    aria: 'Navegación principal',
    home: 'STEAM & FROST — volver arriba',
    menu: 'Carta',
    signature: 'De la casa',
    story: 'La idea',
    cta: 'Carta',
    hot: 'Caliente',
    cold: 'Frío',
    language: 'Idioma'
  },
  hero: {
    tag: 'Identidad temporal de demostración',
    line1: 'Caliente en la mano,',
    line2: 'fresco en el camino.',
    lede: 'Bebidas calientes y frías preparadas al momento, listas para llevar. Elige, recoge y sigue con tu día.',
    ctaMenu: 'Ver la carta',
    ctaSignature: 'Bebidas de la casa',
    factsAria: 'Qué es la tienda',
    facts: ['Caliente', 'Frío', 'Solo para llevar']
  },
  split: {
    aria: 'Compara el latte caliente y el frío',
    valueText: (hot, iced) => `Caliente ${hot} %, frío ${iced} %`,
    hot: 'Caliente',
    iced: 'Frío',
    caption: 'El mismo latte, dos estados de ánimo. Arrastra el divisor o usa las flechas del teclado.',
    showHot: 'Caliente',
    showIced: 'Frío'
  },
  temp: { hot: 'Caliente', iced: 'Frío' },
  menu: {
    eyebrow: 'Carta',
    title: 'Elige tu temperatura.',
    lede: 'Cambia entre caliente y frío: la carta se reordena sola.',
    switchAria: 'Elegir la temperatura de la bebida',
    filters: { all: 'Todo', hot: 'Caliente', iced: 'Frío' },
    count: (filter, n) =>
      filter === 'hot'
        ? `Mostrando ${n} bebidas calientes`
        : filter === 'iced'
          ? `Mostrando ${n} bebidas frías`
          : `Mostrando las ${n} bebidas`,
    listAria: 'Lista de bebidas',
    note: 'Carta ilustrativa: nombres, descripciones y fotos son provisionales; los precios los pondrá la tienda.'
  },
  signature: {
    eyebrow: 'De la casa',
    title: 'Del vapor de cardamomo a la escarcha de naranja.',
    lede: 'Cuatro vasos cuentan toda la idea. Baja y mira cómo la página se enfría contigo.',
    strength: 'Intensidad',
    sweetness: 'Dulzor',
    scale: (max) => `de ${max}`,
    profileNote: 'Perfil de sabor ilustrativo',
    stories: {
      'cardamom-tea':
        'El vapor que sube del vaso es la primera bienvenida. Té preparado con paciencia y cardamomo que se huele antes del primer sorbo.',
      'cardamom-latte':
        'Un sabor de casa en un vaso para llevar: cardamomo molido sobre espresso y leche vaporizada hasta volverse seda.',
      'cold-brew': 'Café sin prisas: infusionado en frío, sale suave, oscuro y con poco amargor.',
      'orange-tonic':
        'Burbujas de tónica, piel de naranja y un espresso flotando encima: un vaso que sabe a final de día caluroso.'
    }
  },
  story: {
    eyebrow: 'La idea',
    srTitle: 'Nuestra idea: oficio en el vaso, facilidad en el camino',
    quote: 'Sin sillas ni mesas. Un mostrador y una idea: tu bebida bien hecha, para que sigas con tu día.',
    steps: [
      { title: 'Elige', text: 'Caliente cuando necesitas calor, frío cuando necesitas energía. Una carta corta y clara, sin dudas.' },
      {
        title: 'Lo preparamos',
        text: 'Cada vaso se prepara al momento: un shot preciso, leche a la temperatura justa y hielo donde toca.'
      },
      {
        title: 'Llévalo y vete',
        text: 'Tapa segura y un vaso que se sostiene bien. No necesitamos mesa, solo tu próxima parada.'
      }
    ]
  },
  takeaway: {
    title: 'Hecho para llevar.',
    text: 'Sin esperar mesa ni listas largas. Elige tu bebida, recógela en el mostrador y deja que el camino cuente la historia.',
    cta: 'Elige tu bebida'
  },
  visit: {
    eyebrow: 'Visítanos',
    title: 'Pasa y llévate tu vaso.',
    placeholderEyebrow: 'Espacio reservado',
    placeholderTitle: 'Los datos de la tienda aparecerán aquí cuando estén disponibles',
    placeholderText:
      'Para no mostrar nada que no sea real, esta sección solo aparecerá cuando recibamos los datos confirmados de la tienda:',
    slots: [
      'Dirección y enlace al mapa',
      'Horario',
      'Pedidos: WhatsApp, teléfono o enlace de entrega',
      'Precios y tamaños de vaso'
    ],
    address: 'Dirección',
    hours: 'Horario',
    order: 'Pedir',
    orderNow: 'Pedir ahora',
    whatsapp: 'WhatsApp',
    call: 'Llamar'
  },
  footer: {
    notice:
      'Esta página es un concepto de diseño para presentar una idea al dueño de la tienda. El nombre, el logo, la carta, los textos y las fotos son provisionales; todavía no hay precios, ofertas ni datos de contacto reales.',
    creditsSummary: 'Créditos de fotos y tecnología',
    photosLead: 'Fotos de Unsplash bajo la Licencia de Unsplash:',
    tech: 'Animación: GSAP (GSAP Standard License) y Lenis (MIT). Componentes SloshGauge y Noise de React Bits (MIT + Commons Clause) — © David Haz.'
  },
  drinks: {
    'cardamom-latte': { name: 'Latte de cardamomo', desc: 'Espresso y leche vaporizada con un toque cálido de cardamomo.' },
    'iced-latte': { name: 'Latte frío', desc: 'Espresso sobre leche fría y hielo: el clásico que nunca falla.' },
    'cardamom-tea': { name: 'Té con cardamomo', desc: 'Té negro preparado a fuego lento al estilo iraquí, con cardamomo.' },
    'cold-brew': { name: 'Cold brew', desc: 'Café infusionado en frío: suave y con poco amargor.' },
    espresso: { name: 'Espresso', desc: 'Un shot concentrado con crema dorada, para quien quiere el café tal cual.' },
    'orange-tonic': {
      name: 'Espresso tónica de naranja',
      desc: 'Tónica con burbujas y piel de naranja, con un espresso flotando sobre el hielo.'
    },
    cappuccino: { name: 'Capuchino', desc: 'Espuma de leche densa sobre un espresso equilibrado.' },
    'iced-matcha': { name: 'Matcha frío', desc: 'Matcha batido sobre leche fría: dos capas, suavemente herbal.' },
    mocha: { name: 'Moca', desc: 'Chocolate negro, espresso y leche caliente.' },
    'iced-caramel': { name: 'Latte de caramelo frío', desc: 'Caramelo cremoso, espresso y leche fría sobre hielo.' },
    'matcha-latte': { name: 'Matcha latte', desc: 'Matcha batido con leche caliente y espuma ligera.' },
    'citrus-tea': { name: 'Té frío cítrico', desc: 'Té frío con rodajas de naranja y limón: fresco y ligero.' }
  }
};
