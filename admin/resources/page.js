const { PageBuilder } = require('admin-bro')

module.exports = {
  name: 'Page (with WYSIWIG)',
  properties: {
    content: {
      type: 'richtext'
    }
  }
}

// 'user-ninja'