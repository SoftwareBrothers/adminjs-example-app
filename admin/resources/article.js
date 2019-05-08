const AdminBro = require('admin-bro')

module.exports = {
  name: 'Article (customize field)',
  properties: {
    _id: { isVisible: false },
    published: {
      label: 'Published (custom render)',
      components: {
        list: AdminBro.require('../components/article-in-list')
      }
    }
  }
}
