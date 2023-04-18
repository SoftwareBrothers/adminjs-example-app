import AdminJS, { BaseResource, BaseProperty, BaseRecord, ResourceOptions } from 'adminjs';
import axios from 'axios';

import { menu } from '../../admin/index.js';

export class CryptoDatabase extends BaseResource {
  public totalCount = 0;

  private readonly _properties: BaseProperty[] = [
    new BaseProperty({
      path: 'website_slug',
      type: 'string',
      isId: true,
      isSortable: false,
      position: 1,
    }),
    new BaseProperty({
      path: 'name',
      type: 'string',
      isSortable: false,
      position: 2,
    }),
    new BaseProperty({
      path: 'symbol',
      type: 'string',
      isSortable: false,
      position: 3,
    }),
    new BaseProperty({
      path: 'quotes.USD.price',
      type: 'string',
      isSortable: false,
      position: 4,
    }),
    new BaseProperty({
      path: 'quotes.USD.percent_change_1h',
      type: 'string',
      isSortable: false,
      position: 5,
    }),
    new BaseProperty({
      path: 'quotes.USD.percent_change_24h',
      type: 'string',
      isSortable: false,
      position: 6,
    }),
    new BaseProperty({
      path: 'quotes.USD.percent_change_7d',
      type: 'string',
      isSortable: false,
      position: 7,
    }),
    new BaseProperty({
      path: 'last_updated',
      type: 'date',
      isSortable: false,
      position: 8,
    }),
  ];

  public assignDecorator(admin: AdminJS, options?: ResourceOptions) {
    super.assignDecorator(admin, {
      ...options,
      navigation: menu.rest,
      listProperties: ['website_slug', 'name', 'symbol', 'quotes.USD.price'],
      actions: {
        list: {
          showFilter: false,
        },
        show: {
          showInDrawer: true,
        },
        delete: {
          isAccessible: false,
        },
        bulkDelete: {
          isAccessible: false,
        },
        new: {
          isAccessible: false,
        },
        edit: {
          isAccessible: false,
        },
      },
    });
  }

  public id(): string {
    return 'crypto-database';
  }

  public name(): string {
    return 'Crypto Database';
  }

  public properties(): BaseProperty[] {
    return this._properties;
  }

  public property(path): BaseProperty {
    return this._properties.find((p) => p.path === path);
  }

  async count(): Promise<number> {
    return this.totalCount;
  }

  async find(query, { limit = 20, offset = 0 }): Promise<BaseRecord[]> {
    const { data } = await axios.get('https://api.alternative.me/v2/ticker/', {
      params: { start: offset / limit, limit, structure: 'array' },
    });
    this.totalCount = data.metadata.num_cryptocurrencies;

    return data.data.map((obj) => new BaseRecord(obj, this));
  }

  async findOne(id): Promise<BaseRecord> {
    const { data } = await axios.get(`https://api.alternative.me/v2/ticker/${id}/`, {
      params: { structure: 'array' },
    });
    const record = data.data[0] as { last_updated: number };

    return new BaseRecord(
      {
        ...record,
        last_updated: record.last_updated ? new Date(record.last_updated * 1000) : null,
      },
      this,
    );
  }
}
