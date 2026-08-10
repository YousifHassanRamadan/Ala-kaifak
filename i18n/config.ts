export const SUPPORTED_LANGUAGES = ["en", "ar"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_CONFIG: Record<
  Language,
  {
    name: string;
    nativeName: string;
    direction: "ltr" | "rtl";
  }
> = {
  en: {
    name: "English",
    nativeName: "English",
    direction: "ltr",
  },

  ar: {
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl",
  },
};

export function getDirection(language: Language) {
  return LANGUAGE_CONFIG[language].direction;
}
