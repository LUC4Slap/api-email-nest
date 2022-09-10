import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { MessageTesteDto } from './dto/message-teste.dto';
import { CriarEmailDto } from './dto/send-email.dto';
import { MailService } from './mail/mail.service';
import { EmailSwegger } from './swegger/email.swegger';

@Controller('api/v1')
@ApiTags('E-mail')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mailService: MailService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Faz teste para ver se endpoint esta funcionando' })
  getHello(@Query() message: MessageTesteDto) {
    if (message) {
      return this.appService.returnMessageCustom(message);
    }
    return this.appService.getHello();
  }

  @Post('email')
  @ApiOperation({ summary: 'Faz o envio de um e-mail com o pedido' })
  @ApiResponse({
    status: 201,
    description: 'E-mail enviado com sucesso',
    type: EmailSwegger,
  })
  @ApiResponse({
    status: 400,
    description: 'Campos do Body invalidos',
    type: EmailSwegger,
  })
  async sendEmail(@Body() criarEmailDto: CriarEmailDto) {
    return await this.mailService.sendEmail(criarEmailDto);
  }
}
