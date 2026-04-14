import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './Schemas/User.Schemas';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  async createUser(registerUserDto: RegisterUserDto) {
    return await this.userModel.create({
      fname: registerUserDto.fname,
      lname: registerUserDto.lname,
      email: registerUserDto.email,
      password: registerUserDto.password,
    });
  }
}
