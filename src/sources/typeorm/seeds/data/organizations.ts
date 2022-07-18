import { CountryEnum } from './../../enums/country.enum';
import { DeepPartial } from 'typeorm';
import { faker } from '@faker-js/faker';

import { Organization } from '../../models';

const organizations = (count: number): DeepPartial<Organization>[] =>
  Array.from({ length: count }, () => ({
    name: faker.company.companyName(),
    city: faker.address.city(),
    address: `${faker.address.street()} ${faker.address.buildingNumber()}`,
    postalCode: faker.address.zipCode(),
    country: CountryEnum.GreatBritain,
  }));

export default organizations;
