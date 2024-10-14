import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  price: number;

  @AfterInsert()
  logCreate() {
    console.log('Offer created', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Offer updated', this.id);
  }

  @AfterRemove()
  logDelete() {
    console.log('Offer deleted', this.id);
  }
}
