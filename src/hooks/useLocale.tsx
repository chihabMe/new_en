"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Locale,
  getLocaleFromPathname,
  getTranslation,
  t as translateFn,
} from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  translations: ReturnType<typeof getTranslation>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const translations = getTranslation(locale);

  const t = (key: string, replacements?: Record<string, string | number>) => {
    return translateFn(key, locale, replacements);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, translations }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
