import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'flowly-language';

function getValueByPath(source, path) {
  if (!source) return undefined;
  if (!path) return source;
  return path.split('.').reduce((acc, segment) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, segment)) {
      return acc[segment];
    }
    return undefined;
  }, source);
}

export function LanguageProvider({
  settingsByLocale = {},
  theme,
  defaultLocale = 'en-US',
  children,
}) {
  const availableLocales = useMemo(() => Object.keys(settingsByLocale), [settingsByLocale]);
  const fallbackLocale = useMemo(() => {
    return availableLocales.includes(defaultLocale)
      ? defaultLocale
      : availableLocales[0];
  }, [availableLocales, defaultLocale]);

  const [locale, setLocale] = useState(fallbackLocale);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized) return;
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (storedLocale && availableLocales.includes(storedLocale)) {
      setLocale(storedLocale);
    }
    setIsInitialized(true);
  }, [availableLocales, isInitialized]);

  useEffect(() => {
    if (typeof window === 'undefined' || !isInitialized || !locale) return;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, isInitialized]);

  const value = useMemo(() => {
    const localized = settingsByLocale[locale] || settingsByLocale[fallbackLocale] || {};
    const mergedSettings = {
      ...localized,
      theme,
    };

    const translations = localized.translations || {};

    const t = (path, fallback) => {
      const result = getValueByPath(translations, path);
      return result !== undefined ? result : fallback;
    };

    return {
      locale,
      setLocale,
      availableLocales,
      settings: mergedSettings,
      translations,
      t,
    };
  }, [locale, settingsByLocale, theme, fallbackLocale, availableLocales]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


