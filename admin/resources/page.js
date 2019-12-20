const { sort, timestamps } = require('./sort')

module.exports = {
  name: 'Page (with WYSIWIG)',
  sort: sort,
  properties: {
    ...timestamps,
    content: {
      type: 'richtext'
    }
  }
}
