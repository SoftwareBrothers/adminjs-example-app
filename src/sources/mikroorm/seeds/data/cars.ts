import { faker } from '@faker-js/faker';
import { Owner, Seller } from '../../models';

import { ICar } from '../../models/car.model';

const cars = (count: number, { owners, sellers }): ICar[] =>
  Array.from({ length: count }, () => ({
    name: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
    owner: faker.helpers.arrayElement<Owner>(owners).id,
    seller: faker.helpers.arrayElement<Seller>(sellers).id,
    meta: {
      title: faker.lorem.slug(),
      description: faker.lorem.sentences(3),
    },
  }));

export default cars;
