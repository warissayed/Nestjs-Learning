import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  /* 
  GET /Users/:id
  POST /Users
  PATCH /Users/:id
  DELETE /Users/:id
  
  */
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
