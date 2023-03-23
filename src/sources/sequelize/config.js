export default {
  development: {
    use_env_variable: 'POSTGRES_DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'POSTGRES_DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
