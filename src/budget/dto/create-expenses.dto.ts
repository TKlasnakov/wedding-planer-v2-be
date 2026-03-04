import { BudgetCategory } from '../enums/budget-category.enum';

export class CreateExpensesDto {
  category: BudgetCategory;
  itemName: string;
  vendorName: string;
  estimated: number;
  isPaid: boolean;
  budgetId: string;
  notes?: string;
  actual?: number;
}
