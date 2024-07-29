// src/libro/libro.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Libro } from './libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
