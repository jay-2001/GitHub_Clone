import i18n from 'i18next';

import en from './en.json';
import es from './es.json';

export const resources = {
  en,
  es,
};

export const defaultNS = 'translations';

i18n.init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS,

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: true,
  },
});

export default i18n;
