// src/carrera/carrera.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { Carrera } from './carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrera])],
  providers: [CarreraService],
  controllers: [CarreraController],
})
export class CarreraModule {}
