import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(dto: RegisterUserDto) {
    // ✅ Step 1: Input validation handled by DTO + ValidationPipe in controller

    // ✅ Step 2: Check if email or username already exists
    const existingUser = await this.userModel.findOne({
      $or: [{ email: dto.email }, { username: dto.username }],
    });

    if (existingUser) {
      const field = existingUser.email === dto.email ? 'Email' : 'Username';
      throw new ConflictException(`${field} is already taken`);
    }

    // ✅ Step 3: Hash the password
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);

    // ✅ Step 4: Save user to MongoDB
    let savedUser: UserDocument;
    try {
      const newUser = new this.userModel({
        username: dto.username,
        email: dto.email,
        password: hashedPassword,
      });
      savedUser = await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException('Could not register user');
    }

    // ✅ Step 5: Sign JWT and return token
    const payload = {
      sub: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      message: 'User registered successfully',
      access_token: token,
    };
  }
}