import type { DrinkId, SignatureId } from '../i18n/types';
import type { PhotoKey } from './photos';

/**
 * CONCEPT MENU — illustrative drinks only. No prices are shown on purpose.
 * Names and descriptions live in the language files (src/i18n/*.ts → `drinks`).
 */
export type Temperature = 'hot' | 'iced';

export interface Drink {
  id: DrinkId;
  temp: Temperature;
  photo: PhotoKey;
}

export interface SignatureDrink extends Drink {
  id: SignatureId;
  /** Illustrative taste profile (0–100) shown by the liquid meters. Not a nutritional claim. */
  profile: { strength: number; sweetness: number };
}

export const drinks: Drink[] = [
  { id: 'cardamom-latte', temp: 'hot', photo: 'hotLatte' },
  { id: 'iced-latte', temp: 'iced', photo: 'icedLatte' },
  { id: 'cardamom-tea', temp: 'hot', photo: 'tea' },
  { id: 'cold-brew', temp: 'iced', photo: 'coldBrew' },
  { id: 'espresso', temp: 'hot', photo: 'espresso' },
  { id: 'orange-tonic', temp: 'iced', photo: 'espressoTonic' },
  { id: 'cappuccino', temp: 'hot', photo: 'cappuccino' },
  { id: 'iced-matcha', temp: 'iced', photo: 'matchaIced' },
  { id: 'mocha', temp: 'hot', photo: 'mocha' },
  { id: 'iced-caramel', temp: 'iced', photo: 'icedCaramel' },
  { id: 'matcha-latte', temp: 'hot', photo: 'matchaHot' },
  { id: 'citrus-tea', temp: 'iced', photo: 'citrusTea' }
];

const byId = (id: SignatureId): Drink => {
  const d = drinks.find((x) => x.id === id);
  if (!d) throw new Error(`Unknown drink: ${id}`);
  return d;
};

/** Ordered hot → iced: the page "cools down" as visitors scroll through them. */
export const signatureDrinks: SignatureDrink[] = [
  { ...byId('cardamom-tea'), id: 'cardamom-tea', profile: { strength: 70, sweetness: 45 } },
  { ...byId('cardamom-latte'), id: 'cardamom-latte', profile: { strength: 55, sweetness: 40 } },
  { ...byId('cold-brew'), id: 'cold-brew', profile: { strength: 80, sweetness: 10 } },
  { ...byId('orange-tonic'), id: 'orange-tonic', profile: { strength: 60, sweetness: 30 } }
];
