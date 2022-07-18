import { faker } from '@faker-js/faker';

const publishers = (count: number, { publishers }) =>
  Array.from({ length: count }, () => ({
    title: faker.lorem.sentence(3),
    content: faker.lorem.sentence(8),
    status: faker.helpers.arrayElement(['ACTIVE', 'REMOVED']) as any,
    published: faker.datatype.boolean(),
    someJson: [
      {
        number: faker.random.numeric(8),
        string: faker.lorem.words(3),
        boolean: faker.datatype.boolean(),
        date: faker.date.recent().toISOString(),
      },
    ],
    publisherId: faker.helpers.arrayElement<any>(publishers).id,
  }));

export default publishers;
