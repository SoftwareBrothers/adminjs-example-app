const AdminJS = require('adminjs')
const { sort, timestamps } = require('./sort')

module.exports = {
  name: 'Complicated',
  sort,
  properties: {
    ...timestamps,
    'nestedDetails.age': {
      label: "Person age"
    },
    'nestedDetails.nested.extremelyNested': {
      label: "This nesting is crazy"
    }
  }
}
