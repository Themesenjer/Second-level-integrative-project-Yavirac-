// src/genero/genero.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
  ) {}

  findAll(): Promise<Genero[]> {
    return this.generoRepository.find();
  }

  async findOne(id: number): Promise<Genero> {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      throw new NotFoundException(`Genero con ID ${id} no encontrado`);
    }
    return genero;
  }

  create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero = this.generoRepository.create(createGeneroDto);
    return this.generoRepository.save(genero);
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<void> {
    await this.generoRepository.update(id, updateGeneroDto);
  }

  async remove(id: number): Promise<void> {
    await this.generoRepository.delete(id);
  }
}
