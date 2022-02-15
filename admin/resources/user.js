const AdminJS = require('adminjs')
const { sort, timestamps } = require('./sort')

/**
 * @type {AdminJS.ResourceOptions}
 */
module.exports = {
  name: 'User (custom actions example)',
  sort,
  properties: {
    ...timestamps,
    'auth.password': {
      type: 'password'
    }
  },
  actions: {
    detailedStats: {
      actionType: 'resource',
      icon: 'Apps',
      label: 'Resource statistics',
      component: AdminJS.bundle('../components/detailed-stats'),
      handler: async (request, response, data) => {
        return {true: 'ueas'}
      },
      showInDrawer: true,
    },
    edit: {
      before: async (request, response, context) => {
        if (request.method === "post") {
          throw new AdminJS.ValidationError({
            email: {
              message: 'Has to be filled',
            }
          })
        }
        return request
      },
    },
    dontTouchThis: {
      actionType: 'record',
      label: 'don\'t touch this!!!',
      icon: 'Exit',
      guard: 'You can setup guards before an action - just in case.',
      component: AdminJS.bundle('../components/dont-touch-this-action'),
      handler: async (request, response, data) => {
        return {
          record: data.record.toJSON()
        }
      }
    }
  }
}

// 'user-ninja'