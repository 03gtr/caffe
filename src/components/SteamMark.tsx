import { business } from '../content/site';
import { useI18n } from '../i18n/I18nProvider';
import './SteamMark.css';

const STEAM_PATHS = [
  'M118 150 C 98 122, 138 102, 118 78 S 96 34, 122 2',
  'M180 150 C 160 118, 202 96, 180 70 S 156 28, 184 0',
  'M242 150 C 222 122, 262 102, 242 78 S 220 34, 246 2'
];

/**
 * Steam Identity: three steam curls draw upward (CSS stroke-dashoffset on
 * pathLength="1" — no JS, no measurement, works if scripts fail) and the
 * concept wordmark condenses out of the mist.
 *
 * Only the LATIN wordmark is animated letter by letter. Arabic text is never
 * split into letters (it would break the joined script).
 */
export function SteamMark() {
  const { t } = useI18n();
  const word = business.name.en;
  return (
    <div className="steam-mark">
      <svg className="steam-mark__steam" viewBox="0 0 360 150" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="steam-fade" x1="0" y1="1" x2="0" y2="0">
            <stop className="steam-mark__stop-a" offset="0" />
            <stop className="steam-mark__stop-b" offset="1" />
          </linearGradient>
        </defs>
        {STEAM_PATHS.map((d, i) => (
          <path key={d} d={d} pathLength={1} style={{ ['--i' as string]: i }} />
        ))}
      </svg>

      <p className="steam-mark__word" lang="en" dir="ltr">
        <span className="visually-hidden">{word}</span>
        <span className="steam-mark__letters" aria-hidden="true">
          {[...word].map((ch, i) => (
            <span key={i} className={ch === '&' ? 'amp' : undefined} style={{ ['--i' as string]: i }}>
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </span>
      </p>
      <p className="steam-mark__tag">
        <bdi lang="ar">{business.name.ar}</bdi> <span aria-hidden="true">·</span> {t.hero.tag}
      </p>
    </div>
  );
}
