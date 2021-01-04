import { sort, timestamps } from './sort';

export default {
  sort,
  properties: {
    ...timestamps,
    content: {
      type: 'textarea',
      isTitle: true,
    },
  },
  actions: {
    show: {
      isAccessible: false,
    },
    edit: {
      showInDrawer: true,
    },
  },
};
