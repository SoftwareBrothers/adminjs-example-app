import { sort, timestamps } from './sort';

export default {
  name: 'BlogPost (read only)',
  sort,
  properties: {
    ...timestamps,
  },
  actions: {
    show: {
      isAccessible: false,
    },
    new: {
      isAccessible: false,
    },
    edit: {
      isAccessible: false,
    },
    list: {
      showFilter: false,
      after: (data) => ({
        meta: data.meta,
        records: [
          {
            params: {
              title: 'Some hardcoded data',
              content: 'Content',
              category: '',
            },
            populated: {},
            recordActions: [],
            bulkActions: [],
          },
        ],
      }),
    },
    delete: {
      isAccessible: false,
    },
  },
};
