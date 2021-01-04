import AdminBro from 'admin-bro';

import { sort, timestamps } from './sort';

export default {
  id: 'Article2',
  name: 'Article (customize field)',
  sort,
  actions: {
    list: {
      isVisible: false,
    },
  },
  properties: {
    ...timestamps,
    _id: { isVisible: false },
    content: {
      type: 'richtext',
    },
    published: {
      label: 'Published (custom render)',
      components: {
        list: AdminBro.bundle('../components/article-in-list'),
      },
    },
  },
};
