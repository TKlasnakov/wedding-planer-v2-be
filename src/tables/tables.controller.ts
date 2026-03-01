import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TablesService } from './tables.service';

@Controller()
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Get()
  findAll() {
    return this.tablesService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.tablesService.findOne(id);
  }

  @Post()
  create(@Body() tableDto) {
    return this.tablesService.create(tableDto);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() tableDto) {
    return this.tablesService.update(id, tableDto);
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return this.tablesService.delete(id);
  }
}
