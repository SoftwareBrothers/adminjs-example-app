import type { LocaleTranslations } from 'adminjs';

import common from './common.json' assert { type: 'json' };
import components from './components.json' assert { type: 'json' };
import pages from './pages.json' assert { type: 'json' };

const deLocale: LocaleTranslations = {
  ...common,
  ...components,
  ...pages,
};

export default deLocale;
