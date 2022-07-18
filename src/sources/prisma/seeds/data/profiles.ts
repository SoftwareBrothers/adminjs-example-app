import { faker } from '@faker-js/faker';

const profiles = (count: number, { publisherId }) =>
  Array.from({ length: count }, () => ({
    bio: faker.lorem.sentence(4),
    publisherId,
  }));

export default profiles;
