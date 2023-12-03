import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "universal-cookie";
import _ from "lodash";

import main_th from "locales/th/main.json";
import main_en from "locales/en/main.json";
import menu_th from "locales/th/menu.json";
import menu_en from "locales/en/menu.json";
import form_th from "locales/th/form.json";
import form_en from "locales/en/form.json";
import shape_th from "locales/th/shape.json";
import shape_en from "locales/en/shape.json";

const resources = {
  th: {
    main: main_th,
    menu: menu_th,
    form: form_th,
    shape: shape_th,
  },
  en: {
    main: main_en,
    menu: menu_en,
    form: form_en,
    shape: shape_en,
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
