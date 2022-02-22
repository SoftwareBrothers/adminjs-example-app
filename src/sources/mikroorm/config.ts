import { MikroORM } from '@mikro-orm/core';
import { Owner, Car, Seller } from './models';
import { Options } from '@mikro-orm/core/utils';
import { Configuration } from '@mikro-orm/core/utils/Configuration';

const config: Options = {
  entities: [Owner, Car, Seller],
  dbName: process.env.MIKROORM_DATABASE,
  type: (process.env.MIKROORM_TYPE || 'postgresql') as keyof typeof Configuration.PLATFORMS,
  clientUrl: process.env.MIKROORM_HOST || 'localhost',
  port: +process.env.MIKROORM_PORT || 5432,
  user: process.env.MIKROORM_USERNAME,
  password: process.env.MIKROORM_PASSWORD,
  allowGlobalContext: true,
  migrations: {
    path: __dirname + '/migrations',
    emit: 'ts',
  },
};

export const init = async () => {
  orm = await MikroORM.init(config);
};

export default config;
export let orm;
