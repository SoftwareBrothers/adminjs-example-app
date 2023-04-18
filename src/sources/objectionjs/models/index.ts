import Knex from 'knex';

import knexConfig from '../knexfile.cjs';
import Office from './office.entity.js';
import Manager from './manager.entity.js';
import { BaseModel } from '../utils/base-model.js';

const knex = BaseModel.knex(Knex.default(knexConfig[process.env.NODE_ENV ?? 'development']));

export { Office, Manager };
export default knex;
