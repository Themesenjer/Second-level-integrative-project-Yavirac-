// src/usuario/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { Carrera } from '../carrera/carrera.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contraseña: string;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  rol: Rol;

  @ManyToOne(() => Carrera, (carrera) => carrera.usuarios)
  carrera: Carrera;
}
