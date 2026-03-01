import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RSVPStatus } from '../enums/rsvp-status';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: RSVPStatus })
  rsvpStatus: RSVPStatus;

  @Column()
  dietaryRestriction: string;

  @Column()
  allergies: string;

  @Column()
  kidsUnder14: number;

  @Column()
  notes: string;

  @Column()
  plusOne: boolean;

  @Column({ nullable: true })
  plusOneName: string;
}
