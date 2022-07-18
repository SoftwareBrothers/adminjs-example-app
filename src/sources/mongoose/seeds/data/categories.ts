import { faker } from '@faker-js/faker';

import { Category } from '../../models/category.model';

const categories = (count: number, { userId }): Category[] =>
  Array.from({ length: count }, () => ({
    title: faker.commerce.department(),
    owner: userId,
    nested: {
      field: faker.database.column(),
      value: faker.lorem.word(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default categories;
