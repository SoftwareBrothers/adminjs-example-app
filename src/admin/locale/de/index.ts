import type { Locale } from 'adminjs';
import common from './common.json';
import components from './components.json';
import pages from './pages.json';

const deLocale: Omit<Locale, 'availableLanguages'> = {
  language: 'de',
  translations: {
    ...common,
    ...components,
    ...pages,
  },
};

export default deLocale;
