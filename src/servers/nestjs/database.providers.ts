import { sequelize } from '../../sources/sequelize';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => sequelize,
  },
];
