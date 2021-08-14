import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const languages = ["en", "vi", "de"];
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    defaultNS: "translation",
    ns: ["translation", "otherNamespace"],
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
