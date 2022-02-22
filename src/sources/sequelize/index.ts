import { Sequelize } from 'sequelize';
const { development } = require('./config.js');

export const sequelize = new Sequelize(development);
