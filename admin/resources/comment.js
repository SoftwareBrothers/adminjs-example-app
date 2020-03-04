const AdminBro = require('admin-bro')
const { sort, timestamps } = require('./sort')

module.exports = {
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
    }
  }
}
