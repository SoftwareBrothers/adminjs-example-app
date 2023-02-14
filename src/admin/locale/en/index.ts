import Common from './common.json';
import Complicated from './complicated.json';
import Person from './person.json';

const enLocale = {
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
