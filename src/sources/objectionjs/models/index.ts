import Knex from 'knex';

import knexConfig from '../knexfile';
import Office from './office.entity';
import Manager from './manager.entity';
import { BaseModel } from '../utils/base-model';

const knex = BaseModel.knex(Knex(knexConfig[process.env.NODE_ENV ?? 'development']));

export { Office, Manager };
export default knex;
