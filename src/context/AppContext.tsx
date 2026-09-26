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

const readPreference = <T extends string>(
  key: string,
  allowedValues: readonly T[],
  fallback: T,
): T => {
  try {
    const savedValue = window.localStorage.getItem(key) as T | null;
    return savedValue && allowedValues.includes(savedValue) ? savedValue : fallback;
  } catch {
    // Storage can be unavailable in private browsing or a locked-down webview.
    return fallback;
  }
};

const savePreference = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The preference still applies to this session when persistent storage fails.
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return readPreference('devjourney_theme', ['light', 'dark'], 'light');
  });

  const [language, setLanguage] = useState<LanguageMode>(() => {
    return readPreference('devjourney_language', ['en', 'ar'], 'en');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#fbf8ff' : '#081425');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);
  }, [language]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    savePreference('devjourney_theme', nextTheme);
    setTheme(nextTheme);
  };

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'ar' : 'en';
    savePreference('devjourney_language', nextLanguage);
    setLanguage(nextLanguage);
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
