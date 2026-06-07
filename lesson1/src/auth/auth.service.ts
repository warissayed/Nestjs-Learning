import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  //user registration logic
  async registerUser(registerUserDto: RegisterUserDto) {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(
      registerUserDto.password,
      saltRounds,
    );

    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });
    const payload = { sub: user._id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    console.log('Registered User:', user, token);
    return { token };
  }
}
