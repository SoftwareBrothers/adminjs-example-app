import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Seller } from './seller.model';
import { Owner } from "./owner.model";

@Entity({ tableName: 'cars' })
export class Car extends BaseEntity<Car, 'id'> {
  @PrimaryKey()
  id: number;

  @Property({ fieldName: 'name', columnType: 'text' })
  name: string;

  @Property({ fieldName: 'meta', columnType: 'jsonb', default: '{}' })
  meta: Record<string, any>;

  @Property({ fieldName: 'created_at', columnType: 'timestamptz' })
  createdAt: Date = new Date();

  @Property({ fieldName: 'updated_at', columnType: 'timestamptz', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @ManyToOne(() => Owner, { mapToPk: true })
  owner: Owner;

  @ManyToOne(() => Seller, { mapToPk: true })
  seller: Seller;
}
