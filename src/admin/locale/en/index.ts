import * as Common from './common.json';
import * as Complicated from './complicated.json';
import * as Person from './person.json';

const enLocale = {
  language: 'en',
  translations: {
    ...Common,
    resources: {
      Complicated,
      Person,
    },
  },
};

export default enLocale;
