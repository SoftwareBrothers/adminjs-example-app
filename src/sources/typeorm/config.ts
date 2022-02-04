require('dotenv').config();
const {createConnection} = require("typeorm");

const params = {
  type: "postgres",
  host: process.env.TYPEORM_HOST || 'localhost',
  port: process.env.TYPEORM_PORT || 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${__dirname}/models/*.entity.ts`],
  migrations: [`${__dirname}/migrations/*.ts`],
  migrationsRun: true,
  cli: {
    migrationsDir: `${__dirname}/migrations`
  },
}

export default params;
export const connection = createConnection(params)
