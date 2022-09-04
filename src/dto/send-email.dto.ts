import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CriarEmailDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly telefone: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly pedido: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly endereco: string;
}
