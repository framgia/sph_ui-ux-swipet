import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './assets/locales/en/translation.json';
import translationJP from './assets/locales/jp/translation.json';
import testimonialsEN from './assets/locales/en/testimonials.json';
import testimonialsJP from './assets/locales/jp/testimonials.json';
import informationsEN from './assets/locales/en/informations.json';
import informationsJP from './assets/locales/jp/informations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: translationEN,
        testimonials: testimonialsEN,
        informations: informationsEN,
      },
      jp: {
        translations: translationJP,
        testimonials: testimonialsJP,
        informations: informationsJP,
      },
    },
    fallbackLng: 'en',
    debug: false,
    // have a common namespace used around the full app
    ns: ['translations', 'testimonials', 'informations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
