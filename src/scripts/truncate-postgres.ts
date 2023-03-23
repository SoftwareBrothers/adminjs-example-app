import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

import { sequelize } from '../sources/sequelize/index.js';

const truncatePostgres = async () => {
  await sequelize.query(`
    CREATE OR REPLACE FUNCTION truncate_tables() RETURNS void AS $$
    DECLARE
    row record;
    BEGIN
    FOR row IN
    SELECT
    tablename
    FROM
    pg_catalog.pg_tables
    WHERE
    schemaname = 'public'
    AND
    tablename NOT IN ('SequelizeMeta', 'migrations', 'mikro_orm_migrations')
    LOOP
    EXECUTE format('TRUNCATE %I RESTART IDENTITY CASCADE', row.tablename);
    END LOOP;
    END;
    $$ LANGUAGE plpgsql;

    SELECT truncate_tables();
    `);
};

truncatePostgres()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
