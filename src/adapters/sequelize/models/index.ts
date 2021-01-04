/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';

import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config.js`)[env];

const basename = path.basename(__filename);
const db: { sequelize?: any; Sequelize?: any } = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new (Sequelize as any)(
    process.env[config.use_env_variable],
    config,
  );
} else {
  sequelize = new (Sequelize as any)(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
