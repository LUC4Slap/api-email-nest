import { ApiProperty } from '@nestjs/swagger';

export class EmailSwegger {
  @ApiProperty()
  message: string;

  @ApiProperty()
  error: boolean;

  @ApiProperty({ isArray: true })
  campos: ['name', 'email', 'telefone', 'pedido', 'endereco'];
}
