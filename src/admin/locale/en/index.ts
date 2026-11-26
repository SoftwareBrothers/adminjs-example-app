import type { LocaleTranslations } from 'adminjs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const common = require('./common.json') as typeof import('./common.json');
const Complicated = require('./complicated.json') as typeof import('./complicated.json');
const components = require('./components.json') as typeof import('./components.json');
const pages = require('./pages.json') as typeof import('./pages.json');
const Person = require('./person.json') as typeof import('./person.json');

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
