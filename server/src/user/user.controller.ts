import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { User as UserModal } from '@prisma/client';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Roles } from 'src/auth/role-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @Post('create')
  async createUser(@Body() dto: CreateUserDto): Promise<UserModal> {
    const user = await this.userService.createUser(dto);

    return user;
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Получение пользователя по id' })
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById({ id });
  }

  @ApiOperation({ summary: 'Обновление роли пользователя' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Patch('addRole')
  async addRoleUser(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: 'Забанить пользователя' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Patch('ban')
  async banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
