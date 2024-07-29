// src/libro/libro.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
  ) {}

  findAll(): Promise<Libro[]> {
    return this.librosRepository.find();
  }

  async findOne(id: number): Promise<Libro> {
    const libro = await this.librosRepository.findOne({ where: { id } });
    if (!libro) {
      throw new NotFoundException(`Libro with ID ${id} not found`);
    }
    return libro;
  }

  create(createLibroDto: CreateLibroDto): Promise<Libro> {
    const libro = this.librosRepository.create(createLibroDto);
    return this.librosRepository.save(libro);
  }

  async update(id: number, updateLibroDto: UpdateLibroDto): Promise<Libro> {
    const libro = await this.findOne(id);
    Object.assign(libro, updateLibroDto);
    return this.librosRepository.save(libro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.librosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Libro with ID ${id} not found`);
    }
  }
}
