import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { Expenses } from './entities/expenses.entity';
import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
    @InjectRepository(Expenses)
    private readonly expensesRepository: Repository<Expenses>,
  ) {}

  async createBudget({ id, totalBudget }: CreateBudgetDto) {
    if (!id) {
      const newBudget = {
        totalBudget,
        expenses: [],
      };
      const entity = this.budgetRepository.create(newBudget);
      return this.budgetRepository.save(entity);
    }

    const budget = await this.budgetRepository.findOne({ where: { id } });

    if (!budget) throw new NotFoundException(`No item with #${id} exist `);

    return this.budgetRepository.save({ ...budget, totalBudget });
  }

  async createExpense(createExpensesDto: CreateExpensesDto) {
    const { budgetId, ...expenseData } = createExpensesDto;
    const budget = await this.budgetRepository.findOne({
      where: { id: budgetId },
    });

    if (!budget) {
      throw new NotFoundException(`No budget to pin this expense to`);
    }

    const newExpense = this.expensesRepository.create({
      ...expenseData,
      budget,
    });

    return this.expensesRepository.save(newExpense);
  }

  async findAll() {
    const budgets = await this.budgetRepository.find({
      relations: ['expenses'],
    });

    if (!budgets.length) {
      return {};
    }

    return budgets[0];
  }

  async findOne(id: string) {
    const expense = await this.expensesRepository.findOne({ where: { id } });

    if (!expense) {
      throw new NotFoundException(`Expense with ${id} was not found`);
    }

    return expense;
  }

  async remove(id: string) {
    const expense = await this.findOne(id);
    return this.expensesRepository.remove(expense);
  }

  async update(id: string, updateExpensesDto: UpdateExpensesDto) {
    const expense = await this.findOne(id);
    return this.expensesRepository.save({ ...expense, ...updateExpensesDto });
  }
}
