import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expenses } from './expenses.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalBudget: number;

  @OneToMany(() => Expenses, (expense) => expense.budget)
  expenses: Expenses[];
}
