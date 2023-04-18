import { BaseModel } from '../utils/base-model.js';

import Office from './office.entity.js';

class Manager extends BaseModel {
  id: number;

  firstName: string;

  lastName: string;

  age: number;

  officeId?: number;

  office?: Office;

  static tableName = 'managers';

  static jsonSchema = {
    type: 'object',
    required: ['firstName', 'lastName'],

    properties: {
      id: { type: 'integer' },
      officeId: { type: 'integer' },
      firstName: { type: 'string', minLength: 1, maxLength: 255 },
      lastName: { type: 'string', minLength: 1, maxLength: 255 },
      age: { type: 'number' },
      createdAt: { type: 'string', format: 'date-time', readOnly: true },
      updatedAt: { type: 'string', format: 'date-time', readOnly: true },
    },
  };

  static relationMappings = () => ({
    office: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Office,
      join: {
        from: 'managers.officeId',
        to: 'offices.id',
      },
    },
  });
}

export default Manager;
