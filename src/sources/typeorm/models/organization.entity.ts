import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CountryEnum } from '../enums/country.enum.js';

@Entity({ name: 'organizations' })
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public address: string;

  @Column()
  public city: string;

  @Column({ name: 'postal_code' })
  public postalCode: string;

  @Column({
    type: 'enum',
    enum: CountryEnum,
    nullable: false,
  })
  public country: CountryEnum;
}
