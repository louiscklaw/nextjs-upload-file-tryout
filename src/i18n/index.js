import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import zh_hk from './zh_hk.json';

const resources = {
  en,
  zh_hk,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh_hk',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
