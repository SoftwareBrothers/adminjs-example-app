import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';

import { Person } from '../../models/index.js';

const persons = (count: number, { organizationId }): DeepPartial<Person>[] =>
  Array.from({ length: count }, () => ({
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
    organizationId,
  }));

export default persons;
