// src/libro/dto/update-libro.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateLibroDto } from './create-libro.dto';

export class UpdateLibroDto extends PartialType(CreateLibroDto) {}
