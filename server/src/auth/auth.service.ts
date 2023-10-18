import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtServce: JwtService,
  ) {}

  async registration(userDto: Prisma.UserCreateInput) {
    const candidate = await this.userService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const hashPassword = await argon2.hash(userDto.password);

    const valid = argon2.verify(hashPassword, userDto.password);

    if (!valid) {
      throw new BadRequestException('Невалидный пароль {SERVER}');
    }

    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(
    user: Prisma.PromiseReturnType<typeof this.userService.createUser>,
  ) {
    const payload = { email: user.email, id: user.id, roles: user.roles };

    return {
      token: this.jwtServce.sign(payload),
    };
  }

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);

    return this.generateToken(user);
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Такого пользователя не существует',
      });
    }

    const passwordEquals = await argon2.verify(user.password, userDto.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Неправильный логин или пароль',
    });
  }
}
