const AdminBro = require('admin-bro')

module.exports = {
  name: 'Article (customize field)',
  properties: {
    _id: { isVisible: false },
    published: {
      label: 'Published (custom render)',
      render: {
        list: (property, record, h) => {
          const value = record.param(property.name())
          return value ? '<i class="fas fa-thumbs-up"></i>' : '<i class="fas fa-thumbs-down"></i>'
        }
      }
    }
  }
}

// 'user-ninja'