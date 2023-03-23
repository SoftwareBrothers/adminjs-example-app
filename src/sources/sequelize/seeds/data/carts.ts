import { faker } from '@faker-js/faker';

import { CartCreationAttributes } from '../../models/cart.model.js';

const carts = (count: number, { productId, orderId }): CartCreationAttributes[] =>
  Array.from({ length: count }, () => ({
    quantity: Number(faker.random.numeric(1, { bannedDigits: '0' })),
    productId,
    orderId,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default carts;
