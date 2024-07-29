// src/carrera/carrera.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from './carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>,
  ) {}

  findAll(): Promise<Carrera[]> {
    return this.carreraRepository.find();
  }

  async findOne(id: number): Promise<Carrera> {
    const carrera = await this.carreraRepository.findOne({ where: { id } });
    if (!carrera) {
      throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }
    return carrera;
  }

  create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    const carrera = this.carreraRepository.create(createCarreraDto);
    return this.carreraRepository.save(carrera);
  }

  async update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<void> {
    await this.carreraRepository.update(id, updateCarreraDto);
  }

  async remove(id: number): Promise<void> {
    await this.carreraRepository.delete(id);
  }
}
