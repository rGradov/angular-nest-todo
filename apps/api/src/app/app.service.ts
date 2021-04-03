import { Injectable } from '@nestjs/common';
import { Message } from '@angular-nest-todo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'test js' };
  }
}
