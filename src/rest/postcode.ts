import { BaseResource, BaseProperty, BaseRecord } from 'admin-bro';
import axios from 'axios';

class PostCode extends BaseResource {
  private _properties: BaseProperty[];
  private totalCount: number;

  constructor(params) {
    super(params);

    this.totalCount = 0;
    this._properties = [
      new BaseProperty({ path: 'name', type: 'string', isSortable: false }),
      new BaseProperty({
        path: 'id',
        type: 'string',
        isId: true,
        isSortable: false,
      }),
      new BaseProperty({ path: 'lat', type: 'string', isSortable: false }),
      new BaseProperty({ path: 'lng', type: 'string', isSortable: false }),
    ];
  }

  public id() {
    return 'postcode';
  }

  public name() {
    return 'PostCode';
  }

  public databaseName() {
    return 'REST';
  }

  public databaseType() {
    return 'rest';
  }

  public properties() {
    return this._properties;
  }

  public property(path) {
    return this._properties.find((p) => p.path === path);
  }

  public async count() {
    return this.totalCount;
  }

  public async find(_query, { limit = 20, offset = 0 }) {
    const rest = await axios.get(
      'https://api.shopjam.com.au/api/v4/locations/postcodes',
      {
        params: { page: offset / limit + 1, per_page: limit },
      },
    );
    this.totalCount = rest.data.meta.total_count;
    return rest.data.results.map((obj) => new BaseRecord(obj, this));
  }

  public async findOne(id) {
    const rest = await axios.get(
      `https://api.shopjam.com.au/api/v4/locations/postcodes/${id}`,
    );
    return new BaseRecord(rest.data.postcode, this);
  }
}

export default PostCode;
