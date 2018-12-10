const { BaseDecorator } = require('admin-bro')

class AdminDecorator extends BaseDecorator {
  constructor(params) {
    super(params)
    this.recordActions = ['show']
  }
}

module.exports = AdminDecorator
