const config = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.POSTGRES_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.POSTGRES_DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;
