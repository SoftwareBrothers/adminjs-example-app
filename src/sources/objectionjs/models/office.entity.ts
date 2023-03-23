import { BaseModel } from '../utils/base-model.js';

import Manager from './manager.entity.js';

export interface OfficeAddress {
  street: string;
  city: string;
  zipCode: string;
}

class Office extends BaseModel {
  id: number;

  name: string;

  address?: OfficeAddress;

  managers?: Manager[];

  static tableName = 'offices';

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      address: {
        type: 'object',
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
          zipCode: { type: 'string' },
        },
      },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  };

  static relationMappings = () => ({
    managers: {
      relation: BaseModel.HasManyRelation,
      modelClass: Manager,
      join: {
        from: 'offices.id',
        to: 'managers.officeId',
      },
    },
  });
}

export default Office;
