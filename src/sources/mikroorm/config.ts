import { MikroORM, Options } from '@mikro-orm/core';

import { Owner, Car, Seller } from './models/index.js';

const driverOptions: Options['driverOptions'] = {};

if (process.env.NODE_ENV === 'production') {
  driverOptions.connection = { ssl: true };
}

const config: Options = {
  entities: [Owner, Car, Seller],
  type: 'postgresql' as const,
  clientUrl: process.env.POSTGRES_DATABASE_URL,
  migrations: {
    path: 'src/sources/mikroorm/migrations',
    emit: 'ts',
    disableForeignKeys: false,
  },
  driverOptions,
  debug: process.env.DATABASE_LOGGING === 'true',
};

export const init = async () => {
  orm = await MikroORM.init(config);
};

export default config;
export let orm: MikroORM;
