import { Injectable } from '@nestjs/common';
import { MessageTesteDto } from './dto/message-teste.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  returnMessageCustom(message: MessageTesteDto) {
    return message;
  }
}
