const { BaseDecorator } = require('admin-bro')

class PositionDecorator extends BaseDecorator {
  constructor(params) {
    super(params)
    this.resourceName = 'Position'
    this.listProperties = ['name', 'place', 'rate']
    this.parent = {
      name: 'Career',
      icon: 'fas fa-briefcase',
    }
  } 
}

module.exports = PositionDecorator