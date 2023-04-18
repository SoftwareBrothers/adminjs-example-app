import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';

import { Organization } from '../../models/index.js';
import { CountryEnum } from './../../enums/country.enum.js';

const organizations = (count: number): DeepPartial<Organization>[] =>
  Array.from({ length: count }, () => ({
    name: faker.company.name(),
    city: faker.address.city(),
    address: `${faker.address.street()} ${faker.address.buildingNumber()}`,
    postalCode: faker.address.zipCode(),
    country: CountryEnum.GreatBritain,
  }));

export default organizations;
