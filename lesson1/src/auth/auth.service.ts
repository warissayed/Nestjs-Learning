import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    return { message: 'this is the message from service' };
  }
}
