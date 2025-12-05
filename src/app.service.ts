import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from AppService';
  }
  getGoodbye(): string {
    return 'Goodbye World! from AppService';
  }
}
