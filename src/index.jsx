import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import LightTheme from 'styles/themes/light';
import DarkTheme from 'styles/themes/dark';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import favicon from 'assets/me.jpg';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import global_es from 'translations/es/global.json';
import global_en from 'translations/en/global.json';

i18next.init({
  interpolation: {escapeValue: false},
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
  const [theme, setTheme] = useState(LightTheme);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={{...theme, setTheme: () => {
          setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
        }}}>      
          <GlobalStyle />
          <HelmetProvider>
            <Helmet>
              <link rel='shortcut icon' href={favicon} type='image/x-icon' />
              <title>Alvaro Martín</title>
            </Helmet>
            <App />
          </HelmetProvider>
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  )
};

root.render(<Index />);