const { sort, timestamps } = require('./sort')

module.exports = {
  sort,
  actions: {
    show: {
      showInDrawer: true,
    },
    edit: {
      showInDrawer: true,
    },
    new: {
      showInDrawer: true,
    },
  },
  properties: {
    ...timestamps,
  }
}
