import type { LocaleTranslations } from 'adminjs';
import common from './common.json';
import components from './components.json';
import pages from './pages.json';

const deLocale: LocaleTranslations = {
  ...common,
  ...components,
  ...pages,
};

export default deLocale;
