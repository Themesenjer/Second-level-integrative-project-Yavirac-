// src/usuario/dto/create-usuario.dto.ts
export class CreateUsuarioDto {
  readonly nombre: string;
  readonly email: string;
  readonly contraseña: string;
  readonly rolId: number;
  readonly carreraId?: number; // Opcional para usuarios que no sean estudiantes
}

  