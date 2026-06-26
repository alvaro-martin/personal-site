import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
  }, [themeId]);

  const toggleTheme = () => {
    setThemeId(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setLanguage = useCallback((lng) => {
    setLanguageState(lng);
    localStorage.setItem('language', lng);
  }, []);

  return (
    <ThemeContext.Provider value={{ id: themeId, setTheme: toggleTheme, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };