import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.POSTGRES_DATABASE_URL, {
  dialect: 'postgres',
  logging: process.env.DATABASE_LOGGING === 'true',
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : undefined,
});
