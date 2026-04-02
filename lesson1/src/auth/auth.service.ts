import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(registerUserDto: RegisterUserDto) {
    /*
     * TODO: Implement user registration logic here
     * 1. Validate user input
     * 2. Check if user already exists (email, username) - throw error if exists
     * 3. Hash password
     * 4. Save user to database
     * 5. Return success message
     */
    //1 Validate user input
    if (
      !registerUserDto.fname ||
      !registerUserDto.lname ||
      !registerUserDto.email ||
      !registerUserDto.password
    ) {
      throw new Error('All fields are required');
    }
    this.userService.createUser();

    return {
      message: 'this is the message from service',
      data: registerUserDto,
    };
  }
}
