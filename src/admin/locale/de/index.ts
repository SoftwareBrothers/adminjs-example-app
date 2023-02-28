import type { Locale } from 'adminjs';
import Components from './components.json';
import Common from './common.json';

const deLocale: Omit<Locale, 'availableLanguages'> = {
  language: 'de',
  translations: {
    ...Common,
    ...Components,
  },
};

export default deLocale;
