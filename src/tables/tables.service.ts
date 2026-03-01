import { Injectable } from '@nestjs/common';

@Injectable()
export class TablesService {
  findAll() {}

  findOne(id: string) {}

  create(tableDto) {}

  update(id: string, tableDto) {}

  delete(id: string) {}
}
