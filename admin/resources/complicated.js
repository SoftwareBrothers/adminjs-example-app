const AdminBro = require('admin-bro')

const { PageBuilder } = AdminBro

module.exports = {
  name: 'Complicated',
  properties: {
    'nestedDetails.age': {
      label: "Person age"
    }
  }
}
