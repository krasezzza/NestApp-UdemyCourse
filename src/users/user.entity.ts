import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logCreate() {
    console.log('New user created', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User updated', this.id);
  }

  @AfterRemove()
  logDelete() {
    console.log('User deleted', this.id);
  }
}
