const { PageBuilder } = require('admin-bro')

module.exports = {
  name: 'User (custom actions example)',
  actions: {
    detailedStats: {
      actionType: ['resource'],
      icon: 'fas fa-signal',
      label: 'Resource statistics',
      handler: async (request, response, data) => {
        const page = new PageBuilder({ admin: data._admin })
        page.addBlock({
          title: 'Example statistic block',
          value: 29,
          icon: 'fas fa-newspaper fa-2x',
          columns: 6,
        })
        page.addBlock({
          title: 'Another example block',
          value: 412,
          icon: 'fas fa-ribbon fa-2x',
          columns: 3,
        })
        page.addBlock({
          title: 'Random stat',
          value: 11,
          icon: 'fas fa-certificate fa-2x',
          columns: 3,
        })
        page.addTextBox({
          content: 'As you can see we can add different widgets easily to any action.'
        })
        return page.toHTML()
      },
    },
    dontTouchThis: {
      actionType: ['record'],
      label: 'don\'t touch this!!!',
      icon: 'fas fa-exclamation',
      guard: {
        title: 'Example guard message',
        content: 'You can setup guards before an action - just in case.',
        button: 'Understood bro - Take me there',
      },
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