import { v4 } from 'uuid';
import { BaseEntity, Entity, Enum, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';

import type { Car } from './car.model.js';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export interface IOwner {
  firstName: string;
  lastName: string;
  age: number;
  role: UserRole;
}

@Entity({ tableName: 'owners' })
export class Owner extends BaseEntity<Owner, 'id'> implements IOwner {
  @PrimaryKey({ columnType: 'uuid' })
  id = v4();

  @Property({ fieldName: 'first_name', columnType: 'text' })
  firstName: string;

  @Property({ fieldName: 'last_name', columnType: 'text' })
  lastName: string;

  @Property({ fieldName: 'age', columnType: 'integer' })
  age: number;

  @Enum(() => UserRole)
  role: UserRole;

  @Property({ fieldName: 'created_at', columnType: 'timestamptz' })
  createdAt: Date = new Date();

  @Property({
    fieldName: 'updated_at',
    columnType: 'timestamptz',
    onUpdate: () => new Date(),
  })
  updatedAt: Date = new Date();

  @OneToMany('Car', (car: Car) => car.owner)
  cars: Car[];
}
