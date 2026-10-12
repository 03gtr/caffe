import { useRef, useState, type CSSProperties } from 'react';
import { flushSync } from 'react-dom';
import { drinks, type Drink } from '../content/drinks';
import { photos } from '../content/photos';
import { useI18n } from '../i18n/I18nProvider';
import { filterTemperature, isVisible, type MenuFilter } from '../lib/menu';
import { Flip, ScrollTrigger, gsap, prefersReducedMotion, registerGsap } from '../lib/motion';
import { Accent, Eyebrow } from './Accent';
import { TempIcon } from './Icons';
import { Photo } from './Photo';
import { TempSwitch } from './TempSwitch';
import './Menu.css';

function MenuCard({ drink, hidden }: { drink: Drink; hidden: boolean }) {
  const { t, accent } = useI18n();
  return (
    <li className={`menu-card menu-card--${drink.temp}`} data-flip-id={drink.id} hidden={hidden}>
      <div className="menu-card__media">
        <Photo photo={photos[drink.photo]} alt={t.drinks[drink.id].name} ratio={1.1} sizes="(min-width: 1100px) 22vw, (min-width: 700px) 30vw, 46vw" widths={[320, 480, 640]} />
      </div>
      <div className="menu-card__body">
        <span className={`temp-chip temp-chip--${drink.temp}`}>
          <TempIcon temp={drink.temp} />
          {t.temp[drink.temp]}
        </span>
        <h3 className="menu-card__name">{t.drinks[drink.id].name}</h3>
        <p className="menu-card__en">
          <Accent>{accent.t.drinks[drink.id].name}</Accent>
        </p>
        <p className="menu-card__desc">{t.drinks[drink.id].desc}</p>
      </div>
    </li>
  );
}

/**
 * Interactive hot / iced menu. Filtering is plain React state (works with no animation);
 * GSAP Flip only animates the re-layout when motion is allowed (audit §1A: Flip).
 */
export function Menu() {
  const { t, accent, num } = useI18n();
  const [filter, setFilter] = useState<MenuFilter>('all');
  const grid = useRef<HTMLUListElement>(null);
  const visibleCount = drinks.filter((d) => isVisible(d, filter)).length;

  const change = (next: MenuFilter) => {
    if (next === filter) return;
    const items = grid.current ? gsap.utils.toArray<HTMLElement>('.menu-card', grid.current) : [];
    const animate = items.length > 0 && !prefersReducedMotion();
    let state: Flip.FlipState | null = null;

    if (animate) {
      registerGsap();
      Flip.killFlipsOf(items, true);
      state = Flip.getState(items);
    }

    flushSync(() => setFilter(next));

    if (!state) {
      ScrollTrigger.refresh();
      return;
    }

    Flip.from(state, {
      duration: 0.7,
      ease: 'power3.inOut',
      absolute: true,
      scale: false,
      stagger: 0.015,
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: 'power2.out' }),
      onLeave: (els) => gsap.to(els, { opacity: 0, y: 16, duration: 0.3, ease: 'power1.in' }),
      onComplete: () => ScrollTrigger.refresh()
    });
  };

  return (
    <section
      id="menu"
      className="menu section thermo"
      tabIndex={-1}
      aria-labelledby="menu-title"
      style={{ '--mt': filterTemperature(filter) } as CSSProperties}
    >
      <div className="wrap">
        <header className="menu__head">
          <div>
            <Eyebrow label={t.menu.eyebrow} accent={accent.t.menu.eyebrow} />
            <h2 id="menu-title" className="section-title">
              {t.menu.title}
            </h2>
            <p className="lede">{t.menu.lede}</p>
          </div>
          <div className="menu__controls">
            <TempSwitch value={filter} onChange={change} />
            <p className="menu__count" aria-live="polite">
              {t.menu.count(filter, num(visibleCount))}
            </p>
          </div>
        </header>

        <ul ref={grid} className="menu__grid" aria-label={t.menu.listAria}>
          {drinks.map((d) => (
            <MenuCard key={d.id} drink={d} hidden={!isVisible(d, filter)} />
          ))}
        </ul>

        <p className="menu__note">{t.menu.note}</p>
      </div>
    </section>
  );
}
