import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async registerUser(registerUserDto: RegisterUserDto) {
    const saltRounds = 10;
    /*
     * TODO: Implement user registration logic here
     * 1. Validate user input
     * 2. Check if user already exists (email, username) - throw error if exists
     * 3. Hash password
     * 4. Save user to database
     * 5. Return success message
     */
    //1 Validate user input
    //Hash Password
    const hashedPassword = await bcrypt.hash(
      registerUserDto.password,
      saltRounds,
    );

    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });

    return {};
  }
}
