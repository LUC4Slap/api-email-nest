import { ApiPropertyOptional } from '@nestjs/swagger';

export class MessageTesteDto {
  @ApiPropertyOptional()
  message?: string;
}
