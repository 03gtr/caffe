import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import { photos } from '../content/photos';
import { gsap, prefersReducedMotion, useMotion } from '../lib/motion';
import { useI18n } from '../i18n/I18nProvider';
import { Photo } from './Photo';
import { IceIcon, SteamIcon } from './Icons';
import './SplitPour.css';

const clamp = (v: number) => Math.min(100, Math.max(0, v));
const RATIO = 1.25;
const SIZES = '(min-width: 980px) 46vw, 92vw';

/**
 * Split Pour — compares the hot and the iced version of a latte.
 * Value = share of the frame showing the HOT photo, measured from the inline-start edge
 * (right in Arabic/Kurdish, left in English/Turkish/French).
 * Works with mouse, touch (horizontal drag; vertical page scroll stays native), keyboard
 * (role="slider") and the two quick buttons. Server-rendered at 50/50 as the static fallback.
 */
export function SplitPour() {
  const { t, meta, accent, num } = useI18n();
  const rtl = meta.dir === 'rtl';
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const value = useRef(50);
  const tween = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);
  const dragId = useRef<number | null>(null);
  const [aria, setAria] = useState(50);

  const apply = useCallback((v: number) => {
    const next = clamp(v);
    value.current = next;
    stage.current?.style.setProperty('--split', `${next}%`);
    setAria(Math.round(next));
  }, []);

  const stop = () => {
    tween.current?.kill();
    tween.current = null;
  };

  const animateTo = useCallback(
    (target: number, duration = 0.7) => {
      stop();
      if (prefersReducedMotion()) {
        apply(target);
        return;
      }
      const proxy = { v: value.current };
      tween.current = gsap.to(proxy, { v: clamp(target), duration, ease: 'power3.out', onUpdate: () => apply(proxy.v) });
    },
    [apply]
  );

  // A single, gentle "it moves" hint shortly after load (full-motion tier only).
  useMotion(root, (reduce) => {
    if (reduce) return;
    const proxy = { v: 50 };
    const update = () => apply(proxy.v);
    tween.current = gsap
      .timeline({ delay: 1.4 })
      .to(proxy, { v: 63, duration: 0.9, ease: 'sine.inOut', onUpdate: update })
      .to(proxy, { v: 39, duration: 1.1, ease: 'sine.inOut', onUpdate: update })
      .to(proxy, { v: 50, duration: 0.9, ease: 'sine.inOut', onUpdate: update });
  });

  const shareAt = (clientX: number) => {
    const rect = stage.current!.getBoundingClientRect();
    return ((rtl ? rect.right - clientX : clientX - rect.left) / rect.width) * 100;
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || dragId.current !== null) return;
    dragId.current = e.pointerId;
    stage.current?.setPointerCapture(e.pointerId);
    animateTo(shareAt(e.clientX), 0.35);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragId.current !== e.pointerId) return;
    stop();
    apply(shareAt(e.clientX));
  };

  const onPointerEnd = (e: PointerEvent<HTMLDivElement>) => {
    if (dragId.current !== e.pointerId) return;
    dragId.current = null;
    if (stage.current?.hasPointerCapture(e.pointerId)) stage.current.releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const v = value.current;
    // The hot photo sits at the inline start, so the arrow pointing AWAY from it reveals more.
    const grow = rtl ? 'ArrowLeft' : 'ArrowRight';
    const shrink = rtl ? 'ArrowRight' : 'ArrowLeft';
    const next = (
      {
        [grow]: v + 5,
        ArrowUp: v + 5,
        [shrink]: v - 5,
        ArrowDown: v - 5,
        PageUp: v + 20,
        PageDown: v - 20,
        Home: 0,
        End: 100
      } as Record<string, number>
    )[e.key];
    if (next === undefined) return;
    e.preventDefault();
    stop();
    apply(next);
  };

  const hotText = num(aria);
  const icedText = num(100 - aria);

  return (
    <figure className="split-pour" ref={root}>
      <div
        ref={stage}
        className="split-pour__stage"
        data-dir={meta.dir}
        style={{ '--split': '50%' } as CSSProperties}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onLostPointerCapture={onPointerEnd}
      >
        <div className="split-pour__layer split-pour__layer--iced">
          <Photo photo={photos.icedLatte} alt={t.drinks['iced-latte'].name} ratio={RATIO} sizes={SIZES} priority />
        </div>
        <div className="split-pour__layer split-pour__layer--hot">
          <Photo photo={photos.hotLatte} alt={t.drinks['cardamom-latte'].name} ratio={RATIO} sizes={SIZES} priority />
        </div>

        <span className="split-pour__label split-pour__label--hot" aria-hidden="true">
          <SteamIcon /> {t.split.hot}{' '}
          <span className="split-pour__accent" lang={accent.meta.htmlLang}>
            {accent.t.split.hot}
          </span>
        </span>
        <span className="split-pour__label split-pour__label--iced" aria-hidden="true">
          <IceIcon /> {t.split.iced}{' '}
          <span className="split-pour__accent" lang={accent.meta.htmlLang}>
            {accent.t.split.iced}
          </span>
        </span>

        <div className="split-pour__divider" aria-hidden="true" />
        <div
          className="split-pour__handle"
          role="slider"
          tabIndex={0}
          aria-label={t.split.aria}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={aria}
          aria-valuetext={t.split.valueText(hotText, icedText)}
          onKeyDown={onKeyDown}
          onFocus={stop}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <figcaption className="split-pour__caption">
        <span>{t.split.caption}</span>
        <span className="split-pour__quick">
          <button type="button" className="chip-btn chip-btn--hot" onClick={() => animateTo(88)}>
            <SteamIcon /> {t.split.showHot}
          </button>
          <button type="button" className="chip-btn chip-btn--iced" onClick={() => animateTo(12)}>
            <IceIcon /> {t.split.showIced}
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
