// src/genero/genero.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Libro, (libro) => libro.genero)
  libros: Libro[];
}

