import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();
const { createConnection } = require('typeorm');

const params = {
  type: process.env.TYPEORM_TYPE || 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: +process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${__dirname}/models/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsRun: true,
  cli: {
    migrationsDir: `${process.cwd()}/src/sources/typeorm/migrations`,
  },
};

export default params as TypeOrmModuleOptions;
export const connection = createConnection(params);
