import { faker } from '@faker-js/faker';

import { User, Gender } from '../../models/user.model';

const users = (count: number): User[] =>
  Array.from({ length: count }, () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(true).toLowerCase() as Gender,
    email: faker.internet.email(),
    isMyFavourite: faker.datatype.boolean(),
  }));

export default users;
