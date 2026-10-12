import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion, registerGsap } from './motion';

/**
 * Lenis smooths WHEEL input only. Touch scrolling stays fully native (syncTouch: false),
 * and Lenis is not started at all for reduced-motion users or coarse pointers.
 * It is never combined with GSAP ScrollSmoother or ScrollTrigger.normalizeScroll (audit §1B).
 *
 * In-page anchors are handled here for both modes: Lenis' own `anchors` option does not
 * cancel the native jump, and CSS `scroll-behavior: smooth` conflicts with ScrollTrigger
 * (it restores the computed value inline after every refresh).
 */
export function initSmoothScroll(): () => void {
  registerGsap();
  const reduce = prefersReducedMotion();
  const smoothWheel = !reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let lenis: Lenis | null = null;
  let tick: ((time: number) => void) | null = null;
  if (smoothWheel) {
    const instance = new Lenis({ autoRaf: false, lerp: 0.12, syncTouch: false });
    instance.on('scroll', ScrollTrigger.update);
    tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis = instance;
  }

  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
    const hash = link?.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    const focus = () => target.focus({ preventScroll: true });
    if (lenis) {
      lenis.scrollTo(target, { onComplete: focus });
    } else {
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      focus();
    }
    history.pushState(null, '', hash);
  };
  document.addEventListener('click', onClick);

  return () => {
    document.removeEventListener('click', onClick);
    if (tick) gsap.ticker.remove(tick);
    if (lenis) {
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    }
  };
}
