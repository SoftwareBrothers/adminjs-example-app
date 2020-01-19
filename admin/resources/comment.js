const AdminBro = require('admin-bro')
const { sort, timestamps } = require('./sort')

module.exports = {
  sort,
  properties: {
    ...timestamps,
    content: {
      type: 'textarea',
    },
  },
  actions: {
    show: {
      isAccessible: false,
    }
  }
}
