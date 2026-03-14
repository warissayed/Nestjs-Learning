import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  /* 
  GET /Users/:id
  POST /Users
  PATCH /Users/:id
  DELETE /Users/:id
  
  */
  @Get() // GET /User
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  Create(@Body() user: { '' }) {
    return user;
  }

  @Patch(':id')
  Update(@Param('id') id: string) {
    return { id };
  }
  @Delete(':id')
  DeleteUser(@Param('id') id: string) {
    return { id };
  }
}
