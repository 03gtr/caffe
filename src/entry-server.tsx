import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { I18nProvider } from './i18n/I18nProvider';

/**
 * Static HTML for the prerender step: the page is complete and readable before any JS runs.
 * React emits <link rel="preload"> hints for the high-priority hero photos at the start
 * of the string; scripts/prerender.mjs moves them into <head>.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <I18nProvider>
        <App />
      </I18nProvider>
    </StrictMode>
  );
}
