require('dotenv').config({
  path: `${process.cwd()}/.env`,
});
import dataSource from '../config';
import { Organization, Person } from '../models';
import { organizations, persons } from './data';

const organizationsCount = 3;
const personsPerOrganizationCount = 2;

const run = async () => {
  await dataSource.initialize();
  const em = dataSource.manager;
  const organizationRepository = em.getRepository(Organization);
  const personRepository = em.getRepository(Person);

  const createdOrganizations = await organizationRepository.insert(organizations(organizationsCount));

  await Promise.all(
    createdOrganizations.identifiers.map(({ id: organizationId }) =>
      personRepository.insert(persons(personsPerOrganizationCount, { organizationId }))
    )
  );
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
