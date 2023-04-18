import dotenv from 'dotenv';
dotenv.config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { init1644569575919 } from './migrations/1644569575919-init.js';
import { Organization, Person } from './models/index.js';

export const params: DataSourceOptions = {
  type: 'postgres' as const,
  url: process.env.POSTGRES_DATABASE_URL,
  synchronize: process.env.DATABASE_SYNC === 'true',
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [Organization, Person],
  migrations: [init1644569575919],
  migrationsRun: true,
  subscribers: [],
  extra:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: true,
        }
      : undefined,
};

const dataSource = new DataSource(params);

export default dataSource;
