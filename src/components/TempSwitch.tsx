import { useRef, type CSSProperties, type KeyboardEvent } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { MENU_FILTERS, type MenuFilter } from '../lib/menu';
import { IceIcon, SteamIcon } from './Icons';
import './TempSwitch.css';

interface TempSwitchProps {
  value: MenuFilter;
  onChange: (value: MenuFilter) => void;
}

/**
 * Hot / Iced switch — a native-semantics radiogroup with roving tabindex.
 * Arrow keys follow the visual order: ← is "next" in RTL, → is "next" in LTR.
 */
export function TempSwitch({ value, onChange }: TempSwitchProps) {
  const { t, meta } = useI18n();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const index = Math.max(0, MENU_FILTERS.indexOf(value));

  const move = (to: number) => {
    const n = MENU_FILTERS.length;
    const next = (to + n) % n;
    onChange(MENU_FILTERS[next]);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const forward = meta.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const back = meta.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    const step = ({ [forward]: 1, ArrowDown: 1, [back]: -1, ArrowUp: -1 } as Record<string, number>)[e.key];
    if (step !== undefined) {
      e.preventDefault();
      move(index + step);
    } else if (e.key === 'Home') {
      e.preventDefault();
      move(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      move(MENU_FILTERS.length - 1);
    }
  };

  return (
    <div
      className="temp-switch"
      role="radiogroup"
      aria-label={t.menu.switchAria}
      data-value={value}
      style={{ '--idx': index, '--count': MENU_FILTERS.length } as CSSProperties}
      onKeyDown={onKeyDown}
    >
      <span className="temp-switch__thumb" aria-hidden="true" />
      {MENU_FILTERS.map((f, i) => (
        <button
          key={f}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="button"
          role="radio"
          aria-checked={value === f}
          tabIndex={value === f ? 0 : -1}
          className="temp-switch__option"
          onClick={() => onChange(f)}
        >
          {f === 'hot' ? <SteamIcon /> : f === 'iced' ? <IceIcon /> : null}
          {t.menu.filters[f]}
        </button>
      ))}
    </div>
  );
}
