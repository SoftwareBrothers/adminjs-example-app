const { PageBuilder } = require('admin-bro')

module.exports = {
  name: 'Page (with WYSIWIG)',
  sort: {
    direction: 'desc',
  },
  properties: {
    content: {
      type: 'richtext'
    }
  }
}
