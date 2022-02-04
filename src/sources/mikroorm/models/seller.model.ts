import {Entity, OneToMany, PrimaryKey, Property} from "@mikro-orm/core";
import { v4 } from 'uuid';
import {Car} from "./car.model";

@Entity({ tableName: 'sellers' })
export class Seller {
  @PrimaryKey({ columnType: 'uuid' })
  public id = v4();

  @Property({ fieldName: 'name', columnType: 'text' })
  name: string;

  @OneToMany(() => Car, (car) => car.seller)
  cars: Car[];
}
