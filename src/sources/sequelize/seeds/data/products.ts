import { faker } from '@faker-js/faker';

import { ProductCreationAttributes } from '../../models/product.model.js';

const products = (count: number, { categoryId }): ProductCreationAttributes[] =>
  Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(1, 100, 2)),
    categoryId,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default products;
