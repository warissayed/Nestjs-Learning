import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser() {
    return 'this is the message from user service';
  }
}
