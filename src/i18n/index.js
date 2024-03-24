import i18n from 'i18next';
import { initReactI18next, reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import en from './en.json';
import zh_hk from './zh_hk.json';

const resources = {
  en,
  zh_hk,
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
