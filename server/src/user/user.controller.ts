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

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from 'src/auth/role-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @Post('create')
    async createUser(@Body() dto: CreateUserDto): Promise<UserModal> {
        const user = await this.userService.createUser(dto);

        return user;
    }

    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200, type: [UserModel] })
    @Roles('USER')
    @UseGuards(RolesGuard)
    @Get('')
    async getUsers(): Promise<UserModal[]> {
        return this.userService.getUsers();
    }

    @ApiOperation({ summary: 'Получение пользователя по id' })
    @ApiResponse({ status: 200, type: UserModel })
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UserModal> {
        return this.userService.getUserById({ id });
    }

    @ApiOperation({ summary: 'Обновление роли пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Patch('addRole')
    async addRoleUser(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({ summary: 'Забанить пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Patch('ban')
    async banUser(@Body() dto: BanUserDto) {
        return this.userService.banUser(dto);
    }
}
