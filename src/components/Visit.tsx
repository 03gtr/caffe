import { business, hasContactInfo } from '../content/site';
import { useI18n } from '../i18n/I18nProvider';
import { Eyebrow } from './Accent';
import { ChatIcon, ClockIcon, CupIcon, PinIcon } from './Icons';
import './Visit.css';

/**
 * Contact / location / hours / ordering.
 * Renders real details ONLY when they exist in content/site.ts. While the page is a
 * concept, it shows a clearly labelled placeholder instead of invented business data.
 */
export function Visit() {
  const { t, accent } = useI18n();
  if (hasContactInfo(business)) {
    const wa = business.whatsapp ? `https://wa.me/${business.whatsapp}` : null;
    return (
      <section id="visit" className="visit section thermo" tabIndex={-1} aria-labelledby="visit-title">
        <div className="wrap visit__grid">
          <div>
            <Eyebrow label={t.visit.eyebrow} accent={accent.t.visit.eyebrow} />
            <h2 id="visit-title" className="section-title">
              {t.visit.title}
            </h2>
          </div>
          <dl className="visit__list">
            {business.address && (
              <div>
                <dt>
                  <PinIcon /> {t.visit.address}
                </dt>
                <dd>
                  {business.mapUrl ? (
                    <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                      {business.address}
                    </a>
                  ) : (
                    business.address
                  )}
                </dd>
              </div>
            )}
            {business.hours?.length ? (
              <div>
                <dt>
                  <ClockIcon /> {t.visit.hours}
                </dt>
                <dd>
                  {business.hours.map((h) => (
                    <span key={h.days} className="visit__hours">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
            {(wa || business.phone || business.orderUrl) && (
              <div>
                <dt>
                  <ChatIcon /> {t.visit.order}
                </dt>
                <dd className="visit__actions">
                  {business.orderUrl && (
                    <a className="btn btn--primary" href={business.orderUrl} target="_blank" rel="noopener noreferrer">
                      {t.visit.orderNow}
                    </a>
                  )}
                  {wa && (
                    <a className="btn btn--ghost" href={wa} target="_blank" rel="noopener noreferrer">
                      {t.visit.whatsapp}
                    </a>
                  )}
                  {business.phone && (
                    <a className="btn btn--ghost" href={`tel:${business.phone}`}>
                      {t.visit.call}
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>
    );
  }

  if (!business.isConcept) return null;

  const icons = [PinIcon, ClockIcon, ChatIcon, CupIcon];
  const slots = t.visit.slots.map((label, i) => ({ icon: icons[i], label }));

  return (
    <section id="visit" className="visit visit--concept section thermo" tabIndex={-1} aria-labelledby="visit-title">
      <div className="wrap">
        <div className="concept-slot">
          <Eyebrow label={t.visit.placeholderEyebrow} accent={accent.t.visit.placeholderEyebrow} />
          <h2 id="visit-title" className="concept-slot__title">
            {t.visit.placeholderTitle}
          </h2>
          <p className="concept-slot__text">{t.visit.placeholderText}</p>
          <ul className="concept-slot__list">
            {slots.map((s) => (
              <li key={s.label}>
                <s.icon />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
