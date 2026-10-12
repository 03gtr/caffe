import type { ReactNode } from 'react';
import { useI18n } from '../i18n/I18nProvider';

/** Text in the accent language (English on RTL pages, Arabic on LTR pages), correctly tagged for bidi. */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  const { accent } = useI18n();
  return (
    <span className={className} lang={accent.meta.htmlLang} dir={accent.meta.dir}>
      {children}
    </span>
  );
}

/** Section eyebrow: the label in the page language plus a small accent-language echo. */
export function Eyebrow({ label, accent }: { label: string; accent: string }) {
  return (
    <p className="eyebrow">
      {label} <Accent className="eyebrow__accent">{accent}</Accent>
    </p>
  );
}
