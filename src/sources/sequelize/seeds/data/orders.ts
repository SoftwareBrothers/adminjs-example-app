import { faker } from '@faker-js/faker';

import { OrderCreationAttributes } from '../../models/order.model';

const orders = (count: number): OrderCreationAttributes[] =>
  Array.from({ length: count }, () => ({
    isPaid: faker.datatype.boolean(),
    delivery: `${faker.address.zipCode()} ${faker.address.city()}, ${faker.address.street()} ${faker.address.buildingNumber()}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default orders;
