import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private readonly guestsRepository: Repository<Guest>,
  ) {}

  create(createGuestDto: CreateGuestDto) {
    const guest = this.guestsRepository.create(createGuestDto);

    return this.guestsRepository.save(guest);
  }

  findAll() {
    return this.guestsRepository.find();
  }

  async findOne(id: string) {
    const guest = await this.guestsRepository.findOne({ where: { id } });
    if (!guest) throw new NotFoundException(`Guest whith #${id} not found`);

    return guest;
  }

  async update(id: string, updateGuestDto: UpdateGuestDto) {
    const guest = await this.findOne(id);

    return this.guestsRepository.save({ ...guest, ...updateGuestDto });
  }

  async remove(id: string) {
    const guest = await this.findOne(id);

    return this.guestsRepository.remove(guest);
  }
}
