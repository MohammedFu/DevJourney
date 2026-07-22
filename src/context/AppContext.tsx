import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type TranslationKeys } from '../data/translations';
import { themeTokens, type ThemeColorTokens } from '../theme/themeTokens';

export type ThemeMode = 'dark' | 'light';
export type LanguageMode = 'en' | 'ar';

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  language: LanguageMode;
  toggleLanguage: () => void;
  t: TranslationKeys;
  isRtl: boolean;
  themeTokens: ThemeColorTokens;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('devjourney_theme');
    return (saved as ThemeMode) || 'dark';
  });

  const [language, setLanguage] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem('devjourney_language');
    return (saved as LanguageMode) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('devjourney_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('devjourney_language', language);
    const root = document.documentElement;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = translations[language];
  const isRtl = language === 'ar';
  const currentThemeTokens = themeTokens[theme];

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        t,
        isRtl,
        themeTokens: currentThemeTokens,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
