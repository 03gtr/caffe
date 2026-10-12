import type { Messages } from './types';

export const tr: Messages = {
  meta: {
    title: 'STEAM & FROST — Paket içecek konsepti',
    description:
      'Sıcak ve soğuk paket içecek dükkânı için tasarım konsepti. İsim, içerik ve fotoğraflar yalnızca tanıtım amaçlıdır.'
  },
  banner: {
    strong: 'Tasarım konsepti',
    long: 'İsim, logo, menü ve fotoğraflar yalnızca tanıtım içindir; yayından önce dükkânın gerçek bilgileriyle değiştirilecektir.',
    short: 'İçerik ve fotoğraflar yalnızca tanıtım içindir.',
    aria: 'Not: tasarım konsepti'
  },
  skip: 'Menüye geç',
  nav: {
    aria: 'Ana gezinme',
    home: 'STEAM & FROST — başa dön',
    menu: 'Menü',
    signature: 'İmza',
    story: 'Fikrimiz',
    cta: 'Menü',
    hot: 'Sıcak',
    cold: 'Soğuk',
    language: 'Dil'
  },
  hero: {
    tag: 'Geçici tanıtım kimliği',
    line1: 'Elinde sıcak,',
    line2: 'yolda serin.',
    lede: 'Siparişinle birlikte hazırlanan sıcak ve buzlu içecekler, yanına almaya hazır. Seç, teslim al, gününe devam et.',
    ctaMenu: 'Menüye göz at',
    ctaSignature: 'İmza içecekler',
    factsAria: 'Dükkânın konsepti',
    facts: ['Sıcak', 'Buzlu', 'Yalnızca paket servis']
  },
  split: {
    aria: 'Sıcak ve buzlu latteyi karşılaştır',
    valueText: (hot, iced) => `Sıcak %${hot}, buzlu %${iced}`,
    hot: 'Sıcak',
    iced: 'Buzlu',
    caption: 'Aynı latte, iki ruh hâli. Ayırıcıyı sürükle ya da ok tuşlarını kullan.',
    showHot: 'Sıcak',
    showIced: 'Buzlu'
  },
  temp: { hot: 'Sıcak', iced: 'Buzlu' },
  menu: {
    eyebrow: 'Menü',
    title: 'Sıcaklığını seç.',
    lede: 'Sıcak ve buzlu arasında geçiş yap; menü kendini yeniden düzenler.',
    switchAria: 'İçecek sıcaklığını seç',
    filters: { all: 'Tümü', hot: 'Sıcak', iced: 'Buzlu' },
    count: (filter, n) =>
      filter === 'hot'
        ? `${n} sıcak içecek gösteriliyor`
        : filter === 'iced'
          ? `${n} buzlu içecek gösteriliyor`
          : `${n} içeceğin tümü gösteriliyor`,
    listAria: 'İçecek listesi',
    note: 'Örnek menü: isimler, açıklamalar ve fotoğraflar geçicidir; fiyatlar dükkândan gelecektir.'
  },
  signature: {
    eyebrow: 'İmza',
    title: 'Kakule buharından portakal serinliğine.',
    lede: 'Dört bardak fikrin tamamını anlatıyor. Aşağı kaydır, sayfanın seninle birlikte serinlediğini izle.',
    strength: 'Yoğunluk',
    sweetness: 'Tatlılık',
    scale: (max) => `/ ${max}`,
    profileNote: 'Örnek tat profili',
    stories: {
      'cardamom-tea':
        'Bardaktan yükselen buhar ilk karşılamadır. Sabırla demlenmiş çay, ilk yudumdan önce kokusu yayılan kakule.',
      'cardamom-latte':
        'Karton bardakta ev tadı: espressonun üzerine öğütülmüş kakule ve ipek kıvamına gelene dek köpürtülmüş süt.',
      'cold-brew': 'Acele etmeyen bir kahve: soğukta demlenir; yumuşak, koyu ve az acı olur.',
      'orange-tonic': 'Tonik kabarcıkları, portakal kabuğu ve üstte yüzen espresso; sıcak bir günün sonunu andıran bir bardak.'
    }
  },
  story: {
    eyebrow: 'Fikir',
    srTitle: 'Fikrimiz: bardakta ustalık, yolda kolaylık',
    quote: 'Ne sandalye var ne masa. Tek bir tezgâh ve tek bir fikir: içeceğin tam kıvamında hazırlansın, sen de gününe devam et.',
    steps: [
      { title: 'Seç', text: 'Isınmak istersen sıcak, ferahlamak istersen buzlu. Kısa ve net bir menü, kararsızlık yok.' },
      {
        title: 'Hazırlıyoruz',
        text: 'Her bardak siparişin anında hazırlanır: ölçülü bir shot, doğru sıcaklıkta süt, yerinde buz.'
      },
      {
        title: 'Al ve git',
        text: 'Sıkı kapanan bir kapak ve elde rahat duran bir bardak. Masaya ihtiyacımız yok; yoluna devam etmen yeter.'
      }
    ]
  },
  takeaway: {
    title: 'Al ve git.',
    text: 'Masa beklemek yok, uzun liste yok. İçeceğini seç, tezgâhtan teslim al ve gerisini yol anlatsın.',
    cta: 'İçeceğini seç'
  },
  visit: {
    eyebrow: 'Ziyaret',
    title: 'Uğra, bardağını al.',
    placeholderEyebrow: 'Ayrılmış alan',
    placeholderTitle: 'Dükkân bilgileri hazır olduğunda burada yer alacak',
    placeholderText:
      'Gerçek olmayan bilgi göstermemek için bu bölüm yalnızca dükkânın doğrulanmış bilgileri bize ulaştığında görünür:',
    slots: ['Adres ve harita bağlantısı', 'Çalışma saatleri', 'Sipariş: WhatsApp, telefon numarası veya teslimat bağlantısı', 'Fiyatlar ve bardak boyları'],
    address: 'Adres',
    hours: 'Çalışma saatleri',
    order: 'Sipariş',
    orderNow: 'Şimdi sipariş ver',
    whatsapp: 'WhatsApp',
    call: 'Ara'
  },
  footer: {
    notice:
      'Bu sayfa, dükkân sahibine bir fikri sunmak için hazırlanmış bir tasarım konseptidir. İsim, logo, menü, metinler ve fotoğraflar geçicidir; henüz gerçek fiyat, kampanya veya iletişim bilgisi yoktur.',
    creditsSummary: 'Fotoğraf ve teknoloji kaynakları',
    photosLead: "Fotoğraflar Unsplash'ten, Unsplash Lisansı ile:",
    tech: "Animasyon: GSAP (GSAP Standart Lisansı) ve Lenis (MIT). SloshGauge ve Noise bileşenleri React Bits'ten (MIT + Commons Clause) — © David Haz."
  },
  drinks: {
    'cardamom-latte': { name: 'Kakuleli Latte', desc: 'Espresso ve buharla ısıtılmış süt, sıcacık bir kakule dokunuşuyla.' },
    'iced-latte': { name: 'Buzlu Latte', desc: 'Soğuk süt ve buz üzerinde espresso; asla hayal kırıklığı yaratmayan klasik.' },
    'cardamom-tea': { name: 'Kakuleli Çay', desc: 'Irak usulü demlenmiş, kakuleli siyah çay.' },
    'cold-brew': { name: 'Cold Brew', desc: 'Soğukta demlenmiş kahve; yumuşak ve az acı.' },
    espresso: { name: 'Espresso', desc: 'Altın kremalı yoğun bir shot; kahveyi olduğu gibi sevenler için.' },
    'orange-tonic': {
      name: 'Portakallı Espresso Tonik',
      desc: 'Köpüklü tonik, portakal kabuğu ve buzun üzerinde yüzen bir shot espresso.'
    },
    cappuccino: { name: 'Cappuccino', desc: 'Dengeli bir espressonun üzerinde yoğun süt köpüğü.' },
    'iced-matcha': { name: 'Buzlu Matcha', desc: 'Soğuk süt üzerinde çırpılmış matcha; iki katman, yumuşak bitkisel tat.' },
    mocha: { name: 'Mocha', desc: 'Bitter çikolata, espresso ve sıcak süt.' },
    'iced-caramel': { name: 'Buzlu Karamel Latte', desc: 'Kremamsı karamel, espresso ve buz üzerinde soğuk süt.' },
    'matcha-latte': { name: 'Matcha Latte', desc: 'Sıcak süt ve hafif köpükle çırpılmış matcha.' },
    'citrus-tea': { name: 'Narenciyeli Buzlu Çay', desc: 'Portakal ve limon dilimli soğuk çay; ferah ve hafif.' }
  }
};
