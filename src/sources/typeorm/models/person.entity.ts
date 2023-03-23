import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Organization } from './organization.entity.js';

@Entity({ name: 'persons' })
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'email', nullable: false })
  public email: string;

  @Column({ name: 'first_name' })
  public firstName: string;

  @Column({ name: 'last_name' })
  public lastName: string;

  @Column({ name: 'phone' })
  public phone: string;

  @ManyToOne(() => Organization)
  @JoinColumn({ name: 'organization_id' })
  public organization: Organization;

  @RelationId((person: Person) => person.organization)
  @Column({ name: 'organization_id' })
  public organizationId: number;

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
