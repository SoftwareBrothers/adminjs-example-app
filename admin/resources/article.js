const AdminBro = require('admin-bro')

module.exports = {
  name: 'Article (customize field)',
  properties: {
    _id: { isVisible: false },
    content: {
      type: 'richtext',
    },
    photo: {
      isDisabled: true,
    },
    published: {
      label: 'Published (custom render)',
      components: {
        list: AdminBro.bundle('../components/article-in-list')
      }
    },
  }
}
