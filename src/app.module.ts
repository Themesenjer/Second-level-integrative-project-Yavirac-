// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroModule } from './libro/libro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CarreraModule } from './carrera/carrera.module';
import { GeneroModule } from './genero/genero.module';
import { RolModule } from './rol/rol.module';
import { Carrera } from './carrera/carrera.entity';
import { Usuario } from './usuario/usuario.entity';
import { Genero } from './genero/genero.entity';
import { Rol } from './rol/rol.entity';
import { Libro } from './libro/libro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1722.pjrr',
      database: 'biblioteca_virtual',
      entities: [Usuario, Carrera, Genero, Rol, Libro], // Importa aquí todas tus entidades
      synchronize: true,
    }),
    LibroModule,
    UsuarioModule,
    CarreraModule,
    GeneroModule,
    RolModule
  ],
})
export class AppModule {}

