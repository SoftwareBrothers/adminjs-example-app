import type { Locale } from 'adminjs';
import * as Common from './common.json';
import * as Complicated from './complicated.json';
import * as Person from './person.json';

const enLocale: Omit<Locale, 'availableLanguages'> = {
  language: 'en',
  translations: {
    ...Common,
    resources: {
      Complicated,
      Person,
      products: {
        properties: {
          categoryId: 'Category',
        },
      },
    },
  },
};

export default enLocale;
