import { faker } from '@faker-js/faker';

import { IOwner, UserRole } from '../../models/owner.model.js';

const owners = (count: number): IOwner[] =>
  Array.from({ length: count }, () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: Number(faker.random.numeric(2)),
    role: faker.helpers.arrayElement(Object.values(UserRole)),
  }));

export default owners;
