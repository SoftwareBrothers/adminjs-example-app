import type { LocaleTranslations } from 'adminjs';

import common from './common.json' assert { type: 'json' };
import Complicated from './complicated.json' assert { type: 'json' };
import components from './components.json' assert { type: 'json' };
import pages from './pages.json' assert { type: 'json' };
import Person from './person.json' assert { type: 'json' };

const enLocale: LocaleTranslations = {
  ...common,
  ...components,
  ...pages,
  resources: {
    Complicated,
    Person,
    products: {
      properties: {
        categoryId: 'Category',
      },
    },
  },
};

export default enLocale;
