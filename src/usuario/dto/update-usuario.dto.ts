// src/usuario/dto/update-usuario.dto.ts
export class UpdateUsuarioDto {
  readonly nombre?: string;
  readonly email?: string;
  readonly contraseña?: string;
  readonly rolId?: number;
  readonly carreraId?: number;
}
