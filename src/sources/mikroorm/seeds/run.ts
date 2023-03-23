import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

import { init, orm } from '../config.js';
import { Car, Owner, Seller } from '../models/index.js';
import { cars, owners, sellers } from './data/index.js';

const ownersCount = 4;
const sellersCount = 4;
const carsCount = 15;

const run = async () => {
  await init();
  const ownerRepository = orm.em.getRepository(Owner);
  const createdOwners = owners(ownersCount).map((o) => {
    const owner = ownerRepository.create(o);
    orm.em.persist(owner);

    return owner;
  });
  await orm.em.flush();

  const sellerRepository = orm.em.getRepository(Seller);
  const createdSellers = sellers(sellersCount).map((s) => {
    const seller = sellerRepository.create(s);
    orm.em.persist(seller);

    return seller;
  });
  await orm.em.flush();

  const carRepository = orm.em.getRepository(Car);
  cars(carsCount, {
    owners: createdOwners,
    sellers: createdSellers,
  }).map((c) => {
    const car = carRepository.create(c);
    orm.em.persist(car);

    return car;
  });
  await orm.em.flush();
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
