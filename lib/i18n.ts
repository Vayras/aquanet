import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en/translation.json';
import es from '@/locales/es/translation.json';

const resources = {
  en: {
    translation: en
  },
  'es-ES': {
    translation: es
  },
  'es': {
    translation: es
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true, // Enable debug mode to see i18n issues
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    supportedLngs: ['en', 'es', 'es-ES'],
    load: 'languageOnly' // This will load 'es' for 'es-ES', 'es-MX', etc.
  });

export default i18n;
