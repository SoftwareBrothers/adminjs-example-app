const AdminBro = require('admin-bro')

module.exports = {
  name: 'BlogPost (read only)',
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
      after: (data) => {
        return {
          meta: data.meta,
          records: [
            { params: {
              title: 'Some hardcoded data',
              content: 'Content',
              category: '',
            }, populated: {}, recordActions: []},
          ]
        }
      }
    },
    delete: {
      isAccessible: false,
    },
  },
}
