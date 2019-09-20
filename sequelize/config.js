module.exports = {
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    database: 'database_test',
    host: 'postgres',
    dialect: 'postgres',
  },
  // Psql
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DATABASE || 'database_development',
    host: process.env.POSTGRES_HOST || 'postgres',
    dialect: 'postgres',
  },
  // MYSQL
  // development: {
  //   username: 'root',
  //   password: process.env.MYSQL_ROOT_PASSWORD,
  //   port: process.env.MYSQL_PORT || 5432,
  //   database: 'database_development',
  //   host: 'mysql',
  //   dialect: 'mysql',
  // },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
}
