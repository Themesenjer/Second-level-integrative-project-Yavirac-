// src/carrera/carrera.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './carrera.entity';

@Controller('carreras')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  findAll(): Promise<Carrera[]> {
    return this.carreraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Carrera> {
    return this.carreraService.findOne(id);
  }

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    return this.carreraService.create(createCarreraDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCarreraDto: UpdateCarreraDto): Promise<void> {
    return this.carreraService.update(+id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.carreraService.remove(+id);
  }
}
