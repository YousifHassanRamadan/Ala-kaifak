import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        common: en,
      },

      ar: {
        common: ar,
      },
    },

    lng: DEFAULT_LANGUAGE,

    fallbackLng: DEFAULT_LANGUAGE,

    supportedLngs: SUPPORTED_LANGUAGES,

    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
