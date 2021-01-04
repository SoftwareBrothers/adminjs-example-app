import { sort, timestamps } from './sort';

export default {
  name: 'Page (with WYSIWIG)',
  sort,
  properties: {
    ...timestamps,
    content: {
      type: 'richtext',
    },
  },
};
