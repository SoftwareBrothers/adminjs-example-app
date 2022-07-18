import { faker } from '@faker-js/faker';

import { ISeller } from '../../models/seller.model';

const sellers = (count: number): ISeller[] =>
  Array.from({ length: count }, () => ({
    name: faker.company.companyName(),
  }));

export default sellers;
