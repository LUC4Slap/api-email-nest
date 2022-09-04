import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CriarEmailDto } from 'src/dto/send-email.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(criarEmailDto: CriarEmailDto) {
    const { name, email, telefone, pedido, endereco } = criarEmailDto;
    const camposVazios = [];
    if (name == undefined) {
      camposVazios.push('name');
    }

    if (email == undefined) {
      camposVazios.push('email');
    }

    if (telefone == undefined) {
      camposVazios.push('telefone');
    }

    if (pedido == undefined) {
      camposVazios.push('pedido');
    }

    if (endereco == undefined) {
      camposVazios.push('endereco');
    }

    if (camposVazios.length > 0) {
      return {
        message: 'A campos não preenchidos',
        error: true,
        campos: camposVazios,
      };
    }
    const date = new Date();
    const response = await this.mailerService.sendMail({
      to: process.env.MAIL_DESTINI,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Oba... Recebemos mais um pedido',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name,
        email,
        telefone,
        pedido,
        endereco,
        data: date.toISOString(),
      },
    });
    if (response.accepted.length > 0) {
      return { message: 'Pedido enviado Obrigado', error: false };
    } else {
      return {
        message: 'Opss. Parece que acontecu um erro, tente mais tarde',
        error: true,
      };
    }
  }
}
