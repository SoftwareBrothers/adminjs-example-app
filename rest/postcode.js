const { BaseResource, BaseProperty, BaseRecord } = require('admin-bro')
const axios = require('axios')

class PostCode extends BaseResource {
  constructor(params) {
    super(params)
    this.totalCount = 0
    this._properties = [
      new BaseProperty({ path: 'name', type: 'string', isSortable: false }),
      new BaseProperty({ path: 'id', type: 'string', isId: true, isSortable: false }),
      new BaseProperty({ path: 'lat', type: 'string', isSortable: false }),
      new BaseProperty({ path: 'lng', type: 'string', isSortable: false }),
    ]
  }

  id() {
    return 'postcode'
  }

  name() {
    return 'PostCode'
  }

  databaseName() {
    return 'REST'
  }

  databaseType() {
    return 'rest'
  }

  properties() {
    return this._properties
  }

  property(path) {
    return this._properties.find(p => p.path === path)
  }

  count() {
    return this.totalCount
  }

  async find(query, { limit = 20, offset = 0, sort = {} }) {
    const rest = await axios.get('https://api.shopjam.com.au/api/v4/locations/postcodes', {
      params: { page: offset / limit + 1, per_page: limit },
    })
    this.totalCount = rest.data.meta.total_count
    return rest.data.results.map(obj => new BaseRecord(obj, this))
  }

  async findOne(id) {
    const rest = await axios.get(`https://api.shopjam.com.au/api/v4/locations/postcodes/${id}`)
    return new BaseRecord(rest.data.postcode, this)
  }
}

module.exports = PostCode