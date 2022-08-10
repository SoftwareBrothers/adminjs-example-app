import * as Common from './common.json';
import * as Complicated from './complicated.json';
import * as Person from './person.json';

const language = process.env.LANGUAGE ?? 'en';
const enLocale = {
  language,
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
