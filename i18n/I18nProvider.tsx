"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "./index";

import { DEFAULT_LANGUAGE, getDirection, type Language } from "./config";

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  // Load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    const initialLanguage = savedLanguage ?? DEFAULT_LANGUAGE;

    setLanguage(initialLanguage);

    if (i18n.language !== initialLanguage) {
      i18n.changeLanguage(initialLanguage);
    }
  }, []);

  // Handle language + direction automatically
  useEffect(() => {
    const direction = getDirection(language);

    document.documentElement.lang = language;
    document.documentElement.dir = direction;

    localStorage.setItem("language", language);

    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  // Listen to i18next language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const newLanguage = lng as Language;

      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
