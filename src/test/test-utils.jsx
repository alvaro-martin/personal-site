import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { ThemeProvider } from 'styles/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import global_es from 'translations/es/global.json';
import global_en from 'translations/en/global.json';
import global_de from 'translations/de/global.json';
import global_pt from 'translations/pt-BR/global.json';

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: { global: global_es },
    en: { global: global_en },
    de: { global: global_de },
    "pt-BR": { global: global_pt },
  },
});

const AllProviders = ({ children }) => (
  <I18nextProvider i18n={i18next}>
    <ThemeProvider>
      <HelmetProvider>{children}</HelmetProvider>
    </ThemeProvider>
  </I18nextProvider>
);

const renderWithProviders = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { renderWithProviders, i18next };
