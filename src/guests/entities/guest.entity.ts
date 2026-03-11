import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RSVPStatus } from '../enums/rsvp-status';
import { Table } from '../../tables/entities/table.entity';

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
  plusOneName?: string;

  @Column({ nullable: true })
  tableId: string | null;

  @ManyToOne(() => Table, (table) => table.guest, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'tableId' })
  table: Table;
}
