const AdminBro = require('admin-bro')

const { PageBuilder } = AdminBro

module.exports = {
  name: 'User (custom actions example)',
  actions: {
    detailedStats: {
      actionType: ['resource'],
      icon: 'fas fa-signal',
      label: 'Resource statistics',
      component: AdminBro.require('../components/detailed-stats'),
      handler: async (request, response, data) => {
        return {true: 'ueas'}
      },
    },
    dontTouchThis: {
      actionType: ['record'],
      label: 'don\'t touch this!!!',
      icon: 'fas fa-exclamation',
      guard: 'You can setup guards before an action - just in case.',
      component: AdminBro.require('../components/dont-touch-this-action'),
      handler: async (request, response, data) => {
        const page = new PageBuilder({ admin: data._admin })
        page.addTextBox({
          columns: 6,
          content: '<img src="https://cathumor.net/wp-content/uploads/2015/04/cat-humor-dangerous-cat-is-dangerous.jpg">'
        })
        page.addTextBox({
          columns: 3,
          content: 'Didn\'t expected that?'
        })
        return page.toHTML()
      }
    }
  }
}

// 'user-ninja'