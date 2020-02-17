const AdminBro = require('admin-bro')
const { sort, timestamps } = require('./sort')

module.exports = {
  id: 'Article2',
  name: 'Article (customize field)',
  sort,
  properties: {
    ...timestamps,
    _id: { isVisible: false },
    content: {
      type: 'richtext',
    },
    published: {
      label: 'Published (custom render)',
      components: {
        list: AdminBro.bundle('../components/article-in-list')
      }
    },
  }
}
