import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';

/**
 * Motion tiers, evaluated by gsap.matchMedia (audit §1A: GSAP core does not respect
 * prefers-reduced-motion by itself, so every animation is registered through this).
 */
export const MOTION_QUERIES = {
  full: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)'
} as const;

let registered = false;

export function registerGsap(): void {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText);
  registered = true;
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(MOTION_QUERIES.reduce).matches;
}

/**
 * Run GSAP setup inside a scoped matchMedia context. Everything created inside
 * (tweens, ScrollTriggers, SplitText) is reverted on unmount or when the
 * reduced-motion preference changes — no global ScrollTrigger.getAll().kill().
 */
export function useMotion(
  scope: RefObject<HTMLElement | null>,
  setup: (reduce: boolean) => void | (() => void),
  deps: DependencyList = []
): void {
  useLayoutEffect(() => {
    if (!scope.current) return;
    registerGsap();
    const mm = gsap.matchMedia(scope.current);
    mm.add(MOTION_QUERIES, (ctx) => {
      try {
        return setup(Boolean(ctx.conditions?.reduce));
      } catch (error) {
        // Animation is an enhancement: never let it break the page.
        console.warn('[motion] setup failed, content stays static', error);
        return undefined;
      }
    });
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Split Arabic or Latin text into WORDS only — never characters (audit §1A, SplitText).
 * Words become inline <span>s and the real spaces stay in place, so assistive tech reads
 * the text unchanged; `aria: 'none'` avoids putting aria-label on generic elements (<p>).
 */
export function splitWords(el: Element): SplitText {
  return SplitText.create(el, { type: 'words', tag: 'span', aria: 'none', wordsClass: 'split-word' });
}

export { gsap, ScrollTrigger, Flip, SplitText };
