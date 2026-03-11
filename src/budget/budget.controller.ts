import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { BudgetService } from './budget.service';
import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  createBudget(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.createBudget(createBudgetDto);
  }

  @Post('expenses')
  createExpense(@Body() createExpensesDto: CreateExpensesDto) {
    return this.budgetService.createExpense(createExpensesDto);
  }

  @Delete('expenses/:id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }

  @Patch('expenses/:id')
  update(
    @Param('id') id: string,
    @Body() updateExpensesDto: UpdateExpensesDto,
  ) {
    return this.budgetService.update(id, updateExpensesDto);
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }
}
