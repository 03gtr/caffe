import type { Drink, Temperature } from '../content/drinks';

export type MenuFilter = 'all' | Temperature;

export const MENU_FILTERS: MenuFilter[] = ['all', 'hot', 'iced'];

export function isVisible(drink: Drink, filter: MenuFilter): boolean {
  return filter === 'all' || drink.temp === filter;
}

/** Thermostat value used by the menu section: 0 = hot, 1 = iced. */
export function filterTemperature(filter: MenuFilter): number {
  return filter === 'hot' ? 0 : filter === 'iced' ? 1 : 0.5;
}
