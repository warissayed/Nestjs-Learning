import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './Schemas/User.Schemas';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  //create user method
  async createUser(registerUserDto: RegisterUserDto) {
    try {
      return await this.userModel.create({
        fname: registerUserDto.fname,
        lname: registerUserDto.lname,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (error) {
      const err = error as { code: number; keyPattern?: { email?: number } };
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      if (
        err.code === DUPLICATE_KEY_ERROR_CODE &&
        err.keyPattern &&
        err.keyPattern.email
      ) {
        throw new ConflictException('Email already exists ok');
      }
      throw error;
    }
  }
}
