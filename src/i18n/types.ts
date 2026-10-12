import type { MenuFilter } from '../lib/menu';

export const LOCALES = ['ar', 'en', 'ku', 'syr', 'sar', 'tr', 'fr', 'es', 'de', 'it', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ar';

export interface LocaleMeta {
  /** Name shown in the language picker, written in that language. */
  label: string;
  /** BCP 47 tag for <html lang>. Kurdish = Central Kurdish (Sorani); Sureth = Assyrian Neo-Aramaic. */
  htmlLang: string;
  dir: 'rtl' | 'ltr';
  digits: 'arab' | 'latn';
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  ar: { label: 'العربية', htmlLang: 'ar', dir: 'rtl', digits: 'arab' },
  en: { label: 'English', htmlLang: 'en', dir: 'ltr', digits: 'latn' },
  ku: { label: 'کوردی', htmlLang: 'ckb', dir: 'rtl', digits: 'arab' },
  syr: { label: 'ܣܘܪܝܬ', htmlLang: 'aii', dir: 'rtl', digits: 'latn' },
  /** Sureth written in Arabic letters exactly as pronounced (ܐܣܝܐ → أسيا). */
  sar: { label: 'سورث (لفظ عربي)', htmlLang: 'aii-Arab', dir: 'rtl', digits: 'arab' },
  tr: { label: 'Türkçe', htmlLang: 'tr', dir: 'ltr', digits: 'latn' },
  fr: { label: 'Français', htmlLang: 'fr', dir: 'ltr', digits: 'latn' },
  es: { label: 'Español', htmlLang: 'es', dir: 'ltr', digits: 'latn' },
  de: { label: 'Deutsch', htmlLang: 'de', dir: 'ltr', digits: 'latn' },
  it: { label: 'Italiano', htmlLang: 'it', dir: 'ltr', digits: 'latn' },
  zh: { label: '中文', htmlLang: 'zh-Hans', dir: 'ltr', digits: 'latn' }
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

export interface DrinkText {
  name: string;
  desc: string;
}

export type DrinkId =
  | 'cardamom-latte'
  | 'iced-latte'
  | 'cardamom-tea'
  | 'cold-brew'
  | 'espresso'
  | 'orange-tonic'
  | 'cappuccino'
  | 'iced-matcha'
  | 'mocha'
  | 'iced-caramel'
  | 'matcha-latte'
  | 'citrus-tea';

export type SignatureId = 'cardamom-tea' | 'cardamom-latte' | 'cold-brew' | 'orange-tonic';

/** Every user-visible string. TypeScript enforces that each language provides all of them. */
export interface Messages {
  meta: { title: string; description: string };
  banner: { strong: string; long: string; short: string; aria: string };
  skip: string;
  nav: {
    aria: string;
    home: string;
    menu: string;
    signature: string;
    story: string;
    cta: string;
    hot: string;
    cold: string;
    language: string;
  };
  hero: {
    tag: string;
    line1: string;
    line2: string;
    lede: string;
    ctaMenu: string;
    ctaSignature: string;
    factsAria: string;
    facts: [string, string, string];
  };
  split: {
    aria: string;
    valueText: (hot: string, iced: string) => string;
    hot: string;
    iced: string;
    caption: string;
    showHot: string;
    showIced: string;
  };
  temp: { hot: string; iced: string };
  menu: {
    eyebrow: string;
    title: string;
    lede: string;
    switchAria: string;
    filters: Record<MenuFilter, string>;
    count: (filter: MenuFilter, n: string) => string;
    listAria: string;
    note: string;
  };
  signature: {
    eyebrow: string;
    title: string;
    lede: string;
    strength: string;
    sweetness: string;
    scale: (max: string) => string;
    profileNote: string;
    stories: Record<SignatureId, string>;
  };
  story: {
    eyebrow: string;
    srTitle: string;
    quote: string;
    steps: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  };
  takeaway: { title: string; text: string; cta: string };
  visit: {
    eyebrow: string;
    title: string;
    placeholderEyebrow: string;
    placeholderTitle: string;
    placeholderText: string;
    slots: [string, string, string, string];
    address: string;
    hours: string;
    order: string;
    orderNow: string;
    whatsapp: string;
    call: string;
  };
  footer: {
    notice: string;
    creditsSummary: string;
    photosLead: string;
    tech: string;
  };
  drinks: Record<DrinkId, DrinkText>;
}
