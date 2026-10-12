import { describe, expect, it } from 'vitest';
import { drinks, signatureDrinks } from '../content/drinks';
import { photos, photoSrcSet, photoUrl } from '../content/photos';
import { business, hasContactInfo } from '../content/site';
import { MESSAGES } from '../i18n/I18nProvider';
import { LOCALES, LOCALE_META } from '../i18n/types';
import { filterTemperature, isVisible } from '../lib/menu';

describe('concept content', () => {
  it('has a balanced hot / iced menu with unique ids and existing photos', () => {
    const ids = new Set(drinks.map((d) => d.id));
    expect(ids.size).toBe(drinks.length);
    expect(drinks.filter((d) => d.temp === 'hot')).toHaveLength(6);
    expect(drinks.filter((d) => d.temp === 'iced')).toHaveLength(6);
    for (const d of drinks) expect(photos[d.photo], d.id).toBeDefined();
  });

  it('orders signature drinks hot → iced so the Thermostat cools down with the page', () => {
    const temps = signatureDrinks.map((d) => d.temp);
    expect(temps).toEqual([...temps].sort((a, b) => (a === b ? 0 : a === 'hot' ? -1 : 1)));
    for (const d of signatureDrinks) {
      expect(d.profile.strength).toBeGreaterThanOrEqual(0);
      expect(d.profile.strength).toBeLessThanOrEqual(100);
    }
  });

  it('does not invent business details: contact, hours and ordering are empty until provided', () => {
    expect(business.isConcept).toBe(true);
    expect(hasContactInfo(business)).toBe(false);
  });

  it('serves every photo through the resizing CDN with alt text and credit', () => {
    for (const p of Object.values(photos)) {
      expect(p.alt.length).toBeGreaterThan(8);
      expect(p.author.length).toBeGreaterThan(0);
      expect(photoUrl(p, 640, 1.25)).toMatch(/^https:\/\/images\.unsplash\.com\/photo-[\w-]+\?auto=format&fit=crop.*w=640&h=800/);
      expect(photoSrcSet(p, 1)).toContain(' 360w');
    }
  });
});

describe('languages', () => {
  it('offers Arabic first plus eleven more languages with correct direction', () => {
    expect(LOCALES[0]).toBe('ar');
    expect(LOCALES).toEqual(['ar', 'en', 'ku', 'syr', 'sar', 'sur', 'tr', 'fr', 'es', 'de', 'it', 'zh']);
    expect(LOCALES.filter((l) => LOCALE_META[l].dir === 'rtl')).toEqual(['ar', 'ku', 'syr', 'sar']);
  });

  it('translates every drink, signature story and section in every language', () => {
    for (const l of LOCALES) {
      const t = MESSAGES[l];
      for (const d of drinks) {
        expect(t.drinks[d.id].name.trim(), `${l}:${d.id}`).not.toBe('');
        expect(t.drinks[d.id].desc.trim(), `${l}:${d.id}`).not.toBe('');
      }
      for (const s of signatureDrinks) expect(t.signature.stories[s.id].trim()).not.toBe('');
      expect(t.story.steps).toHaveLength(3);
      expect(t.visit.slots).toHaveLength(4);
    }
  });

  it('keeps languages genuinely different (no untranslated copies of Arabic)', () => {
    for (const l of LOCALES.filter((x) => x !== 'ar')) {
      expect(MESSAGES[l].hero.line1).not.toBe(MESSAGES.ar.hero.line1);
      expect(MESSAGES[l].menu.title).not.toBe(MESSAGES.ar.menu.title);
    }
  });

  it('writes each language in its own script', () => {
    const arabic = /[؀-ۿ]/;
    for (const l of ['en', 'sur', 'tr', 'fr', 'es', 'de', 'it', 'zh'] as const) expect(MESSAGES[l].hero.lede).not.toMatch(arabic);
    expect(MESSAGES.ku.hero.lede).toMatch(/[ڕڵۆێە]/);
    expect(MESSAGES.syr.hero.lede).toMatch(/[ܐ-ܯ]/);
    expect(MESSAGES.syr.hero.lede).not.toMatch(/[ء-ي]/);
    // Sureth in Arabic letters: same words as the Syriac version, Arabic script, Iraqi letters for p/ch/g.
    expect(MESSAGES.sar.hero.lede).toMatch(/[پچگ]/);
    expect(MESSAGES.sar.hero.lede).not.toMatch(/[ܐ-ܯ]/);
    expect(MESSAGES.sar.hero.line1.split(' ')).toHaveLength(MESSAGES.syr.hero.line1.split(' ').length);
    expect(MESSAGES.zh.hero.lede).toMatch(/[一-鿿]/);
  });
});

describe('menu helpers', () => {
  it('filters by temperature', () => {
    const hot = drinks.find((d) => d.temp === 'hot')!;
    expect(isVisible(hot, 'all')).toBe(true);
    expect(isVisible(hot, 'hot')).toBe(true);
    expect(isVisible(hot, 'iced')).toBe(false);
  });

  it('maps filters to thermostat values', () => {
    expect(filterTemperature('hot')).toBe(0);
    expect(filterTemperature('all')).toBe(0.5);
    expect(filterTemperature('iced')).toBe(1);
  });
});
