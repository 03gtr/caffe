import { useRef } from 'react';
import { photos } from '../content/photos';
import { useI18n } from '../i18n/I18nProvider';
import { gsap, useMotion } from '../lib/motion';
import Noise from './vendor/react-bits/Noise';
import { ArrowIcon } from './Icons';
import { Photo } from './Photo';
import './Takeaway.css';

/** Closing, product-focused moment: "take it and go". No offers, no codes, no claims. */
export function Takeaway() {
  const { t, accent } = useI18n();
  const root = useRef<HTMLElement>(null);

  useMotion(root, (reduce) => {
    if (reduce) return;
    gsap.fromTo(
      '.takeaway__img',
      { scale: 1.18 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'center center', scrub: true }
      }
    );
    gsap.from('.takeaway__content > *', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.takeaway__content', start: 'top 80%', once: true }
    });
  });

  return (
    <section id="takeaway" ref={root} className="takeaway" tabIndex={-1} aria-labelledby="takeaway-title">
      <div className="takeaway__media">
        <Photo
          photo={photos.iceDrop}
          alt=""
          ratio={1.5}
          sizes="100vw"
          widths={[640, 960, 1280, 1600, 2000]}
          className="takeaway__img"
        />
        <div className="takeaway__grade" />
        <div className="takeaway__shade" />
        <Noise opacity={0.12} fps={0} blendMode="overlay" contrast={0.6} />
      </div>

      <div className="takeaway__content wrap">
        <p className="takeaway__accent" lang={accent.meta.htmlLang} dir={accent.meta.dir} aria-hidden="true">
          {accent.t.takeaway.title}
        </p>
        <h2 id="takeaway-title" className="takeaway__title">
          {t.takeaway.title}
        </h2>
        <p className="takeaway__text">{t.takeaway.text}</p>
        <div className="takeaway__actions">
          <a className="btn takeaway__btn" href="#menu">
            {t.takeaway.cta}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
