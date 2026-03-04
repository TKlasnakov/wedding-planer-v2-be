import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  findAll() {
    return this.tableRepository.find({ relations: ['guest'] });
  }

  async findOne(id: string) {
    const table = await this.tableRepository.findOne({
      where: { id },
      relations: ['guest'],
    });
    if (!table) throw new NotFoundException(`Table with #${id} not found`);

    return table;
  }

  create(createTableDto: CreateTableDto) {
    const newTable = this.tableRepository.create(createTableDto);

    return this.tableRepository.save(newTable);
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    const table = await this.findOne(id);

    return this.tableRepository.save({ ...table, ...updateTableDto });
  }

  async delete(id: string) {
    const table = await this.findOne(id);

    return this.tableRepository.remove(table);
  }
}
