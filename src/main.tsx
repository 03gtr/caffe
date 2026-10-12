import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/fonts.css';
import 'lenis/dist/lenis.css';
import './styles/tokens.css';
import './styles/base.css';
import { App } from './App';
import { I18nProvider } from './i18n/I18nProvider';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>
);

// The production build is prerendered (scripts/prerender.mjs), so hydrate when markup exists.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
