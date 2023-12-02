import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "universal-cookie";
import _ from "lodash";
import form_th from "locales/th/form.json";
import form_en from "locales/en/form.json";

const resources = {
  th: {
    form: form_th,
  },
  en: {
    form: form_en,
  },
};

//get language form cookies
const cookies = new Cookies();
const language = _.isEmpty(cookies.get("language"))
  ? "th"
  : cookies.get("language");

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    whitelist: ["th", "en"],
    lng: language,
    fallbackLng: language,
    ns: ["translation"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
  });

export default i18next;
