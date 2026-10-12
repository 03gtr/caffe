import { useEffect, useLayoutEffect } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { ConceptBanner, Nav } from './components/Nav';
import { Signature } from './components/Signature';
import { Story } from './components/Story';
import { Takeaway } from './components/Takeaway';
import { Visit } from './components/Visit';
import { useI18n } from './i18n/I18nProvider';
import { ScrollTrigger, registerGsap } from './lib/motion';
import { initSmoothScroll } from './lib/smoothScroll';

/**
 * The Thermostat: as the Signature section scrolls past (hot drinks → iced drinks),
 * the page-level --temp moves from 0 to 1. Only one custom property changes, quantised
 * to 1% steps, so the cost is a style recalculation — no full-page rendering effect.
 * Colour is not motion, so this also runs for reduced-motion users.
 */
function useThermostat() {
  useLayoutEffect(() => {
    registerGsap();
    const root = document.documentElement;
    let last = -1;
    const set = (t: number) => {
      const q = Math.round(t * 100) / 100;
      if (q === last) return;
      last = q;
      root.style.setProperty('--temp', String(q));
    };
    const trigger = ScrollTrigger.create({
      trigger: '#signature',
      start: 'top 55%',
      end: 'bottom 65%',
      onUpdate: (self) => set(self.progress),
      onRefresh: (self) => set(self.progress)
    });
    return () => {
      trigger.kill();
      root.style.removeProperty('--temp');
    };
  }, []);
}

export function App() {
  const { t } = useI18n();
  useThermostat();

  useEffect(() => {
    const stopSmoothScroll = initSmoothScroll();
    // Re-measure triggers once web fonts and images have settled the layout.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh).catch(() => undefined);
    window.addEventListener('load', refresh, { once: true });
    return () => {
      window.removeEventListener('load', refresh);
      stopSmoothScroll();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#menu">
        {t.skip}
      </a>
      <ConceptBanner />
      <Nav />
      <main id="main">
        <Hero />
        <Menu />
        <Signature />
        <Story />
        <Takeaway />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
