import { useI18n } from '../i18n/I18nProvider';
import Noise from './vendor/react-bits/Noise';
import { ArrowIcon } from './Icons';
import { SplitPour } from './SplitPour';
import { SteamMark } from './SteamMark';
import './Hero.css';

/** Word split for a CSS entrance: words stay intact, letters are never separated (Arabic-safe). */
function Words({ text, offset = 0 }: { text: string; offset?: number }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="hero__word" style={{ ['--i' as string]: i + offset }}>
            {w}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const { t, locale } = useI18n();
  const line1Words = t.hero.line1.split(' ').length;
  return (
    <section className="hero thermo" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <Noise opacity={0.07} fps={0} blendMode="multiply" contrast={0.5} className="hero__grain" />
      <div className="hero__inner wrap">
        <div className="hero__copy">
          <SteamMark />
          {/* key: replay the word entrance when the language changes */}
          <h1 id="hero-title" className="hero__title" key={locale}>
            <span className="hero__line hero__line--warm">
              <Words text={t.hero.line1} />
            </span>
            <span className="hero__line hero__line--cool">
              <Words text={t.hero.line2} offset={line1Words} />
            </span>
          </h1>
          <p className="hero__lede">{t.hero.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#menu">
              {t.hero.ctaMenu}
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="#signature">
              {t.hero.ctaSignature}
            </a>
          </div>
          <ul className="hero__facts" aria-label={t.hero.factsAria}>
            {t.hero.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <SplitPour />
        </div>
      </div>
    </section>
  );
}
