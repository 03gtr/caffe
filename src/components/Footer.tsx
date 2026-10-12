import { photoPage, photos } from '../content/photos';
import iqGroupLogo from '../assets/iq-group-logo.webp?inline';
import { business, poweredBy } from '../content/site';
import { useI18n } from '../i18n/I18nProvider';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();
  const credits = Object.values(photos);
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <p className="footer__word" lang="en">
            STEAM <i>&amp;</i> FROST
          </p>
          <p className="footer__ar">
            <bdi lang="ar">{business.name.ar}</bdi>
          </p>
        </div>

        {business.isConcept && (
          <p className="footer__notice">{t.footer.notice}</p>
        )}

        <details className="footer__credits">
          <summary>{t.footer.creditsSummary}</summary>
          <p>
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
              {t.footer.photosLead}
            </a>
          </p>
          <ul>
            {credits.map((p) => (
              <li key={p.id}>
                <a href={photoPage(p)} target="_blank" rel="noopener noreferrer" lang="en">
                  {p.author}
                </a>
              </li>
            ))}
          </ul>
          <p>{t.footer.tech}</p>
        </details>

        <PoweredBy />
      </div>
    </footer>
  );
}

function PoweredBy() {
  const mark = (
    <>
      <img src={iqGroupLogo} alt="" width={40} height={40} decoding="async" />
      <span className="footer__powered-name">{poweredBy.name}</span>
    </>
  );
  return (
    <p className="footer__powered" lang="en" dir="ltr">
      <span>Powered by</span>
      {poweredBy.url ? (
        <a href={poweredBy.url} target="_blank" rel="noopener">
          {mark}
        </a>
      ) : (
        <span className="footer__powered-mark">{mark}</span>
      )}
    </p>
  );
}
