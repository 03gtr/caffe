import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ScrollTrigger } from '../lib/motion';
import { ar } from './ar';
import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ku } from './ku';
import { sar } from './sar';
import { syr } from './syr';
import { tr } from './tr';
import { zh } from './zh';
import { DEFAULT_LOCALE, LOCALE_META, isLocale, type Locale, type LocaleMeta, type Messages } from './types';

export const MESSAGES: Record<Locale, Messages> = { ar, en, ku, syr, sar, tr, fr, es, de, it, zh };
const STORAGE_KEY = 'steam-frost-lang';

export interface I18n {
  locale: Locale;
  meta: LocaleMeta;
  t: Messages;
  /**
   * The "accent" language used for small bilingual details: English accents on
   * right-to-left pages, Arabic accents on left-to-right pages.
   */
  accent: { locale: Locale; meta: LocaleMeta; t: Messages };
  /** Format a number with the locale's digits (Arabic-Indic for Arabic, Kurdish and Sureth in Arabic letters). */
  num: (n: number | string) => string;
  setLocale: (locale: Locale) => void;
}

const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

function build(locale: Locale, setLocale: (l: Locale) => void): I18n {
  const meta = LOCALE_META[locale];
  const accentLocale: Locale = meta.dir === 'rtl' ? 'en' : 'ar';
  return {
    locale,
    meta,
    t: MESSAGES[locale],
    accent: { locale: accentLocale, meta: LOCALE_META[accentLocale], t: MESSAGES[accentLocale] },
    num: (n) => (meta.digits === 'arab' ? String(n).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]) : String(n)),
    setLocale
  };
}

const I18nContext = createContext<I18n>(build(DEFAULT_LOCALE, () => undefined));

export function I18nProvider({ children, initial = DEFAULT_LOCALE }: { children: ReactNode; initial?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode, file preview): the choice just isn't remembered */
    }
  }, []);

  // After hydration (the prerendered HTML is Arabic), restore ?lang= or the saved choice.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    const next = [fromUrl, stored].find(isLocale);
    if (next) setLocaleState(next);
  }, []);

  useEffect(() => {
    const meta = LOCALE_META[locale];
    const root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    document.title = MESSAGES[locale].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', MESSAGES[locale].meta.description);
    // Layout (direction, text length) changed: re-measure scroll animations.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [locale]);

  const value = useMemo(() => build(locale, setLocale), [locale, setLocale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  return useContext(I18nContext);
}
