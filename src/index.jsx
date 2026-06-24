import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styles/ThemeContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import favicon from 'assets/me.webp';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from 'translations/es/global.json';
import global_en from 'translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
          <HelmetProvider>
            <Helmet>
              <link rel="shortcut icon" href={favicon} type="image/x-icon" />
              <title>Alvaro Martín | IoT & Full-Stack Developer</title>
              <meta name="description" content="Portafolio de Alvaro Martín — Desarrollador IoT, Full-Stack y Mecatrónico. Proyectos de domótica, hidroponía inteligente y más." />
              <meta name="robots" content="index, follow" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Alvaro Martín | IoT & Full-Stack Developer" />
              <meta property="og:description" content="Portafolio de Alvaro Martín — Desarrollador IoT, Full-Stack y Mecatrónico." />
              <meta property="og:image" content={favicon} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Alvaro Martín | IoT & Full-Stack Developer" />
              <meta name="twitter:description" content="Portafolio de Alvaro Martín — Desarrollador IoT, Full-Stack y Mecatrónico." />
              <meta name="twitter:image" content={favicon} />
            </Helmet>
            <App />
          </HelmetProvider>
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  )
};

root.render(<Index />);
