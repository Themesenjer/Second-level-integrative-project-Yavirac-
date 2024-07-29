// src/libro/libro.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Genero } from '../genero/genero.entity';
import { Carrera } from '../carrera/carrera.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) // Permitir valores NULL temporalmente
  isbn: string;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  ano_pub: string;

  @Column()
  editorial: string;

  @Column()
  nivel: string;

  @Column()
  pdf: string;

  @ManyToOne(() => Genero, (genero) => genero.libros)
  genero: Genero;

  @ManyToOne(() => Carrera, (carrera) => carrera.libros)
  carrera: Carrera;
}
