"use client";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import { LANGUAGE_CONFIG, type Language } from "@/i18n/config";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const nextLanguage: Language = currentLanguage === "en" ? "ar" : "en";

  const handleChangeLanguage = async () => {
    await i18n.changeLanguage(nextLanguage);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleChangeLanguage}
      className="font-semibold"
    >
      {LANGUAGE_CONFIG[nextLanguage].nativeName}
    </Button>
  );
}
