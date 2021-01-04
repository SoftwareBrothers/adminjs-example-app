import { sort, timestamps } from './sort';

export default {
  sort,
  actions: {
    show: {
      showInDrawer: true,
    },
    edit: {
      showInDrawer: true,
    },
    new: {
      showInDrawer: true,
    },
  },
  properties: {
    ...timestamps,
  },
};
