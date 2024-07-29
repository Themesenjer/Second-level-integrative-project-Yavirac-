// src/genero/genero.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './genero.entity';

@Controller('generos')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Get()
  findAll(): Promise<Genero[]> {
    return this.generoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Genero> {
    return this.generoService.findOne(id);
  }

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return this.generoService.create(createGeneroDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateGeneroDto: UpdateGeneroDto): Promise<void> {
    return this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.generoService.remove(+id);
  }
}
