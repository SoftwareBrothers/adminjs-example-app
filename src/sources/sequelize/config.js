module.exports = {
  development: {
    url: process.env.POSTGRES_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.POSTGRES_DATABASE_URL,
    dialect: 'postgres',
  },
};
