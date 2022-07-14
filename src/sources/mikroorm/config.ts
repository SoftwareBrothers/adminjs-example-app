import { MikroORM } from '@mikro-orm/core';
import { Options } from '@mikro-orm/core/utils';

import { Owner, Car, Seller } from './models';

const config: Options = {
  entities: [Owner, Car, Seller],
  type: 'postgresql' as const,
  clientUrl: process.env.POSTGRES_DATABASE_URL,
  migrations: {
    path: 'src/sources/mikroorm/migrations',
    emit: 'ts',
  },
};

export const init = async () => {
  orm = await MikroORM.init(config);
};

export default config;
export let orm;
