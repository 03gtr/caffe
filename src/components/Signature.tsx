import { useEffect, useRef, useState } from 'react';
import { signatureDrinks, type SignatureDrink } from '../content/drinks';
import { photos } from '../content/photos';
import { useI18n } from '../i18n/I18nProvider';
import { gsap, splitWords, useMotion } from '../lib/motion';
import SloshGauge from './vendor/react-bits/SloshGauge';
import { Accent, Eyebrow } from './Accent';
import { TempIcon } from './Icons';
import { Photo } from './Photo';
import './Signature.css';

const LIQUID = { hot: '#c98a4b', iced: '#8cc4dc' } as const;

function Meter({ label, value, temp, active }: { label: string; value: number; temp: SignatureDrink['temp']; active: boolean }) {
  const { t, num } = useI18n();
  return (
    <div className="meter">
      {/* The liquid gauge is a visualisation; the real value is the text beside it. */}
      <div aria-hidden="true">
        <SloshGauge
          value={active ? value : 0}
          showValue={false}
          liquidColor={LIQUID[temp]}
          glassColor="rgba(42, 26, 18, 0.07)"
          width={44}
          height={96}
          radius={14}
          ticks={4}
          viscosity={0.35}
          tilt={0.6}
          ariaLabel={label}
        />
      </div>
      <p className="meter__text">
        <span>{label}</span>
        <strong>{num(value)}</strong>
        <span className="meter__scale">{t.signature.scale(num(100))}</span>
      </p>
    </div>
  );
}

function SignatureCard({ drink, index }: { drink: SignatureDrink; index: number }) {
  const { t, accent, num } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  // Fill the liquid meters the first time the card is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el || active) return;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -25% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  return (
    <article ref={ref} className={`sig-card sig-card--${drink.temp}`} aria-labelledby={`sig-${drink.id}`}>
      <div className="sig-card__media">
        <Photo
          photo={photos[drink.photo]}
          alt={t.drinks[drink.id].name}
          ratio={1.25}
          sizes="(min-width: 980px) 48vw, 92vw"
          widths={[480, 720, 960, 1280]}
          className="sig-card__img"
        />
        <span className="sig-card__index" aria-hidden="true">
          {num(index + 1)}
        </span>
      </div>
      <div className="sig-card__body">
        <span className={`temp-chip temp-chip--${drink.temp}`}>
          <TempIcon temp={drink.temp} />
          {t.temp[drink.temp]}
        </span>
        <h3 id={`sig-${drink.id}`} className="sig-card__name">
          {t.drinks[drink.id].name}
        </h3>
        <p className="sig-card__en">
          <Accent>{accent.t.drinks[drink.id].name}</Accent>
        </p>
        <p className="sig-card__story">{t.signature.stories[drink.id]}</p>
        <div className="sig-card__profile">
          <Meter label={t.signature.strength} value={drink.profile.strength} temp={drink.temp} active={active} />
          <Meter label={t.signature.sweetness} value={drink.profile.sweetness} temp={drink.temp} active={active} />
          <p className="sig-card__profile-note">{t.signature.profileNote}</p>
        </div>
      </div>
    </article>
  );
}

export function Signature() {
  const { t, accent, locale } = useI18n();
  const root = useRef<HTMLElement>(null);

  useMotion(root, (reduce) => {
    if (reduce) return;
    const title = root.current?.querySelector('.signature__title');
    if (title) {
      const split = splitWords(title);
      gsap.from(split.words, {
        yPercent: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: title, start: 'top 85%', once: true }
      });
    }

    // Restrained parallax inside each photo frame.
    gsap.utils.toArray<HTMLElement>('.sig-card__img', root.current).forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('.sig-card__body', root.current).forEach((body) => {
      gsap.from(body.children, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.07,
        scrollTrigger: { trigger: body, start: 'top 80%', once: true }
      });
    });
    // Re-run on language change: the split heading is re-created (see key below).
  }, [locale]);

  return (
    <section id="signature" ref={root} className="signature section" tabIndex={-1} aria-labelledby="signature-title">
      <div className="wrap">
        <header className="signature__head">
          <Eyebrow label={t.signature.eyebrow} accent={accent.t.signature.eyebrow} />
          {/* key: SplitText rewrites this node, so React gets a fresh one per language */}
          <h2 id="signature-title" className="section-title signature__title" key={locale}>
            {t.signature.title}
          </h2>
          <p className="lede">{t.signature.lede}</p>
        </header>

        <div className="signature__list">
          {signatureDrinks.map((d, i) => (
            <SignatureCard key={d.id} drink={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
