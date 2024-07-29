// src/rol/rol.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './rol.entity';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  findAll(): Promise<Rol[]> {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Rol> {
    return this.rolService.findOne(id);
  }

  @Post()
  create(@Body() createRolDto: CreateRolDto): Promise<Rol> {
    return this.rolService.create(createRolDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRolDto: UpdateRolDto): Promise<void> {
    return this.rolService.update(+id, updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rolService.remove(+id);
  }
}
