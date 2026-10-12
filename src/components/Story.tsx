import { useRef } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { gsap, splitWords, useMotion } from '../lib/motion';
import { Accent } from './Accent';
import { CupIcon, HandIcon, SteamIcon } from './Icons';
import './Story.css';

const STEP_ICONS = [CupIcon, SteamIcon, HandIcon];

export function Story() {
  const { t, accent, num, locale } = useI18n();
  const root = useRef<HTMLElement>(null);

  useMotion(root, (reduce) => {
    if (reduce) return;
    const quote = root.current?.querySelector('.story__quote');
    if (quote) {
      const split = splitWords(quote);
      // Words brighten as the quote scrolls through the viewport (opacity only — cheap).
      // The dim state starts at 0.5 so even unrevealed words keep >= 3:1 large-text contrast.
      gsap.fromTo(
        split.words,
        { opacity: 0.5 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: { trigger: quote, start: 'top 80%', end: 'bottom 45%', scrub: true }
        }
      );
    }
    gsap.from('.story__step', {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '.story__steps', start: 'top 82%', once: true }
    });
  }, [locale]);

  return (
    <section id="story" ref={root} className="story section" tabIndex={-1} aria-labelledby="story-title">
      <div className="wrap">
        <p className="eyebrow">
          {t.story.eyebrow} <Accent className="eyebrow__accent">{accent.t.story.eyebrow}</Accent>
        </p>
        <h2 id="story-title" className="visually-hidden">
          {t.story.srTitle}
        </h2>
        {/* key: SplitText rewrites this node, so React gets a fresh one per language */}
        <p className="story__quote" key={locale}>
          {t.story.quote}
        </p>

        <ol className="story__steps">
          {t.story.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={i} className="story__step">
                <span className="story__num" aria-hidden="true">
                  {num(`0${i + 1}`)}
                </span>
                <Icon className="story__icon" />
                <h3 className="story__title">{s.title}</h3>
                <p className="story__text">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
