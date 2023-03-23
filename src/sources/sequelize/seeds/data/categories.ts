import { faker } from '@faker-js/faker';

import { CategoryCreationAttributes } from '../../models/category.model.js';

const categories = (count: number): CategoryCreationAttributes[] =>
  Array.from({ length: count }, () => ({
    name: faker.commerce.department(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default categories;
