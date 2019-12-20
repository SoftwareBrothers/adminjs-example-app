const AdminBro = require('admin-bro')
const { sort, timestamps } = require('./sort')

module.exports = {
  name: 'Complicated',
  sort,
  properties: {
    ...timestamps,
    'nestedDetails.age': {
      label: "Person age"
    }
  }
}
