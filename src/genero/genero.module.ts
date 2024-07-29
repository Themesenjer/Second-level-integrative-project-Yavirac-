// src/genero/genero.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { Genero } from './genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  providers: [GeneroService],
  controllers: [GeneroController],
})
export class GeneroModule {}
