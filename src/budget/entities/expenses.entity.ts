import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BudgetCategory } from '../enums/budget-category.enum';
import { Budget } from './budget.entity';

@Entity()
export class Expenses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: BudgetCategory })
  category: BudgetCategory;

  @Column()
  itemName: string;

  @Column()
  vendorName: string;

  @Column()
  estimated: number;

  @Column()
  isPaid: boolean;

  @Column({ nullable: true })
  actual: number;

  @Column({ nullable: true })
  notes?: string;

  @ManyToOne(() => Budget, (budget) => budget.expenses)
  budget: Budget;
}
