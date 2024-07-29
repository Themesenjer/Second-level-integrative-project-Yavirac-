// src/carrera/carrera.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Libro } from '../libro/libro.entity';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Usuario, (usuario) => usuario.carrera)
  usuarios: Usuario[];

  @OneToMany(() => Libro, (libro) => libro.carrera)
  libros: Libro[];
}
