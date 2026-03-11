import { Guest } from 'src/guests/entities/guest.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  number: number;

  @Column()
  capacity: number;

  @OneToMany(() => Guest, (guest) => guest.table, { nullable: true })
  guest?: Guest[];
}
