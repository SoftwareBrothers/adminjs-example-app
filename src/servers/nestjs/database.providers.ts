import { sequelize } from '../../sources/sequelize/index.js';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => sequelize,
  },
];
