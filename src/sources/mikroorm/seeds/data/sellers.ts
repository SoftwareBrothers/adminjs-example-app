import { faker } from '@faker-js/faker';

import { ISeller } from '../../models/seller.model.js';

const sellers = (count: number): ISeller[] =>
  Array.from({ length: count }, () => ({
    name: faker.company.name(),
  }));

export default sellers;
