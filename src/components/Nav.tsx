import { business } from '../content/site';
import { useI18n } from '../i18n/I18nProvider';
import { LOCALES, LOCALE_META, isLocale } from '../i18n/types';
import { ArrowIcon, GlobeIcon } from './Icons';
import './Nav.css';

export function ConceptBanner() {
  const { t } = useI18n();
  if (!business.isConcept) return null;
  return (
    <aside className="concept-banner" aria-label={t.banner.aria}>
      <strong>{t.banner.strong}</strong>
      <span className="concept-banner__long">{t.banner.long}</span>
      <span className="concept-banner__short">{t.banner.short}</span>
    </aside>
  );
}

/**
 * Language picker: a native <select>, so phones show their own picker
 * (large, accessible, thumb-friendly) and it works with no extra script.
 */
function LanguageSwitcher() {
  const { locale, t, setLocale } = useI18n();
  return (
    <label className="lang-switch">
      <GlobeIcon className="lang-switch__icon" />
      <select
        className="lang-switch__select"
        aria-label={t.nav.language}
        value={locale}
        onChange={(e) => {
          if (isLocale(e.target.value)) setLocale(e.target.value);
        }}
      >
        {LOCALES.map((l) => (
          <option key={l} value={l} lang={LOCALE_META[l].htmlLang}>
            {LOCALE_META[l].label}
          </option>
        ))}
      </select>
      <span className="lang-switch__code" aria-hidden="true">
        {locale.toUpperCase()}
      </span>
    </label>
  );
}

export function Nav() {
  const { t } = useI18n();
  const links = [
    { href: '#menu', label: t.nav.menu },
    { href: '#signature', label: t.nav.signature },
    { href: '#story', label: t.nav.story }
  ];

  return (
    <header className="nav">
      <nav className="nav__inner wrap" aria-label={t.nav.aria}>
        <a className="nav__brand" href="#top" aria-label={t.nav.home}>
          <svg className="nav__glyph" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
            <path d="M14 6c-3 4 3 6 0 10M20 4c-3 4 3 6 0 10M26 6c-3 4 3 6 0 10" />
            <path d="M9 20h22l-2.4 13.2A3 3 0 0 1 25.7 36H14.3a3 3 0 0 1-2.9-2.8z" />
          </svg>
          <span lang="en" dir="ltr" className="nav__word">
            STEAM <i>&amp;</i> FROST
          </span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav__end">
          {/* Thermostat readout: follows the page --temp. Purely decorative. */}
          <span className="thermo-meter" aria-hidden="true">
            <span className="thermo-meter__label">{t.nav.hot}</span>
            <span className="thermo-meter__track">
              <span className="thermo-meter__dot" />
            </span>
            <span className="thermo-meter__label">{t.nav.cold}</span>
          </span>
          <LanguageSwitcher />
          <a className="btn btn--primary nav__cta" href="#menu">
            <span className="nav__cta-label">{t.nav.cta}</span>
            <ArrowIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
