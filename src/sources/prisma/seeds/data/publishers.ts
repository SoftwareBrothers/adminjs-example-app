import { faker } from '@faker-js/faker';

const publishers = (count: number) =>
  Array.from({ length: count }, () => ({
    name: faker.company.companyName(),
    email: faker.internet.email(),
  }));

export default publishers;
