import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

import type { Car } from './car.model.js';

export interface ISeller {
  name: string;
}

@Entity({ tableName: 'sellers' })
export class Seller implements ISeller {
  @PrimaryKey({ columnType: 'uuid' })
  public id = v4();

  @Property({ fieldName: 'name', columnType: 'text' })
  name: string;

  @OneToMany('Car', (car: Car) => car.seller)
  cars: Car[];
}
