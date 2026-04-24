"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LOCALE_COOKIE, type Locale, type Translation } from "./types";
import { normalizeLocale, translations } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function writeLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = translations[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLocaleCookie(next);
    try {
      window.localStorage.setItem(LOCALE_COOKIE, next);
    } catch {
      // ignore storage errors
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      locale,
      t: translations[locale],
      setLocale,
    };
  }, [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation(): Translation {
  return useLanguage().t;
}

export { normalizeLocale };
