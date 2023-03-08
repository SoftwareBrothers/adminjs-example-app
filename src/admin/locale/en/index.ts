import type { LocaleTranslations } from 'adminjs';
import common from './common.json';
import Complicated from './complicated.json';
import components from './components.json';
import pages from './pages.json';
import Person from './person.json';

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
